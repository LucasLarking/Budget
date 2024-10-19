import React, { useState } from "react";
import useAddVendor from "./useAddVendor";
import useGetCategories from "@/category/useGetCategories";
import { GetCategory } from "@/category/Category";
import CategoryForm from "@/category/CategoryForm";


interface Props {
    closeForm: () => void;
    onVendorCreated: (vendor: any) => void;
  }

const VendorForm = ({closeForm, onVendorCreated}: Props) => {
    const addVendor = useAddVendor();
    const { data: categorys, error: categoryError, isLoading: categoryLoading } = useGetCategories();
    const [showCategoryForm, setShowCategoryForm] = useState<boolean>(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
    const [successMsg, setSuccessMsg] = useState<string>("")
    const [errorMsg, setErrorMsg] = useState<string>("")
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let Vendor = formData.get("Vendor") as string;
        let SpendingLimit = formData.get("SpendingLimit") as string;
        const Category = formData.get("Category") as string;
        console.log("Sending Form: ", formData, Vendor, Category);
        addVendor.mutate(
            { Vendor: Vendor, Category: parseInt(Category), SpendingLimit:  parseInt(SpendingLimit)},
            {
              onSuccess: (createdVendor) => {setSuccessMsg("Vedbir Skapad");console.log("mission success"); setErrorMsg(""); closeForm(); onVendorCreated(createdVendor);},
              onError: (error) => {setErrorMsg("Ett fel uppstod"); console.log(error); setSuccessMsg("")},
            }
          );

    }
    const handleCategoryCreated = (newCategory: GetCategory) => {setSelectedCategoryId(newCategory.id.toString()); setShowCategoryForm(false);}
    return (
    <>
    <div className="absolute top-0 left-0 bottom-[0%] right-0  opacity-10 z-10" onClick={() => {closeForm();}}></div>
    <form action="" onSubmit={handleSubmit} className="animateForm absolute inset-x-0 p-8 rounded-[10px] top-[20%] block w-[600px] h-[460px]  m-auto bg-white  z-10">
      <div className="mb-8">
          <div className="flex justify-between">
              <h1 className="text-xl font-semibold">Lägg till Affär</h1>
              <button onClick={(e) => { e.preventDefault(); closeForm();}}>X</button>
          </div>
          <h2 className="">Berätta vad di har köpt</h2>
        </div>
        <div className="flex flex-col gap-8"> 
          <div className="flex flex-col gap-1">
              <label className="text-sm">Affär </label>
              <input type="text" id="Vendor" name="Vendor" className="hover:appearance-none appearance-none transition duration-150 focus:outline-none focus:border-[green] rounded border bg-transparent p-1"/>
            </div>
          <div className="flex flex-col gap-1">
              <label className="text-sm">Utgiftstak  </label>
              <input className="hover:appearance-none appearance-none transition duration-150 focus:outline-none focus:border-[green] rounded border bg-transparent p-1" type="number" id="SpendingLimit" name="SpendingLimit" />
            </div>

            <div className="flex justify-between gap-2"> 

              <select name="Category" id="Category" className="focus:border-[green] rounded flex-1 p-1 border focus:outline-none" value={selectedCategoryId} onChange={(e) => setSelectedCategoryId(e.target.value)}>
                <option value="category">Välj Kategori</option>
                {categorys?.map((category) => (<option key={category.id} value={category.id}>{category.Category}</option>))}
              </select>
              <button className="rounded border-green-300 flex-1 border p-1" onClick={(e) => {e.preventDefault();setShowCategoryForm(true);}}>Lägg Till Kategori</button>
            </div>

            <div className="flex gap-2">
              <button className="font-medium cursor-pointer rounded p-1 flex-1 border" onClick={(e) => { e.preventDefault(); closeForm();}}>Avbryt</button>
              <input type="submit" value="Lägg Till" className="font-medium text-white cursor-pointer rounded p-1 flex-1 transition-colors duration-150 hover:bg-green-700 bg-green-600" />
              </div>


        </div>
        {successMsg && (<p className="text-green-600">{successMsg}</p>)}
        {errorMsg && (<p className="text-red-600">{errorMsg}</p>)}
      </form>
      {showCategoryForm && (<CategoryForm closeForm={() => {setShowCategoryForm(false);}} onCategoryCreated={handleCategoryCreated}/>)}
    </>
  );
};

export default VendorForm;

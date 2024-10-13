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
      <form action="" onSubmit={handleSubmit} className="TransactionPageForm">
      <div className="InputContainer">
          <label>Vendor </label>
          <input type="text" id="Vendor" name="Vendor" />
        </div>
      <div className="InputContainer">
          <label>Spending Limit </label>
          <input type="number" id="SpendingLimit" name="SpendingLimit" />
        </div>

        <select name="Category" id="Category" value={selectedCategoryId} onChange={(e) => setSelectedCategoryId(e.target.value)}>
          <option value="">Select Category</option>
          {categorys?.map((category) => (<option key={category.id} value={category.id}>{category.Category}</option>))}
        </select>
        <input type="submit" value="Submit" className="submit" />
        {successMsg && (<p>{successMsg}</p>)}
        {errorMsg && (<p>{errorMsg}</p>)}
      </form>
      <button onClick={() => {setShowCategoryForm(true);}}>Add new Category</button>
      {showCategoryForm && (<CategoryForm closeForm={() => {setShowCategoryForm(false);}} onCategoryCreated={handleCategoryCreated}/>)}
    </>
  );
};

export default VendorForm;

import React, { useState } from "react";
import useAddCategory from "./useAddCategory";
import { GetCategory } from "@/category/Category";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  closeForm: () => void;
  onCategoryCreated: (category: any) => void;
}

const CategoryForm = ({ closeForm, onCategoryCreated }: Props) => {
  const queryClient = useQueryClient();

  const addCategory = useAddCategory();
  const [showCategoryForm, setShowCategoryForm] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let Category = formData.get("Category") as string;
    let SpendingLimit = formData.get("SpendingLimit") as string;
    console.log("Sending Form: ", formData, Category, Category);
    addCategory.mutate(
      { Category: Category, SpendingLimit: parseInt(SpendingLimit) },
      {
        onSuccess: (createdCategory) => {
          queryClient.invalidateQueries({ queryKey: ["categories"] });
          setSuccessMsg("Vedbir Skapad");
          console.log("mission success", createdCategory);
          setErrorMsg("");
          closeForm();
          onCategoryCreated(createdCategory);
        },
        onError: (error) => {
          setErrorMsg("Ett fel uppstod");
          console.log(error);
          setSuccessMsg("");
        },
      }
    );
  };
  const handleCategoryCreated = () => {};
  return (
    <>
      <div className="absolute top-0 left-0 bottom-[0%] right-0  opacity-10 z-10" onClick={() => {closeForm();}}></div>
      <form action="" onSubmit={handleSubmit} className="animateForm absolute inset-x-0 p-8 rounded-[10px] top-[20%] block w-[600px] h-[460px]  m-auto bg-white  z-10">
        <div className="mb-8">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Lägg till Kategori</h1>
            <button
              onClick={(e) => {
                e.preventDefault();
                closeForm();
              }}>
              X
            </button>
          </div>
          <h2 className="">Skapa en kategori till de produkter du köpt, eller planerar på att köpa</h2>
        </div>


        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <label className="text-sm">Kategori </label>
            <input type="text" id="Category" name="Category" className="hover:appearance-none appearance-none transition duration-150 focus:outline-none focus:border-[green] rounded border bg-transparent p-1" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm">Utgiftstak </label>
            <input className="hover:appearance-none appearance-none transition duration-150 focus:outline-none focus:border-[green] rounded border bg-transparent p-1" type="number" id="SpendingLimit" name="SpendingLimit" />
          </div>

      
          <div className="flex gap-2">
            <button
              className="font-medium cursor-pointer rounded p-1 flex-1 border"
              onClick={(e) => {
                e.preventDefault();
                closeForm();
              }}>
              Avbryt
            </button>
            <input type="submit" value="Lägg Till" className="font-medium text-white cursor-pointer rounded p-1 flex-1 transition-colors duration-150 hover:bg-green-700 bg-green-600" />
          </div>
        </div>

        {successMsg && <p>{successMsg}</p>}
        {errorMsg && <p>{errorMsg}</p>}
      </form>
    </>
  );
};

export default CategoryForm;

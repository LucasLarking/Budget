import React, { useState } from "react";
import useAddCategory from "./useAddCategory";
import { GetCategory } from "@/category/Category";
import { useQueryClient } from "@tanstack/react-query";


interface Props {
    closeForm: () => void;
    onCategoryCreated: (category: any) => void;
  }

const CategoryForm = ({closeForm, onCategoryCreated}: Props) => {
    const queryClient = useQueryClient();

    const addCategory = useAddCategory();
    const [showCategoryForm, setShowCategoryForm] = useState<boolean>(false);
    const [successMsg, setSuccessMsg] = useState<string>("")
    const [errorMsg, setErrorMsg] = useState<string>("")
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let Category = formData.get("Category") as string;
        let SpendingLimit = formData.get("SpendingLimit") as string;
        console.log("Sending Form: ", formData, Category, Category);
        addCategory.mutate(
            { Category: Category,SpendingLimit:  parseInt(SpendingLimit)},
            {
              onSuccess: (createdCategory) => {queryClient.invalidateQueries({queryKey: ['categories']}); setSuccessMsg("Vedbir Skapad");console.log("mission success", createdCategory); setErrorMsg(""); closeForm(); onCategoryCreated(createdCategory);},
              onError: (error) => {setErrorMsg("Ett fel uppstod"); console.log(error); setSuccessMsg("")},
            }
          );

    }
    const handleCategoryCreated = () => {}
    return (
    <>
      <form action="" onSubmit={handleSubmit} className="TransactionPageForm">
      <div className="InputContainer">
          <label>Category </label>
          <input type="text" id="Category" name="Category" />
        </div>
      <div className="InputContainer">
          <label>Spending Limit </label>
          <input type="number" id="SpendingLimit" name="SpendingLimit" />
        </div>

        <input type="submit" value="Submit" className="submit" />
        {successMsg && (<p>{successMsg}</p>)}
        {errorMsg && (<p>{errorMsg}</p>)}
      </form>
    </>
  );
};

export default CategoryForm;

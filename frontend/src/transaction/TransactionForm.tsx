import useGetVendors from "@/vendor/useGetVendors";
import { GetVendor } from "@/vendor/vendor";
// import VendorForm from "@/vendor/VendorForm";
import React, { useState } from "react";
import useAddTransaction from "./useAddTransaction";
import VendorForm from "@/vendor/VendorForm";

const TransactionForm = () => {
    const addTransaction = useAddTransaction();
    const { data: vendors, error: vendorError, isLoading: vendorLoading } = useGetVendors();
    const [showVendorForm, setShowVendorForm] = useState<boolean>(false);
    const [selectedVendorId, setSelectedVendorId] = useState<string>();
    const [successMsg, setSuccessMsg] = useState<string>("")
    const [errorMsg, setErrorMsg] = useState<string>("")
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let TransactionAmount = formData.get("TransactionAmount") as string;
        const Vendor = formData.get("Vendor") as string;
        console.log("Sending Form: ", formData, TransactionAmount, Vendor);
        addTransaction.mutate(
            { TransactionAmount: parseInt(TransactionAmount), Vendor: parseInt(Vendor) },
            {
              onSuccess: (createdTransaction) => {setSuccessMsg("Utgift Skapad");console.log("mission success"); setErrorMsg("")},
              onError: (error) => {setErrorMsg("Ett fel uppstod"); console.log(error); setSuccessMsg("")},
            }
          );

    }
    const handleVendorCreated = (newVendor: GetVendor) => {setSelectedVendorId(newVendor.id.toString()); setShowVendorForm(false);}
    return (
    <>
      <form action="" onSubmit={handleSubmit} className="TransactionPageForm">
      <div className="InputContainer">
          <label>TransactionAmount </label>
          <input type="number" id="TransactionAmount" name="TransactionAmount" />
        </div>

        <select name="Vendor" id="Vendor" value={selectedVendorId} onChange={(e) => setSelectedVendorId(e.target.value)}>
          <option value="">Select Vendor</option>
          {vendors?.map((vendor) => (<option key={vendor.id} value={vendor.id}>{vendor.Vendor}</option>))}
        </select>
        <input type="submit" value="Submit" className="submit" />
        {successMsg && (<p>{successMsg}</p>)}
        {errorMsg && (<p>{errorMsg}</p>)}
      </form>
      <button onClick={() => {setShowVendorForm(true);}}>Add new Vendor</button>
      {showVendorForm && (<VendorForm closeForm={() => {setShowVendorForm(false);}} onVendorCreated={handleVendorCreated}/>)}
    </>
  );
};

export default TransactionForm;

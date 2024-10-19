import useGetVendors from "@/vendor/useGetVendors";
import { GetVendor } from "@/vendor/vendor";
// import VendorForm from "@/vendor/VendorForm";
import React, { useState } from "react";
import useAddTransaction from "./useAddTransaction";
import VendorForm from "@/vendor/VendorForm";

interface Props {
  closeForm: () => void;
  // onVendorCreated: (vendor: any) => void;
}

const TransactionForm = ({closeForm}:Props) => {
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
   <div className="absolute top-0 left-0 bottom-[0%] right-0 bg-black opacity-15 -z-2"  onClick={(e) => {e.preventDefault(); closeForm()}}>
   </div>
    
      <form action="" onSubmit={handleSubmit} className="animateForm absolute inset-x-0 p-8 rounded-[10px] top-[20%] block w-[600px] h-[360px]  m-auto bg-white  z-10">
          <div className="mb-8">
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Lägg till Transaktion</h1>
                <button onClick={(e) => {e.preventDefault(); closeForm()}}>X</button>
            </div>
            <h2 className="">Berätta vad di har köpt</h2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="InputContainer flex flex-col gap-1">
                <label className="text-sm">Kostnad (Kr) </label>
                <input className="hover:appearance-none appearance-none transition duration-150 focus:outline-none focus:border-[green] rounded border bg-transparent p-1" type="number" id="TransactionAmount" name="TransactionAmount" />
              </div>

             <div className="flex justify-between gap-2">
                <select className="focus:border-[green] rounded flex-1 p-1 border focus:outline-none"  name="Vendor" id="Vendor" value={selectedVendorId} onChange={(e) => setSelectedVendorId(e.target.value)}>
                  <option value="">Välj Affär</option>
                  {vendors?.map((vendor) => (<option className=""  key={vendor.id} value={vendor.id}>{vendor.Vendor}</option>))}
                </select>
                <button className="rounded border-green-300 flex-1 border p-1" onClick={(e) => { e.preventDefault();setShowVendorForm(true);}}>Lägg Till Affär +</button>
             </div>
              <div className="flex gap-2">
              <button className="font-medium cursor-pointer rounded p-1 flex-1 border"  onClick={(e) => {e.preventDefault(); closeForm()}}>Avbryt</button>
              <input type="submit" value="Lägg Till" className="font-medium text-white cursor-pointer rounded p-1 flex-1 transition-colors duration-150 hover:bg-green-700 bg-green-600" />
              </div>
          </div>
            {successMsg && (<p className="text-green-600">{successMsg}</p>)}
            {errorMsg && (<p className="text-red-600">{errorMsg}</p>)}
          </form>
          {showVendorForm && (<VendorForm closeForm={() => {setShowVendorForm(false);}} onVendorCreated={handleVendorCreated}/>)}
    
      
    </>
  );
};

export default TransactionForm;

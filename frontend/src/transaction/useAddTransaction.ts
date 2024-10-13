import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CAHCE_KEY_TRANSACTIONS,
  GetTransaction,
  Transaction,
} from "./transaction";
import axios from "axios";

const useAddTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation<GetTransaction, Error, Transaction>({
    mutationFn: (transaction: Transaction) => {
      return axios
        .post("http://127.0.0.1:8000/api/transactions/", transaction, {
          headers: {
            Authorization: "JWT " + localStorage.getItem("access"),
          },
        })
        .then((res) => res.data); // Return the data here
    },
    onSuccess: (data) => {
        console.log("says syccs")
    //   queryClient.invalidateQueries([CAHCE_KEY_TRANSACTIONS]); // Invalidate the cache for transactions
    },
    onError: (error) => {
      console.log("Error:", error); // Log the error
    //   return error;
    },
  });
};

export default useAddTransaction;

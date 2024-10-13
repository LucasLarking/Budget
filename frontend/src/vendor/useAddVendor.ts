import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KET_VENDORS, GetVendor, Vendor } from "./vendor";
import axios from "axios";

const useAddVendor = () => {
  const queryClient = useQueryClient();
  return useMutation<GetVendor, Error, Vendor>({
    mutationFn: (vendor: Vendor) => {
      return axios
        .post("http://127.0.0.1:8000/api/vendors/", vendor, {
          headers: { Authorization: "JWT " + localStorage.getItem("access") },
        })
        .then((res) => res.data);
    },
    onSuccess: (data) => {queryClient.invalidateQueries({queryKey: CACHE_KET_VENDORS});},
    onError: (error) => {},
  });
};

export default useAddVendor;

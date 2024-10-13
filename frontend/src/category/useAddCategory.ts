import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "axios";
import { CACHE_KEY_CATERGORIES, Category, GetCategory } from "./Category";

const useAddCategory = () => {

  const queryClient = useQueryClient();
  return useMutation<GetCategory, Error, Category>({

    mutationFn: (category: Category) => {
      return axios
        .post("http://127.0.0.1:8000/api/categories/", category, {
          headers: {
            Authorization: "JWT " + localStorage.getItem("access"),
          },
        })
        .then((res) => res.data);
    },
    onSuccess: (data) => {
      console.log("says syccs");
    },
    onError: (error) => {
      console.log("Error:", error);
      queryClient.invalidateQueries({queryKey: ["categories"]});
    },
  });
};

export default useAddCategory;

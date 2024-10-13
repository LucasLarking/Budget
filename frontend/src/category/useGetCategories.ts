import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { CACHE_KEY_CATERGORIES, GetCategory } from "./Category"

const useGetCategories = () => {
    const fetchCategories = () => axios.get<GetCategory[]>("http://127.0.0.1:8000/api/categories/", {
        headers: {Authorization: "JWT " + localStorage.getItem("access")},
    }).then(res => res.data)
    return useQuery<GetCategory[], Error>({
        queryKey: CACHE_KEY_CATERGORIES,
        queryFn: fetchCategories
    })
}
export default useGetCategories;
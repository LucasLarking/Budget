import axios from "axios"
import { CACHE_KET_VENDORS, GetVendor } from "./vendor"
import { useQuery } from "@tanstack/react-query"

const useGetVendors = () => {
    const fetchVendors = () => axios.get<GetVendor[]>("http://127.0.0.1:8000/api/vendors/", {
        headers: {Authorization: "JWT " + localStorage.getItem("access")},
    }).then(res => res.data)
    return useQuery<GetVendor[], Error>({
        queryKey: CACHE_KET_VENDORS,
        queryFn: fetchVendors
    })
}
export default useGetVendors;

export interface Vendor {
    Vendor: string;
    Category: number;
    SpendingLimit: number;
} 
export interface GetVendor {
    id: number;
    Vendor: string;
    Category: number;
    SpendingLimit: number;
} 

export const CACHE_KET_VENDORS = ["vendors"]
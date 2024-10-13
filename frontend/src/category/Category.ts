export interface Category {
    Category: string;
    SpendingLimit: number;
}

export interface GetCategory {
    id: number;
    Category: String;
    SpendingLimit: number;
}

export const CACHE_KEY_CATERGORIES = ["categories"]
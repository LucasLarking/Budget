export interface Transaction {
    TransactionAmount: number;
    Vendor: number;
}

export interface GetTransaction {
    id: number;
    TransactionAmount: number;
    Vendor: number;
    CreatedAt: string
}

export const CAHCE_KEY_TRANSACTIONS = 'transactions';
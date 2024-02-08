import { transactionsApi } from './transactionsApi';
import { Transactions } from './types';

async function get(): Promise<Transactions[]> {
    const transactionsList = await transactionsApi.get();
    return transactionsList;
}

export const transactionsService = {
    get
};
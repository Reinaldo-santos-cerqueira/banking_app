import { TransactionMock } from './transactionMock';
import { Transactions } from './types';

async function get(): Promise<Transactions[]> {
    await new Promise(resolve => setTimeout(() => {
        resolve('');
    }, 1000));
    return TransactionMock;
}

export const transactionsApi = {
    get
};	
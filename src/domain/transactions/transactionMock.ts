import { Transactions } from './types';

export const TransactionMock: Transactions[] = [
    {
        name: 'Apple store',
        purpose: 'Entertainment',
        value: -5.99,
        icon: 'apple',
        type: 'S'
    },
    {
        name: 'Shopping center',
        purpose: 'Shopping',
        value: -59.99,
        icon: 'cartDown',
        type: 'S'
    },
    {
        name: 'Freelancer',
        purpose: 'work',
        value: 500.99,
        icon: 'cartUp',
        type: 'R'
    },
    {
        name: 'Spotify',
        purpose: 'Music',
        value: -12.99,
        icon: 'spotify',
        type: 'S'
    },
    {
        name: 'Money Transfer',
        purpose: 'Transaction',
        value: -59.99,
        icon: 'moneyDown',
        type: 'S'
    },
    {
        name: 'Money received',
        purpose: 'Transaction',
        value: 500.99,
        icon: 'moneyUp',
        type: 'R'
    },
    {
        name: 'Netflix',
        purpose: 'Entertainment',
        value: 29.99,
        icon: 'netflix',
        type: 'R'
    },
];
import { IconName } from '@components';

export interface Transactions {
    value: number;
    name: string;
    type: 'R' | 'S',
    purpose: string;
    icon: IconName;
}
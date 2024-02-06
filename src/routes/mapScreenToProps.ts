import { IconProps } from '@components';
import { AppTabBottomTabParamsList } from './appTab.routes';
export const mapScreenToProps: Record<
    keyof AppTabBottomTabParamsList,
    {
        label: string;
        icon: IconProps['name'];
    }
> = {
    HomeScreen: {
        label: 'Home',
        icon: 'home'
    },
    MyCardScreen: {
        label: 'My Cards',
        icon: 'myCard'
    },
    StatisticsScreen: {
        label: 'Statistics',
        icon: 'statistic'
    },
    SettingsScreen: {
        label: 'Setings',
        icon: 'settings'
    }
};
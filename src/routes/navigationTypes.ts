import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParams } from './appStack.routes';
import { AuthStackParams } from './authStack.routes';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace ReactNavigation {
        interface RootParamList extends AuthStackParams, AppStackParams { }
    }
}
export type AppScreenProps<RouteName extends keyof AppStackParams> = NativeStackScreenProps<AppStackParams, RouteName>
export type AuthScreenProps<RouteName extends keyof AuthStackParams> = NativeStackScreenProps<AuthStackParams, RouteName> 
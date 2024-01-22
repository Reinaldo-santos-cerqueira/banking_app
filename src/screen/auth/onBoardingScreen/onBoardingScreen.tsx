import { FlatOnboarding, Screen } from '@components';
import { AuthScreenProps } from '@routes';
import React from 'react';

export function OnBoardingScreen({ navigation }: AuthScreenProps<'OnboardingScreen'>): React.ReactNode {
    return (

        <Screen>
            <FlatOnboarding goLogin={() => navigation.navigate('LoginScreen')} />
        </Screen>
    );
}
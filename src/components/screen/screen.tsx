import React, { useEffect } from 'react';
import { Box, Icon } from '@components';
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from 'react-native';
import { ScrollViewContainer, ViewContainer } from './Container';
import { useAppSafeArea, useAppTheme } from '@hooks';
import { useNavigation } from '@react-navigation/native';

interface ScreenProps {
    canGoBack?: boolean;
    children: React.ReactNode;
    scrollable?: boolean;
}
export function Screen({ children, canGoBack, scrollable }: ScreenProps) {
    const { goBack } = useNavigation();

    const { top, bottom } = useAppSafeArea();
    const { colors } = useAppTheme();
    const Container = scrollable ? ScrollViewContainer : ViewContainer;
    useEffect(() => {
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor('transparent');
    }, []);
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <Container backgroundColor={colors.background} >
                    <Box
                        paddingHorizontal='s20'
                        flex={1}
                        paddingBottom='s24'
                        style={{ paddingTop: top, paddingBottom: bottom }}
                    >
                        {
                            canGoBack &&
                            <Box mb={'s24'} width={42} height={42} borderRadius={'s42'} backgroundColor='backgroundContrast' alignItems='center' justifyContent='center'>
                                <Icon name='backArrow' onPress={goBack} />
                            </Box>
                        }
                        {children}
                    </Box>
                </Container>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
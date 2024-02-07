import { createTheme } from '@shopify/restyle';

const palette = {
    darkBg: '#161622',
    darkBgContrast: '#1E1E2D',
    lightBgContrast: '#F4F4F4',
    gray3: '#8B8B94',
    bluePrimary: '#0066FF',
    bluePrimaryDisabled: '#0066FF55',
    gray1: '#7E848D',
    gray2: '#232533',
    gray4: '#A2A2A7',
    blueMedium: '#27273A',
    blueLight: '#25253D',
    greenPrimary: '#1FAA47',
    redPrimary: '#EB0A24',
    redLight: '#E16364',
    grayWhite: '#FFFFFF'
};

export const theme = createTheme({
    colors: {
        ...palette,
        background: palette.darkBg,
        backgroundContrast: palette.darkBgContrast,
        buttonPrimary: palette.bluePrimary,
        buttonPrimaryDisabled: palette.bluePrimaryDisabled,
        textPrimary: palette.grayWhite,
        textSecondary: palette.gray1,
        inputColor: palette.gray4,
        secondaryBtn: palette.darkBgContrast,
        bgCardArea: palette.blueLight,
        grayWhite: palette.grayWhite,
        gray1: palette.gray1,
        error: palette.redLight,
        tabColor: palette.blueMedium,
        tabColorItemActive: palette.bluePrimary,
        tabColorItemInative: palette.gray3
    },
    spacing: {
        s4: 4,
        s8: 8,
        s10: 10,
        s12: 12,
        s14: 14,
        s16: 16,
        s20: 20,
        s24: 24,
        s32: 32,
        s40: 40,
        s48: 48,
        s56: 56,
    },
    borderRadii: {
        s5: 5,
        s8: 8,
        s12: 12,
        s16: 16,
        s21: 21,
        s25: 25,
        s42: 42
    },
    textVariants: {
        defaults: {
            color: 'grayWhite',
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 400,
        },
        titlePage: {
            color: 'grayWhite',
            fontFamily: 'Poppins-Medium',
            fontSize: 34,
            fontStyle: 'normal',
            fontWeight: 600,
        },
        titleSlider: {
            color: 'grayWhite',
            fontFamily: 'Poppins-Bold',
            textAlign: 'center',
            fontSize: 26,
            fontStyle: 'normal',
            fontWeight: 600,
        },
        subTitleSlider: {
            color: 'gray1',
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 400,
        },
        btnText: {
            color: 'grayWhite',
            textAlign: 'center',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 600,
        },
        labelText: {
            color: 'inputColor',
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 400,
        },
        erroInput: {
            color: 'error',
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 400,
        },
        tabLabel: {
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 700,
        },
        nameProfile: {
            fontFamily: 'Poppins-Medium',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 500,
        },
        titleProfile: {
            fontFamily: 'Poppins-Regular',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400,
        }
    }
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
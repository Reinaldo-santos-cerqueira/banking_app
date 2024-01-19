import { createTheme } from '@shopify/restyle';

const palette = {
    darkBg: '#161622',
    darkBgContrast: '#1E1E2D',
    lightBgContrast: '#F4F4F4',
    gray3: '#8B8B94',
    bluePrimary: '#0066FF',
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
        buttonPrimary: palette.bluePrimary,
        textPrimary: palette.grayWhite,
        textSecondary: palette.gray1,
        inputColor: palette.gray4,
        secondaryBtn: palette.darkBgContrast,
        bgCardArea: palette.blueLight,
        grayWhite: palette.grayWhite,
        gray1: palette.gray1,

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
        s8: 8,
        s12: 12,
        s16: 16,
    },
    textVariants: {
        defaults: {
            color: 'grayWhite',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 14,
        },
        logoText: {
            color: 'grayWhite',
            fontFamily: 'Poppins',
            fontSize: 35,
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 35,
            textTransform: 'uppercase',
        },
        titleSlider: {
            color: 'grayWhite',
            fontFamily: 'Poppins',
            textAlign: 'center',
            fontSize: 26,
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal'
        },
        subTitleSlider: {
            color: 'gray1',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 24
        },
        btnText: {
            color: 'grayWhite',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 24
        },
        labelText: {
            color: 'inputColor',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 14,
        }
    }
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
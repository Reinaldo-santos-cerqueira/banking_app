import {
    createBox,
    createRestyleComponent,
    backgroundColor,
    BackgroundColorProps,
    border,
    BorderProps,
    layout,
    LayoutProps,
    spacing,
    SpacingProps,
    spacingShorthand,
    SpacingShorthandProps,
} from '@shopify/restyle';
import { Theme } from '@theme';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
    TouchableOpacityProps &
    SpacingProps<Theme> &
    SpacingShorthandProps<Theme> &
    LayoutProps<Theme> &
    BorderProps<Theme>

const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>(
    [
        backgroundColor,
        spacing,
        layout,
        border,
        spacingShorthand
    ],
    TouchableOpacity
);


export {
    Box,
    TouchableOpacityBox
};
import React from 'react';
import { TextInput, props } from '../textInput/textInput';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

export function TextInputWithController<FormType extends FieldValues>({
    control,
    name,
    rules,
    ...textInputProps
}: props & UseControllerProps<FormType>
) {
    return (
        <Controller
            name={name}
            rules={rules}
            control={control}
            render={({ field, fieldState }) => {
                return (
                    <TextInput
                        erroMessage={fieldState.error?.message}
                        value={field.value}
                        onChangeText={field.onChange}
                        {...textInputProps}
                    />
                );
            }}
        />
    );
}

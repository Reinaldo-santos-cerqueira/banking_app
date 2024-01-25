import { stringUtils } from '@utils';
import { z } from 'zod';
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

export const signupSchema = z.object({
    email: z.string().email('E-mail invalido'),
    password: z.string().regex(passwordRegex, 'Deve possuir no mínimo 10 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.'),
    fullName: z.string().min(5, 'Muito pequeno mínimo 5').max(50, 'Muito grande no máximo 50').transform(stringUtils.capitalizeFirstLetter),
    phone: z.string().min(10, 'Insira um número correto').max(11, 'Insira um número correto')
});
export type SignUpSchema = z.infer<typeof signupSchema>
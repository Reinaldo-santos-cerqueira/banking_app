import { z } from 'zod';
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

export const loginSchema = z.object({
    email: z.string().email('E-mail invalido'),
    password: z.string().regex(passwordRegex, 'Deve possuir no mínimo 10 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.')
});
export type LoginSchema = z.infer<typeof loginSchema>
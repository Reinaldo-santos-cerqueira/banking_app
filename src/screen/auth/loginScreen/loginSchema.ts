import { z } from 'zod';
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

export const loginSchema = z.object({
    email: z.string().email('E-mail is invalid'),
    password: z.string().regex(passwordRegex, 'It must have at least 10 characters, including secret letters, lowercase letters, numbers and special characters.')
});
export type LoginSchema = z.infer<typeof loginSchema>
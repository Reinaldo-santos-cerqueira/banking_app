import { stringUtils } from '@utils';
import { z } from 'zod';
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

export const signupSchema = z.object({
    email: z.string().email('E-mail is invalid'),
    password: z.string().regex(passwordRegex, 'It must have at least 10 characters, including secret letters, lowercase letters, numbers and special characters.'),
    fullName: z.string().min(5, 'At least 5').max(50, 'Maximum 50').transform(stringUtils.capitalizeFirstLetter),
    phone: z.string().min(12, 'Enter a correct number').max(13, 'Enter a correct number')
});
export type SignUpSchema = z.infer<typeof signupSchema>
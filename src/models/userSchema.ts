import { z, ZodType } from 'zod';

export type userValue ={
    preventDefault(): unknown;
    Name: string;
    email: string;
    password: string;
    confirm_password: string
};

export const userSchema: ZodType<userValue> = z.object({
    Name: z.string().min(1,{message:"Name is required"}),
    email: z.string().email(),
    password: z.string().min(8).max(255),
    confirm_password: z.string().min(8).max(255)
}).refine(data => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password']
});

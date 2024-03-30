import { z, ZodType } from 'zod';

export type loginValue ={
    email: string;
    password: string;
    
};


export const loginSchema: ZodType<loginValue> = z.object({
    email: z.string().email({message:"email is required"}),
    password: z.string().min(8).max(255)

})
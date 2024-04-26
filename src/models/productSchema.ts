import { z, ZodType } from 'zod';

export type FormValue ={
    Name: string;
    Descript: string;
    category: string;
    Brand: string;
    Price: number;
    Quontity: number;
    Images: FileList;
};

export const productSchema: ZodType<FormValue> = z.object({
    Name: z.string().min(1, { message: "Name is required." }).trim(),
    Descript: z.string().min(1, { message: "Description is required." }).trim(),
    category: z.string().min(1, { message: "Category is required." }).trim(),
    Brand: z.string().min(1, { message: "Brand is required." }).trim(),
    Price: z.number().min(1, { message: "Price is required." }).int({ message: "Value must be an integer." }),
    Quontity: z.number().int({ message: "Value must be an integer." }).positive({ message: "Value must be greater than zero." }).min(1, { message: "Category is required." }),
    Images: z.any().refine(value => value !== null && value !== undefined, {
        message: "Images are required."
    }),
});

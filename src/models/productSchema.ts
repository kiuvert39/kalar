import { ZodType, z,} from "zod";



export type FormValue ={
    Name: string,
    Descript: string,
    Category: string,
    Brand: string,
    Price: number,
    Quontity: number,
    Images: string[]
}
 
export const productSchema: ZodType<FormValue> = z.object({
    Name : z.string().min(1,{message: "Name is required."}).trim(),
    Descript: z.string().min(1,{message: "this field is  required"}).trim(),
    Category: z.string().min(1,{message: "this field is require"}).trim(),
    Brand: z.string().min(1,{message: "this field is require"}).trim(),
    Price: z.number().min(4,{message: "this field is required"}).int({message: "value most be an integer"}),
    Quontity: z.number().int({message:"value most be an interger"}).positive({message:"value most be greater than zero"}),
    Images:  z.array(z.string()).max(4,{message: "maximum of 4 images required"}).min(1,{message: "this field is required"})
})


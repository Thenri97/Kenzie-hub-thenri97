import {z} from "zod"

export const loginFormSchema = z.object({
    email: z.string().min(1, "O email é obrigatório"),
    password: z.string().min(8, "O password é obrigatório (min: 8 caracteres)"),
}); 
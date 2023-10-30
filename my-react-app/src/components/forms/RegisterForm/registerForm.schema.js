import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().email("Forneça um email válido."),
    password: z.string()
        .min(8, "São necessários pelos menos oito caracteres.")
        .regex(/[a-z]+/, "É necessário contter pelo menos uma letra minúscula")
        .regex(/[A-Z]+/, "É necessário contter pelo menos uma letra maiúscula")
        .regex(/[0-9]+/, "É necessário contter pelo menos um número")
        .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/, "É necessário contter pelo menos um caractere especial"),
    passwordVerify: z.string()
        .min(8, "São necessários pelos menos oito caracteres."),
    bio: z.string().min(1, "A bio é obrigatório"),
    contact: z.string().min(11, "O Contato é obrigatório (DD + número)"),
    course_module: z.string()
}).refine(({ password, passwordVerify }) => {
    return password === passwordVerify;
}, {
    message: "As senhas não correspondem.",
    path: ["passwordVerify"]
});





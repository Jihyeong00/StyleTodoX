import {z} from "zod";

const formSchema = z
    .object({
        email: z.string().email({ message: '올바르지 않은 이메일 형식입니다.' }),
        password: z
            .string()
            .min(4, {
                message: '패스워드는 최소 4글자이상 작성하셔야 합니다.',
            })
            .max(12, {
                message: '패스워드는 최대 12글자이상 작성하셔야 합니다.',
            }),
        confirmPassword: z
            .string()
            .min(4, {
                message: '패스워드는 최소 4글자이상 작성하셔야 합니다.',
            })
            .max(12, {
                message: '패스워드는 최대 12글자이상 작성하셔야 합니다.',
            }),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'The passwords did not match',
            });
        }
    });

export default formSchema;

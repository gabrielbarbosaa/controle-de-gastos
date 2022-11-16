import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string()
        .required('Nome é obrigatório')
        .matches(/[a-zA-Z]/, 'Digite um nome válido'),
    email: yup.string()
        .email('Emial inválido')
        .required('Email é obrigatório'),
    password: yup.string()
        .required('Senha é obrigatório')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
            'Mínimo oito e máximo 16 caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial:'    
        ),
    age: yup.number()
        .min(18, 'Idade minima de 18 anos')
        .max(100, 'Idade máximo é 100 anos')
        .integer('Idade deve ser um número inteiro.')
        .required('Idade deve ser um número válido')
        .typeError('Idade deve ser um número válido')
})
import * as yup from 'yup'

// LOGIN VALIDATION
export const loginInitialValue = {
    username: '',
    password: ''
}

export const loginValidation = yup.object().shape({
    username: yup.string().required('Username is required!'),
    password: yup
    .string()
    .min(
        8,
        ({min}) =>
            `${'Password must be'} ${min} ${'characters'}`
    )
    .required('Password is required!')
})   

// SIGN UP VALIDATION
export const signUpInitialValue = {
    number: ''
}

export const signUpValidation = yup.object().shape({
    number: yup
    .string()
    .min(
        11,
        ({min}) =>
            `${'Mobile Number must be'} ${min} ${'characters'}`
    )
    .required('Mobile Number is required!')
    .matches(/^[0]\d{11}$/, 'Complete your phone number!')
})      
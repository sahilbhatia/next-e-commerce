import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().email().lowercase().required('email is required'),
  password: yup.string().min(6).required('password is required')
})

export const productSchema = yup.object().shape({
  name: yup.string().required(),
  thumbnailUrl: yup.string().required(),
  price: yup.number().required()
})

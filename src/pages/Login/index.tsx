
import { useForm } from 'react-hook-form'

import {
  Button,
  Container,
  ErrorText,
  InnerContainer,
  Input,
  InputContainer,
  ButtonWrapper,
  Label,
} from '../../components/commons'

import { API } from '../../core/api/services/client'
import { useNavigate } from 'react-router-dom'

import './index.module.css'

export function Login() {

  interface FormInputs {
    email: string
    password: string
    strategy: string
  }

  const navigate = useNavigate()

  const { register, handleSubmit, setError, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      email: '',
      password: '',
      strategy: 'local' //TODO: REVISAR ESTO
    }
  })

  const handleLogin = async (data: FormInputs) => {
    try {
      const response = await API.service('authentication').create({
        ...data,
        strategy: 'local'
      })
      localStorage.setItem('accessToken', response.accessToken)
      navigate('/home')
    } catch (error) {
      setError('email', {
        type: 'manual',
        message: 'Invalid email or password'
      })
    }
  }


  return (
    <Container>
      <InnerContainer>
        <h1>Log In</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
        >
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              {...register('email', { required: true })}
            />
            {errors.email && <ErrorText>Email is required</ErrorText>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              {...register('password', { required: true })}
            />
            {errors.password && <ErrorText>Password is required</ErrorText>}
          </InputContainer>
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          <ButtonWrapper>
            <Button type="submit">Log In</Button>
          </ButtonWrapper>
        </form>
      </InnerContainer>
    </Container>
  )
}
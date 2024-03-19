import { useState } from 'react'

import { TaskForm } from '../../components/TaskForm'

import { Container, InnerContainer } from '../../components/commons'

import './index.module.css'
import { Task } from '../../core/interfaces'
import { useForm } from 'react-hook-form'
import { API } from '../../core/api/services/client'

export function Home() {

  const [newTask, setNewTask] = useState<Task[]>([])

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<Task>()

  const onSubmit = async (data: Task) => {
    try {
      const token = localStorage.getItem('accessToken')
      const response = await API.service('todo').create({
        ...data, //TODO: Recuperar el token o ponerlo en un context para accederlo en toda la app y buscar la manera de mandar el auth header en la peticion
      })
      setNewTask([...newTask, response])
    } catch (err) {
      setError('name', {
        type: 'manual',
        message: 'An error occurred Please Check logs'
      })
    }
  }

  return (
    <Container>
      <InnerContainer>
        <h1>Get Things Done!</h1>
        <TaskForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />
      </InnerContainer>
    </Container>
  )
}
import { useState } from 'react'

import { useForm } from 'react-hook-form'

import { API } from '../../core/api/services/client'
import { Task } from '../../core/interfaces'
import { useAuth } from '../../core/context/hooks'

import { TaskList } from '../../components/TaskList'
import { TaskForm } from '../../components/TaskForm'
import { Container, InnerContainer } from '../../components/commons'

export function Home() {

  const [newTask, setNewTask] = useState<Task[]>([])
  const { token } = useAuth()

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors }
  } = useForm<Task>({
    defaultValues: {
      title: '',
      description: '',
      is_done: false
    }
  })

  const onSubmit = async (data: Task) => {
    try {
      const response = await API.service('todo').create(
        {
          ...data,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      setNewTask([...newTask, response])
      reset()
    } catch (err) {
      setError('title', {
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
         /**
          * It is not necessary to pass the handleSubmit function to the TaskForm component
          * The handleSubmit function is used to trigger the form validation and submit the form data
          * and the correct form is wrap the "onSubmit" function with the handleSubmit function
          * for example: handleSubmit(onSubmit)
          */
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
        />
        <TaskList
          /**
           * TaskList component needs to receive the newTask state to update the list of tasks
           */
        />
      </InnerContainer>
    </Container>
  )
}
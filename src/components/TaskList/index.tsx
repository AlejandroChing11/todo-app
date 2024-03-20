import { useEffect, useState } from 'react'

import { Task } from '../../core/interfaces'

import { API } from '../../core/api/services/client'
import { useAuth } from '../../core/context/hooks'

import { TaskListContainer } from './../commons'

import { Card } from '../Card'

export function TaskList() {

  /**
   * This state is not necessary, the most appropriate is to use the state in the Home component.
   * You should pass the data as a prop to the TaskList component.
   */
  const [data, setData] = useState<Task[]>([])

  const { token } = useAuth()

  /**
   * This fetch should be done in the Home component and the data should be passed as a prop to the TaskList component.
   */
  const getTasks = async () => {
    try {
      const response = await API.service('todo').find(
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      setData(response)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getTasks()
  }, [data]) // This dependency [data] is causing the infinite loop

  return (
    <TaskListContainer>
      {data?.map((task, index) => {
        return (
          <Card
            /**
             * Missing events to edit and delete tasks.
             * You must pass the events as props to update the global state in the <Home /> component.
             */
            key={index}
            task={task}
            
          />
        )
      })}
      {data.length === 0 && <h1>No tasks found</h1>}
    </TaskListContainer>
  )
}
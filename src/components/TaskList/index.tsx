import { useEffect, useState } from 'react'

import { Task } from '../../core/interfaces'

import { API } from '../../core/api/services/client'
import { useAuth } from '../../core/context/hooks'

import { TaskListContainer } from './../commons'

import { Card } from '../Card'

export function TaskList() {

  const [data, setData] = useState<Task[]>([])

  const { token } = useAuth()

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
  }, [])

  return (
    <TaskListContainer>
      {data?.map((task, index) => {
        return (
          <Card key={index} task={task} />
        )
      })}
      {data.length === 0 && <h1>No tasks found</h1>}
    </TaskListContainer>
  )
}
import { useState } from "react";

import { API } from "../../core/api/services/client";
import { useAuth } from "../../core/context/hooks";

import {
  EditTaskButton,
  EditTaskInput,
  EditTaskInputContainer,
  EditTaskLabel,
  IconButton,
  IconButtonContainer,
  TaskDescription,
  TaskItem,
  TaskTitle
} from "../commons";

import { BiEditAlt, BiSolidTrashAlt } from "react-icons/bi";

interface CardProps {
  task: {
    id?: string;
    title: string;
    description: string;
  };
  key: number;
}

export function Card({ task, key }: CardProps) {

  const [isEditing, setIsEditing] = useState(false)
  const [updatedTask, setUpdatedTask] = useState({
    title: task.title,
    description: task.description
  })

  const { token } = useAuth()

  const handleDelete = async (taskId: any) => {
    try {
      await API.service('todo').remove(taskId, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

    } catch (err) {
      console.error(err)
    }
  }

  const handleUpdate = async (taskId: any) => {
    setIsEditing(true)
    try {
      await API.service('todo').patch(taskId,
        {
          title: updatedTask.title,
          description: updatedTask.description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      setIsEditing(false)
    } catch (err) {
      console.error(err)
    }
  }

  const handleSave = () => {
    handleUpdate(task.id)
  }

  return (
    <TaskItem
      key={key}
    >
      <TaskTitle> {task.title} </TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
      <IconButtonContainer>
        <IconButton
          onClick={() => setIsEditing(true)}
        >
          <BiEditAlt
            size={20}
            color="#F4F4F4"
          />
        </IconButton>
        <IconButton
          onClick={() => handleDelete(task.id)}
        >
          <BiSolidTrashAlt
            size={20}
            color="#F4F4F4"
          />
        </IconButton>
      </IconButtonContainer>
      {isEditing && <div>
        <EditTaskInputContainer>
          <EditTaskLabel htmlFor='title'>Task Name</EditTaskLabel>
          <EditTaskInput
            type="text"
            value={updatedTask.title}
            onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
          />
        </EditTaskInputContainer>
        <EditTaskInputContainer>
          <EditTaskLabel htmlFor='description'>Description</EditTaskLabel>
          <EditTaskInput
            type="text"
            value={updatedTask.description}
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
          />
        </EditTaskInputContainer>
        <EditTaskButton
          onClick={() => handleSave()}
        >
          Save
        </EditTaskButton>
      </div>
      }
    </TaskItem >
  )
}
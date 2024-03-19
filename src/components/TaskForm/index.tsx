import { TaskButton, TaskInput, TaskInputContainer } from "../commons";

interface TaskFormProps {
  register: any
  handleSubmit: any
  errors: any
  onSubmit: any
}

export function TaskForm({ register, handleSubmit, errors, onSubmit }: TaskFormProps) {
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
      }}
    >
      <TaskInputContainer>
        <label htmlFor='task'>Task Name</label>
        <TaskInput
          type='text'
          {...register('name', { required: true })}
          placeholder='Task Name'
        />
        {errors.name && <span>This field is required</span>}
      </TaskInputContainer>
      <TaskInputContainer>
        <label htmlFor='description'>Description</label>
        <TaskInput
          type='text'
          {...register('description', { required: true })}
          placeholder='Description'
        />
        {errors.description && <span>This field is required</span>}
      </TaskInputContainer>
      <TaskInputContainer>
        <TaskButton
          type='submit'
          onClick={handleSubmit(onSubmit)}
        >
          Add Task
        </TaskButton>
      </TaskInputContainer>
    </form>
  )
}
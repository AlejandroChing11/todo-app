import { ErrorText, TaskButton, TaskCheckbox, TaskInput, TaskInputContainer } from "../commons";

interface TaskFormProps {
  register: any
  handleSubmit: any
  errors: any
  onSubmit: any,
}

export function TaskForm({ register, handleSubmit, errors, onSubmit }: TaskFormProps) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '3rem',
      }}
    >
      <TaskInputContainer>
        <label htmlFor='title'>Task Name</label>
        <TaskInput
          type='text'
          id="title"
          {...register('title', { required: true })}
        />
        {errors.title && <ErrorText>This field is required</ErrorText>}
      </TaskInputContainer>
      <TaskInputContainer>
        <label htmlFor='description'>Description</label>
        <TaskInput
          type='text'
          id="description"
          {...register('description', { required: true })}
        />
        {errors.description && <ErrorText>This field is required</ErrorText>}
      </TaskInputContainer>
      <TaskInputContainer>
        <label>Status</label>
        <TaskCheckbox
          type='checkbox'
          {...register('is_done')}
          defaultChecked={false}
        />
      </TaskInputContainer>
      <TaskInputContainer>
        <TaskButton
          type='submit'
        >
          Add Task
        </TaskButton>
      </TaskInputContainer>
    </form>
  )
}
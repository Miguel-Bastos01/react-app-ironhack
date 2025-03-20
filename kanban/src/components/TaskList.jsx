import { TaskItem } from './TaskItem';

export function TaskList({ myCards }) {
  return (
    <ol>
      {myCards.map( (item) => {
        return (
          <TaskItem item={item} />
        )
      })}
    </ol>
  )
}
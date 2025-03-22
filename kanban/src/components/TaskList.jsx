import { TaskItem } from './TaskItem';

export function TaskList({ deleteItem, myCards }) {
  return (
    <ol>
      {myCards.map( (item) => {
        return (
          <TaskItem deleteItem={deleteItem} item={item} />
        )
      })}
    </ol>
  )
}
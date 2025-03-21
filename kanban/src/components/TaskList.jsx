import { TaskItem } from './TaskItem';

export function TaskList({ type, deleteItem, myCards }) {

  const cards = myCards.filter((card) => card.status === type);

  return (
    <>
      <h3>{type}: {cards.length}</h3>
    <ol>
      {cards.map( (item) => {
        return (
          <TaskItem deleteItem={deleteItem} item={item} />
        )
      })}
    </ol>
    </>
  
  )
}
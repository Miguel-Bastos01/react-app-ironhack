import { TaskItem } from "./TaskItem";

export function TaskList({ type, deleteItem, myCards }) {
  const cards = myCards.filter((card) => card.status === type);

  return (
    <>
      <h3 className="ColumnTitle">
        {type}: {cards.length}
      </h3>
      <div className="columns">
        <div className="row">
          <hr />
        </div>
        <div className="row">
          <ul>
            {cards.map((item) => {
              return (
                <TaskItem key={item.id} deleteItem={deleteItem} item={item} />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

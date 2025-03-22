export function TaskItem({ deleteItem, item }) {


    return (
      <li key={item.id}>
        {item.title}
        {/* {item.description} */}
        { item.status === "To Do" ? '❌' : item.status === "In Progress" ? '⏳': '✅'}
        <button onClick={() => deleteItem(item.id)}>Remove a card</button>
      </li>
      
    )
  }

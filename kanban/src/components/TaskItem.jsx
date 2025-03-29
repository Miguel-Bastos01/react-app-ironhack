export function TaskItem({ deleteItem, item }) {


    return (
      <li className="TaskItem" key={item.id}>
        {item.title}
        {/* {item.description} */}
        { item.status === "To Do" ? '❌' : item.status === "In Progress" ? '⏳': '✅'}
        <button className="RemoveButton" onClick={() => deleteItem(item.id)}>Remove a card</button>
      </li>
      
    )
  }

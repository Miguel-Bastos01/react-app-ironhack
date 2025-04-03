export function TaskItem({ deleteItem, item }) {


    return (
      <li className="TaskItem" key={item.id}>
        {item.title}
        {/* {item.description}
        { item.status === "To Do" ? '❌' : item.status === "In Progress" ? '⏳': '✅'} <br /> */}
        <button className="RemoveButton" onClick={() => deleteItem(item.id)}>🗑️</button>
        <hr />
      </li>
      
    )
  }

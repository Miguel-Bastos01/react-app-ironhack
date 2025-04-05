export function TaskItem({ deleteItem, item }) {


    return (
      <>
      <li className="TaskItem" key={item.id}>
      <button className="RemoveButton" onClick={() => deleteItem(item.id)}>🔧</button>
        {item.title}
        {/* {item.description}
        { item.status === "To Do" ? '❌' : item.status === "In Progress" ? '⏳': '✅'} <br /> */}
        <button className="RemoveButton" onClick={() => deleteItem(item.id)}>🗑️</button>
      </li>
       <hr />
       </>
    )
  }

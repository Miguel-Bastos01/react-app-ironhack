export function TaskItem({ item }) {


    return (
      <li key={item.id}>
        {item.title}
        {item.description}
        { item.status === "To Do" ? '❌' : item.status === "In Progress" ? '⏳': '✅'}
      </li>
    )
  }

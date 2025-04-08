import { Link } from "react-router-dom";

export function TaskItem({ deleteItem, item }) {
  return (
    <>
      <li className="TaskItem" key={item.id}>
        <Link to={`/dashboard/${item.id}`} key={item.id}>
          {item.title}
        </Link>
        {/* { item.status === "To Do" ? '❌' : item.status === "In Progress" ? '⏳': '✅'} <br /> } */}
        <button className="RemoveButton" onClick={() => deleteItem(item.id)}>
          🗑️
        </button>
      </li>
      <hr />
    </>
  );
}

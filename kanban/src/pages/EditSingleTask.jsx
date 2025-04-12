import { useParams, Route, Routes, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function EditSingleTask({ cards, setCards, deleteItem }) {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: name,
      description: description,
      priority: priority,
      deadline: date,
      status: status,
      id: uuidv4(),
    };
    addTask(newTask);
    navigate("/dashboard")
  };

  const addTask = (task) => {
    const tasksCopy = structuredClone(myCard);
    tasksCopy.push(task);
    setCards(tasksCopy);
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState(2025);

  const myCard = cards.filter((card) => card.id === taskId);

  return (
    <>
      
        <form onSubmit={handleSubmit}>
          {myCard.map((item) => {
            return (
              <>
                <table className="single-task-list">
                  <tr className="single-task-row">
                    <th className="single-task-header">Task Name:</th>

                    <td className="single-task-info">
                      <input
                        className="input task-name"
                        name="taskName"
                        type="text"
                        value={name}
                        placeholder={item.title}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </td>
                  </tr>

                  <tr className="single-task-row">
                    <th className="single-task-header">Task Description:</th>

                    <td className="single-task-info">
                      <label>
                        <textarea
                          className="textarea"
                          rows="3"
                          cols="60"
                          name="taskDescription"
                          type="text"
                          placeholder={item.description}
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                        ></textarea>
                      </label>
                    </td>
                  </tr>

                  <tr className="single-task-row">
                    <th className="single-task-header">Task Status:</th>

                    <td className="single-task-info">
                      <label>
                        <select
                          className="input"
                          name="status"
                          value={status}
                          onChange={(e) => {
                            setStatus(e.target.value);
                          }}
                        >
                          <option className="modal-option" value={item.status}>
                            {item.status}
                          </option>
                          <option className="modal-option" value="To Do">
                            To do
                          </option>
                          <option className="modal-option" value="In Progress">
                            In Progress
                          </option>
                          <option className="modal-option" value="Done">
                            Done
                          </option>
                        </select>
                      </label>
                    </td>
                  </tr>

                  <tr className="single-task-row">
                    <th className="single-task-header">Priority Level:</th>

                    <td className="single-task-info">
                      <label>
                        <select
                          className="input"
                          name="priority"
                          value={priority}
                          onChange={(e) => {
                            setPriority(e.target.value);
                          }}
                        >
                          <option
                            className="modal-option"
                            value={item.priority}
                          >
                            {item.priority}
                          </option>
                          <option className="modal-option" value="Low">
                            Low
                          </option>
                          <option className="modal-option" value="Medium">
                            Medium
                          </option>
                          <option className="modal-option" value="High">
                            High
                          </option>
                        </select>
                      </label>
                    </td>
                  </tr>
                  <tr className="single-task-row">
                    <th className="single-task-header">Task Deadline:</th>
                    <td className="single-task-info">
                      <label>
                        <input
                          className="input"
                          name="deadline"
                          type="date"
                          value={date}
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                        />
                      </label>
                    </td>
                  </tr>
                </table>
              </>
            );
          })}
          <button className="btn btn-submit" type="submit">
            Update Task
          </button>
          <Link to="/dashboard" className="btn btn-cancel"

          >
            Cancel
          </Link>
        </form>
      
    </>
  );
}

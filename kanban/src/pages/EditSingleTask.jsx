import { useParams, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function EditSingleTask({ cards, setCards, deleteItem }) {
  const { taskId } = useParams();
  const [showForm, setShowForm] = useState(false);

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
    setShowForm(!showForm);
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
      
        <button className="a" onClick={() => setShowForm(!showForm)}>
          {showForm
            ? "Dunno how to get rid of this... Snozzles!"
            : "Are you sure you want to edit the task? If you do, then you'll need to update everything again - don't fuck it up"}
        </button>
      

      {showForm && (
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
          <button
            className="btn btn-cancel"
            type="button"
            onClick={() => setShowForm(!showForm)}
          >
            Cancel
          </button>
        </form>
      )}
    </>
  );
}

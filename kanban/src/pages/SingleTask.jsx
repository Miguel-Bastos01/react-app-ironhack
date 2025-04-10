import { useParams, Link } from "react-router-dom";
import { useState } from "react";

export function SingleTask({ cards }) {
  const { taskId } = useParams();

  const myCard = cards.filter((card) => card.id === taskId);

  return (
    <>
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
                    placeholder="Task Name"
                    value={item.title}
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
                      placeholder="Task Description"
                      value={item.description}
                    ></textarea>
                  </label>
                </td>
              </tr>

              <tr className="single-task-row">
                <th className="single-task-header">Task Status:</th>

                <td className="single-task-info">
                  <label>
                    <select className="input" name="status" value={item.status}>
                      <option className="modal-option" value="">
                        -- None --
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
                      value={item.priority}
                    >
                      <option className="modal-option" value="">
                        -- None --
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
                      value={item.dueDate}
                    />
                  </label>
                </td>
              </tr>
            </table>
            <Link to={`/dashboard/${item.id}/edit`} key={item.id} className="edit-btn">
              Edit your task
            </Link>
          </>
        
        );
        
      })}
    </>
  );
}

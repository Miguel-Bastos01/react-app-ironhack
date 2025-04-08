export function SingleTask({ cards }) {

  const myCard = cards.filter((card) => card.id === card.id);
  console.log(myCard)


  return (
    <>
      {myCard.map((item) => {
        return (
          <table className="single-task-list">
            <tr className="single-task-row">
              <th className="single-task-header">Task Name:</th>

              <td className="single-task-info">
                <input
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
                    rows="4"
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
                  <select name="status" value={item.status}>
                    <option value="">-- None --</option>
                    <option value="To Do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </label>
              </td>
            </tr>

            <tr className="single-task-row">
              <th className="single-task-header">Priority Level:</th>

              <td className="single-task-info">
                <label>
                  <select name="priority" value={item.priority}>
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
                    name="deadline"
                    type="date"
                    value={item.dueDate}
                  />
                </label>
              </td>
            </tr>
          </table>
        );
      })}
    </>
  );
}

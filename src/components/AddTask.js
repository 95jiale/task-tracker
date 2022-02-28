import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [color, setColor] = useState("Yellow");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add task");
      return;
    }

    onAdd({ text, day, reminder, color });

    setText("");
    setDay("");
    setColor("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(
            e //ask jh
          ) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(
            e //ask jh
          ) => setDay(e.target.value)}
        />
      </div>
      {/* ////last edited
      <div className="form-control">
      <label>Select Color</label>
      <div className="radio">
          <label>
            <input
              type="radio"
              value="Red"
              checked={this.state.selectedOption === "Red"}
              onChange={this.onColorChange}
            />
            Red
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Blue"
              checked={this.state.selectedOption === "Blue"}
              onChange={this.onColorChange}
            />
            Blue
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Yellow"
              checked={this.state.selectedOption === "Yellow"}
              onChange={this.onColorChange}
            />
            Yellow
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
      </div>
      ///last edited */}
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(
            e //ask jh
          ) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
}

export default AddTask;

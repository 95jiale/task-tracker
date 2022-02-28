import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [backgroundColor, setbackgroundColor] = useState("Yellow");
  const [reminder, setReminder] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setbackgroundColor(target.value);
      console.log(backgroundColor);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add task");
      return;
    }

    onAdd({ text, day, reminder, backgroundColor });

    setText("");
    setDay("");
    setbackgroundColor("Yellow");
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
      <div className="form-control">
        <label>
          <input
            type="radio"
            value="red"
            checked={backgroundColor == "red"}
            onChange={handleChange}
          />
          <span>Red</span>
        </label>
        <label>
          <input
            type="radio"
            value="yellow"
            checked={backgroundColor == "yellow"}
            onChange={handleChange}
          />
          <span>Yellow</span>
        </label>
        <label>
          <input
            type="radio"
            value="blue"
            checked={backgroundColor == "blue"}
            onChange={handleChange}
          />
          <span>Blue</span>
        </label>
      </div>
      {/* <div className="form-control">
        <label>Select Color</label>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Red"
              checked={selectedOption === "Red"}
              onChange={onColorChange}
            />
            Red
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Blue"
              checked={selectedOption === "Blue"}
              onChange={onColorChange}
            />
            Blue
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Yellow"
              checked={selectedOption === "Yellow"}
              onChange={onColorChange}
            />
            Yellow
          </label>
        </div>
        <div>Selected option is : {selectedOption}</div>
      </div> */}

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

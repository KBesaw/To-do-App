import { FormEvent, useState } from "react";

const InputContainer = ({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}) => {
  const [newTaskName, setNewTaskName] = useState("");

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        handleSubmit(e, newTaskName);
        setNewTaskName("");
      }}
    >
      <div className="flex flex-col">
        <label className="text-white">Enter your next task:</label>
        <input
          type="text"
          className="p-1 rounded-sm"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-violet-100 rounded-lg hover:bg-violet-200 p-1"
      >
        Add task
      </button>
    </form>
  );
};

export default InputContainer;

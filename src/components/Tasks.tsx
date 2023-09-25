import { Task } from "../App";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  toggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
}

const Tasks = ( { tasks, toggleDone, handleDelete }: Props ) => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.length ? (
        tasks.map((t) => (
          <TaskItem 
            key={t.id}
            name={t.name}
            done={t.done}
            id={t.id}
            toggleDone={toggleDone}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <span className="text-violet-100">No tasks yet!</span>
      )}
    </div>
  )
}

export default Tasks
import { useDispatch } from "react-redux";
import { completeTask, deleteTask, updateTask } from "../feature/todo/todoSlice";
import { useState } from "react";

function TodoItem({ id, task, completed }) {
    const [taskMsg, setTaskMsg] = useState(task)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const dispatch = useDispatch()
    const toggleCompleted = () => {
        dispatch(completeTask(id))
    }
    const editTodo = () => {
        dispatch(updateTask({ id, taskMsg }))
        setIsTodoEditable(false)
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${completed ? "line-through" : ""}`}
                value={taskMsg}
                onChange={(e) => setTaskMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (completed) return;

                    if (isTodoEditable) {
                        editTodo()
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(deleteTask(id))}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

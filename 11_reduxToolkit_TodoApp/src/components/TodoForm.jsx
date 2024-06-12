import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../feature/todo/todoSlice";

function TodoForm() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    function addTaskHandler(e) {
        e.preventDefault()
        dispatch(addTask(input))
        setInput("")
    }
    return (
        <form onSubmit={addTaskHandler} className="flex">
            <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


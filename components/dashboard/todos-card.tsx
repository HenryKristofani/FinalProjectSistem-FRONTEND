import { FaPlus } from "react-icons/fa"

const todos = [
  { id: 1, text: "Follow Oluwafisayomi.dev on Twitter.", done: true },
  { id: 2, text: "Learn Figma by 4pm.", done: true },
  { id: 3, text: "Coding at 9am.", done: false },
  { id: 4, text: "Watch Mr Beasts Videos.", done: false },
]

export default function TodosCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 mt-4 w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground font-semibold">Dairy Tasks.</span>
        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#111] text-white hover:bg-[#5e8d89] transition">
          <FaPlus size={14} />
        </button>
      </div>
      <ul className="max-h-40 overflow-y-auto pr-1">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 mb-2 last:mb-0">
            <span
              className={`inline-block w-5 h-5 rounded border-2 ${
                todo.done ? "bg-[#5e8d89] border-[#5e8d89]" : "border-[#111]"
              }`}
            />
            <span className={`text-sm ${todo.done ? "font-semibold" : ""}`}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

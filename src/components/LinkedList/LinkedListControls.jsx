import { useState } from "react";
import { SinglyLinkedList, DoublyLinkedList } from "./LinkedListLogic";

export default function LinkedListControls({ type, setList, setAnimationState }) {
  const [input, setInput] = useState("");
  const [instance, setInstance] = useState(
    type === "singly" ? new SinglyLinkedList() : new DoublyLinkedList()
  );

  const updateList = () => {
    setList(instance.toArray());
  };

  const handleInsert = () => {
    if (!input) return;
    instance.insertAtEnd(input);
    updateList();
    setInput("");
  };

  const handleDelete = () => {
    instance.delete(input);
    updateList();
    setInput("");
  };

  const handleTraverse = () => {
    setAnimationState("traversing");
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded"
        placeholder="Enter value"
      />
      <button onClick={handleInsert} className="bg-green-500 px-3 py-1 rounded text-white">
        Insert
      </button>
      <button onClick={handleDelete} className="bg-red-500 px-3 py-1 rounded text-white">
        Delete
      </button>
      <button onClick={handleTraverse} className="bg-blue-500 px-3 py-1 rounded text-white">
        Traverse
      </button>
    </div>
  );
}


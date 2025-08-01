import { useState, useEffect } from "react";
import LinkedListCanvas from "./LinkedListCanvas";
import LinkedListControls from "./LinkedListControls";
import { SinglyLinkedList, DoublyLinkedList } from "./LinkedListLogic";

export default function LinkedListDemo() {
  const [listType, setListType] = useState("singly"); // "singly" or "doubly"
  const [linkedList, setLinkedList] = useState(null); // will hold array of nodes
  const [animationState, setAnimationState] = useState("paused");

  // Reset list when switching type
  useEffect(() => {
    const freshList = listType === "singly"
      ? new SinglyLinkedList()
      : new DoublyLinkedList();

    setLinkedList(freshList.toArray());
  }, [listType]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🔗 Linked List Visualizer</h1>

      <div className="flex justify-center mb-6">
        <label className="mr-2 text-lg font-medium">List Type:</label>
        <select
          value={listType}
          onChange={(e) => setListType(e.target.value)}
          className="p-2 border border-gray-400 rounded"
        >
          <option value="singly">Singly Linked List</option>
          <option value="doubly">Doubly Linked List</option>
        </select>
      </div>

      <LinkedListCanvas
        list={linkedList}
        type={listType}
        animationState={animationState}
      />

      <LinkedListControls
        type={listType}
        setList={setLinkedList}
        setAnimationState={setAnimationState}
      />
    </div>
  );
}


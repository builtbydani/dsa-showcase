import { useState, useEffect } from "react";
import LinkedListCanvas from "./LinkedListCanvas";
import LinkedListControls from "./LinkedListControls";
import { SinglyLinkedList, DoublyLinkedList } from "./LinkedListLogic";
import PseudocodeBox from "./PseudocodeBox";
import GlowPanel from "../Common/GlowPanel";
import DescriptionBox from "../Common/DescriptionBox";

export default function LinkedListDemo() {
  const [listType, setListType] = useState("singly");
  const [listInstance, setListInstance] = useState(new SinglyLinkedList());
  const [tick, setTick] = useState(0); // trigger rerender after mutating list
  const [animationState, setAnimationState] = useState("paused");
  const [activeIndex, setActiveIndex] = useState(null);
  const [pseudocodeLine, setPseudocodeLine] = useState(null);

  useEffect(() => {
    const freshList = listType === "singly"
      ? new SinglyLinkedList()
      : new DoublyLinkedList();
    setListInstance(freshList);
    setTick(t => t + 1); // trigger rerender
  }, [listType]);

  useEffect(() => {
    if (animationState !== "traversing") return;

    const nodes = listInstance.toArray();
    let i = 0;

    const interval = setInterval(() => {
      if (i >= nodes.length) {
        clearInterval(interval);
        setActiveIndex(null);
        setPseudocodeLine(null);
        setAnimationState("paused");
        return;
      }
      setPseudocodeLine(i === 0 ? 0 : 2);
      setActiveIndex(i);

      setTimeout(() => {
        setPseudocodeLine(3);
      }, 300);

      i++;
    }, 600);

    return () => clearInterval(interval);
  }, [animationState, listInstance]);

  const forceUpdate = () => setTick(t => t + 1);

  return (
    <GlowPanel>

        <label className="mr-2 text-lg font-medium">List Type:</label>
        <select
          value={listType}
          onChange={(e) => setListType(e.target.value)}
          className="p-2 border border-gray-400 rounded"
        >
          <option value="singly">Singly Linked List</option>
          <option value="doubly">Doubly Linked List</option>
        </select>

      <LinkedListControls
        type={listType}
        instance={listInstance}
        forceUpdate={forceUpdate}
        setAnimationState={setAnimationState}
      />

      <LinkedListCanvas
        list={listInstance.toArray()}
        type={listType}
        animationState={animationState}
        activeIndex={activeIndex}
      /> 

      <PseudocodeBox activeLine={pseudocodeLine} />

      <DescriptionBox>
        A <strong>linked list</strong> is a linear data structure where elements (called nodes)
        are connected using pointers.
        <br />
        <br />
        Each node stores a <em>value</em> and a <em>reference</em> to the{" "}
        <strong>next</strong> node. 
        <br />
        In a <strong>singly linked list</strong>, nodes only point forward.
        <br />
        In a <strong>doubly linked list</strong>;
        <br />
        each node also tracks a reference to the{" "}
        <em>previous</em> node, allowing <strong>bidirectional traversal</strong>. 
        <br />
        <br />
        Unlike <strong>arrays</strong>, 
        <br />
        <strong>linked lists </strong>
        don’t store elements in contiguous memory
        <br />
        and allow efficient insertion/deletion
        <br />
        <em>without</em> shifting other elements.
      </DescriptionBox>

    </GlowPanel>
  );
}

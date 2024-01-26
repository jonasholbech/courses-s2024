"use client";
import { useState } from "react";

function simple() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow((old) => !old)}>Read more</button>
      <p style={{ visible: show }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, autem
        quia debitis maxime beatae sapiente, architecto sint molestias ipsa
        libero laboriosam totam porro amet. Eveniet itaque deleniti soluta in
        tempore?
      </p>
    </div>
  );
}

export default simple;

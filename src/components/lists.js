import React from "react";

export default function lists() {
  const count = false;
  return (
    <ul>
      <li>Lista 1</li>
      {count && <li>Lista 2</li>}
      <li>Lista 3</li>
      <li>Lista 4</li>
    </ul>
  );
}

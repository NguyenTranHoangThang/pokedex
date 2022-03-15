import { useState } from "react";

export default function Index() {
  const [first, setfirst] = useState(0)
  return (
    <div><h1 onClick={() => setfirst(first + 1)}>hello {first}</h1></div>
  );
}

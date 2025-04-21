import { useState } from "react";
import Listing from "./components/Listing.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <Listing
          users={[
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 3, name: "Carol" },
            { id: 4, name: "Dave" },
          ]}
        />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;

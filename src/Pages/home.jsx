import CodeBlock from "@/Components/CodeBlockComponent/CodeBlock";

const Home = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen box-border">
      <CodeBlock
        code={`
          import React, { useState } from 'react';

          const App = () => {
            const [count, setCount] = useState(0);

            const handleIncrement = () => {
              setCount(prevCount => prevCount + 1);
            };

            const handleDecrement = () => {
              setCount(prevCount => prevCount - 1);
            };

            return (
              <div>
                <h1>Counter App</h1>
                <p>Count: {count}</p>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
              </div>
            );
          };

          export default App;
          
          import React, { useState } from 'react';

          const App = () => {
            const [count, setCount] = useState(0);

            const handleIncrement = () => {
              setCount(prevCount => prevCount + 1);
            };

            const handleDecrement = () => {
              setCount(prevCount => prevCount - 1);
            };

            return (
              <div>
                <h1>Counter App</h1>
                <p>Count: {count}</p>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
              </div>
            );
          };

          export default App;
        `}
      ></CodeBlock>
    </div>
  );
};

export default Home;

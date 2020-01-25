import React from 'react';
import Display from "./components/Display";



function App() {
  return (
    <div>
      <h1>Baseball Umpire App</h1>
      <div data-testid="display-container">
        <Display />
      </div>
    </div>

  );

}

export default App;

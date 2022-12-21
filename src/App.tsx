import { useState } from "react";

import Title from './components/Title';

function App() {

  const [isOpened, setOpened] = useState<boolean>(false);
   
  const handleClick = () => {
    setOpened(true);
  };

  if (isOpened) {
    return (
      <>
      <Title name = "Products" type = "bold" />
      <Title name="Employees" type="normal" />
    </>
    )
  };

  return (
    <button onClick={handleClick}>Open</button>
  )
}

export default App;

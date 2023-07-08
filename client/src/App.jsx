import Canvas from "./canvas";
import Costumizer from "./pages/Costumizer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <main className='app transition-all-ease-in'>
        <Home></Home>
        <Canvas></Canvas>
        <Costumizer></Costumizer>
      </main>
    </>
  );
}

export default App;

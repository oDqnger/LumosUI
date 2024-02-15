import "./styles/output.css"
import { Snippet } from './components/Snippet'
import { Button } from './components/Button'
import { Accordian, AccordianItem } from "./components/Accordian";

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold">Hello World</h1>
      <Snippet>
        <span>npm install -D tailwindcss</span>
        <span>npx tailwindcss init</span>
        {/* npm install @nextui-org/react */}
      </Snippet><br />
      <Button>Hello</Button>
    </>
  );
}

export default App;

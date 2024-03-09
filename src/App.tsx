import React from "react";
import "./styles/output.css"
import { Snippet } from './components/Snippet'
import { Button } from './components/Button'
import { Accordian, AccordianItem } from "./components/Accordian";
import { Input } from "./components/Input"

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold">Hello World</h1>
      <Snippet>
        <span>npm install -D tailwindcss</span>
        <span>npx tailwindcss init</span>
        {/* npm install @nextui-org/react */}
      </Snippet><br />
      <Button>Hello</Button><br />
      <Button radius="none" size="sm" color="success" onClick={() => {
        console.log("hello");
      }}>Hello</Button>
      <Accordian>
        <AccordianItem title="Title #1" subtitle="this is subtitle #1">
          This is accordian item number one
        </AccordianItem>
        <AccordianItem title="Title #2" subtitle="this is subtitle #2">
          This is accoridna item number two
        </AccordianItem>
        <AccordianItem title="Title #3" subtitle="this is subtitle #3">
          This is accoridan item number three
        </AccordianItem>
      </Accordian>
      <Input type="email" sizes="md" radius="md" />

      <Snippet>python main.py</Snippet>
    </>
  );
}

export default App;

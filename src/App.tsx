import React from "react";
import "./styles/output.css"
import { Snippet } from './components/Snippet'
import { Button } from './components/Button'
import { Accordian, AccordianItem } from "./components/Accordian";
import { Input } from "./components/Input"
import { Alert } from "./components/Alert"
import { Card } from "./components/Card";

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
      <br/><Snippet>python main.py</Snippet><br />
      <Alert className="mb-8 mt-8" theme="success" radius="full">Successfully created an account!</Alert>
      <br />
      <Card radius="md" className="pr-10">
        <span className="text-gray-600">Word of the day</span>
        <h1 className="font-semibold text-2xl">be•nev•o•lent</h1>
        <span className="text-gray-600">adjective</span>
        <p className="mt-3 mb-3">well meaning and kindly.
        <br />"a benevolent smile"</p>
        <a href="www.youtube.com" className="text-sky-900">LEARN MORE</a>
      </Card>
    </>
  );
}

export default App;

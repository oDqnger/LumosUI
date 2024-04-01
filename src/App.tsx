import React, { useState } from "react";
import "./styles/output.css"
import { Snippet } from './components/Snippet'
import { Button } from './components/Button'
import { Accordian, AccordianItem } from "./components/Accordian";
import { Input } from "./components/Input"
import { Alert } from "./components/Alert"
import { Card } from "./components/Card";
import { Divider } from "./components/Divider"
import { Avatar } from "./components/Avatar";
import DiscordPFP from "./examples/DiscordPFP";

// * TODO - add storybook
// * TODO - make some test cases for each component
// * TODO - add some stuff and fix bugs for button
// * TODO - add some stuff and fix bugs for input
// * TODO - fix snippet component
// TODO - remake the accordian component
// TODO - fix any other bug that comes up
// TODO - add some more components
// TODO - finish setting up the github repo to make it open sourced and public
// TODO - public npm
// TODO - and we're done

function App() {
  return (
    <>
      <DiscordPFP 
      displayName="oDqnger"
      name="odqnger"
      pronouns="odonger/odqnger/dqnger/odanger/dangerous"
      aboutMe="c# and unity game developer"
      memberSince="Dec 31, 2020"
      discordPfp="https://i.pravatar.cc/150?u=a042581f4e29026024d"
      />

      <DiscordPFP 
      displayName="shrimp"
      name="cuhhh._."
      pronouns="im a shrimp so don't judge"
      aboutMe="i guess im shrimply the best"
      memberSince="Nov 6, 2023"
      discordPfpName="shrimp"
      />

      <Button className="bg-green-400">Hello</Button>
    </>
  );
}

export default App;

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

interface IState{
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://freepngimg.com/thumb/lebron_james/20172-1-lebron-james-free-download.png",
      age: 38,
      note: "Allergic to staying on the same team"
    }
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddToList />
    </div>
  );
}

export default App;

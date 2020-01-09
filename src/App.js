import React, { useState } from "react";
import "./App.css";
import NameList from "./components/NamesList";
import Credit from "./components/Credit";
import Search from "./components/Search";
import Shortlist from "./components/ShortList";

// pass data props from index.js
function App({ data }) {
  // create a state for text in input
  const [filterText, setFilterText] = useState("");

  // function that takes in a value and setFilterText to that value, then we can pass this function down via props to NameList and to Search function
  // setting the state of filterText to the value, which we get from Search.js by using a callback function to return value from Search.js back up to App.js
  const filterUpdateText = value => {
    setFilterText(value);
  };

  // filterText is now updated every time via the filterUpdateText function, which gets the value from the child component i.e. Search.js
  console.log("filterText from parent component", filterText);

  return (
    <div className="App">
      <Search filterText={filterText} filterUpdateText={filterUpdateText} />
      <main>
        <Shortlist />
        {/* pass data props down to NameList component */}
        <NameList data={data} filterText={filterText} />
      </main>
      <Credit />
    </div>
  );
}

export default App;

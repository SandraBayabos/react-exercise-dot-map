import React from "react";
import "./App.css";
import NameList from "./components/NamesList";
import Credit from "./components/Credit";
import Search from "./components/Search";

// pass data props from index.js
function App({ data }) {
  return (
    <div>
      <Search />
      {/* pass data props down to NameList component */}
      <NameList data={data} />
      <Credit />
    </div>
  );
}

export default App;

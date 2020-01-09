import React, { useRef } from "react";

const Search = ({ filterText, filterUpdateText }) => {
  const input = useRef(null);

  function filterUpdate() {
    const value = input.current.value;
    // the value gets passed back up to the App component via the filterUpdateText function
    // you can only pass values/props back up to the parent via a function so we pull the function from props, pass it into this function to obtain the value so it can be passed back up to App.js
    filterUpdateText(value);
    console.log(value);
  }

  console.log("filterText value", filterText);

  return (
    <div>
      <header>
        <form>
          <input
            type="text"
            placeholder="Type to filter..."
            ref={input}
            onChange={filterUpdate}
          ></input>
        </form>
      </header>
    </div>
  );
};

export default Search;

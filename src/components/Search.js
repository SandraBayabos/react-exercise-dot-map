import React, { useRef } from "react";

const Search = () => {
  const input = useRef(null);

  function filterUpdate() {
    console.log(input.current.value);
  }

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

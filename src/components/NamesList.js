import React from "react";

// pass data as props from App.js
const NamesList = ({ data }) => {
  // create a variable that maps the data. .map() takes in two items i.e. each iteration from data as well as the index (but you can just have the iteration without the index if you like)
  const namesList = data.map((name, id) => {
    return (
      // each unique element requires a key, so in this case we give each list element a key, which is the index from the .map() function

      // give dynamic className to affect difference CSS
      <li className={name.sex} key={id}>
        {name.name}
      </li>
    );
  });

  return (
    <div className="App">
      <ul>{namesList}</ul>
    </div>
  );
};

export default NamesList;

import React from "react";

// pass data as props from App.js
const NamesList = ({ data, filterText }) => {
  // create a variable that maps the data. .map() takes in two items i.e. each iteration from data as well as the index (but you can just have the iteration without the index if you like)
  // add .filter() before .map() to remove names that don't match the current filterText
  const namesList = data
    .filter(name => {
      // remove names that don't match current filter text

      // indexOf will look through the filterText (i.e. our input) and see if it is an index of the array

      // remove all the names that = -1 when checking the indexOf. Basically, if the name is not in the array, it will return -1

      // if the current string typed in is not findable in a person's name, the name is out
      return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    })
    .map((name, id) => {
      return (
        // each unique element requires a key, so in this case we give each list element a key, which is the index from the .map() function

        // give dynamic className to affect difference CSS
        <li className={name.sex} key={id}>
          {name.name}
        </li>
      );
    });

  return (
    <div>
      <p>filterText value is {filterText}</p>
      <ul>{namesList}</ul>
    </div>
  );
};

export default NamesList;

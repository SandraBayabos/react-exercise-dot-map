import React from "react";

export default ({ favourites, data }) => {
  // test if the original state comes through by console logging the props
  console.log("list of favourites", favourites); // [1,2,3,4]
  console.log("data", data);

  // map over favourites to get EACH id
  const nameList = favourites.map(id => {
    console.log(id);
    // a single name and the sex of the item is the data of the id from the array. Sam thing as writing data[id].name or data[id].sex
    // NOTE the .map(id) only works because our actual [id] matches the data.id, so it works accordingly but this won't work for a todo list and the remove function because the id will be different for each item we choose to remove
    const { name, sex } = data[id];
    console.log(name);
    return (
      <li key={id} className={sex}>
        {name}
      </li>
    );
  });
  return (
    <div className="favourites">
      <h4>Click on a name to shortlist it...</h4>
      <ul>{nameList}</ul>
    </div>
  );
};

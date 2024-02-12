import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory)

  function HandleCategoryChange(e) {
    setSelectedCategory(e.target.value)
    console.log('hello')
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={HandleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => {
          console.log(item)
          return (
            <Item key={item.id} name={item.name} category={item.category} />
          )
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;

import { React, useState } from "react";

function Categories({ categories, onClick }) {
  const [activeItem, setActiveItem] = useState(0);

  function onSelectItem(index) {
    setActiveItem(index);
  }
  return (
    <div>
      <div className="categories">
        <ul>
          {categories &&
            categories.map((item, index) => {
              return (
                <li
                  className={index === activeItem ? "active" : ""}
                  onClick={() => onSelectItem(index)}
                  key={item}
                >
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Categories;

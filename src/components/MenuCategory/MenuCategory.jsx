import { useState } from "react";
import "./menuCategory.scss";

export default function MenuCategory({ category, title, data }) {
  const [checkedItems, setCheckedItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <article className={category}>
      <h2>{title}</h2>
      {data[category].map((item, index) => (
        <div
          className="choice"
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="info-group">
            <div className="title">{item.name}</div>
            <div className="description">{item.description}</div>
            <div className="price">{item.price}</div>
          </div>
          <div
            className={
              checkedItems.includes(index) || hoveredIndex === index
                ? "check move"
                : "check"
            }
          >
            <i className="fa-solid fa-check"></i>
          </div>
        </div>
      ))}
    </article>
  );
}

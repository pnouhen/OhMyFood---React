import { useState, useEffect } from "react";
import "./menuCategory.scss";

export default function MenuCategory({ category, title, data }) {
  const [checkedItems, setCheckedItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile based on screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setHoveredIndex(index);
    }
  };

  return (
    <article className={category}>
      <h2>{title}</h2>
      {data[category].map((item, index) => (
        <div
          className="choice"
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="info-group">
            <div className="title">{item.name}</div>
            <div className="description">{item.description}</div>
            <div className="price">{item.price}</div>
          </div>
          <div
            className={
              checkedItems.includes(index) || (hoveredIndex === index && !isMobile)
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
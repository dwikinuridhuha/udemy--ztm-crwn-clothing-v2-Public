import React from "react";
import CategoryItem from "../category-items/ItemComponent";
import "./categories.styles.scss";

export default function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}

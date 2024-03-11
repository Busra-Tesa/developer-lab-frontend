import React, { useState } from 'react';

const categories = [
  { id: 1, name: 'CSS' },
  { id: 2, name: 'JavaScript' },
  { id: 3, name: 'Java' },
  { id: 4, name: 'React' },
];

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  return (
    <ul className="category-list">
      {categories.map((category) => (
        <li
          key={category.id}
          className={`category-item ${selectedCategories.includes(category.id) ? 'selected' : ''}`}
          onClick={() => handleCategoryClick(category.id)}
        >
          <input
            type="checkbox"
            checked={selectedCategories.includes(category.id)}
            readOnly
          />
          <div className={`category-dot`} />
          <div className="category-name">{category.name}</div>
        </li>
      ))}
    </ul>
  );
};

export default Categories;

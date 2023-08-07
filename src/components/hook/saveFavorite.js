import { useState, useEffect } from 'react';

const useHeartIconClick = () => {
  const [chosenItems, setChosenItems] = useState(() => {
    const storedChosenItems = localStorage.getItem('chosenItems');
    return storedChosenItems ? JSON.parse(storedChosenItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('chosenItems', JSON.stringify(chosenItems));
  }, [chosenItems]);

  const handleHeartIconClick = (item) => {
    if (!chosenItems.some((selectedItem) => selectedItem.id === item.id)) {
      setChosenItems((prevSelectedItems) => [...prevSelectedItems, item]);
    }
  };

  const handleRemoveItem = (itemId) => {
    setChosenItems((prevSelectedItems) =>
      prevSelectedItems.filter((item) => item.id !== itemId)
    );
  };

  return { chosenItems, handleHeartIconClick, handleRemoveItem  };
};

export default useHeartIconClick;






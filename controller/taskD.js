// Fruit class
class Fruit {
    constructor(id, name, color) {
      this.id = id;
      this.name = name;
      this.color = color;
    }
  }
  
  const fruits = [
    new Fruit(1, 'Apple', 'Red'),
    new Fruit(2, 'Banana', 'Yellow'),
    new Fruit(3, 'Orange', 'Orange'),
    new Fruit(4, 'Grapes', 'Purple'),
  ];
  
  // API endpoint to get sorted fruits by color
 const taskD = (req, res) => {
    
    const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));
  
    res.status(200).json(sortedFruits);
  };

module.exports = {taskD}
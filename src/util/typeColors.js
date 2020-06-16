// Segun tipo de pokemon, devuelvo un color
const getColor = (name) => {
  switch (name) {
    case "normal": return "grey";
    case 'ghost': return 'grey'
    case 'ground': return 'brown'
    case 'rock': return 'brown'
    case 'fighting': return 'brown'
    case "flying": return "blue";
    case "water": return 'blue'
    case "poison": return "green";
    case 'grass': return 'green'
    case "bug": return "olive";
    case 'dark': return 'black'
    case 'steel': return 'black'
    case 'shadow': return 'black'
    case 'unknown': return 'black'
    case "fire": return "red";
    case "electric": return "yellow";
    case "psychic": return "purple";
    case "ice": return "teal";
    case "dragon": return "orange";
    case "fairy": return "pink";
    default:
    return "grey";
  }
};

export { getColor };

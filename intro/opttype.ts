interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig)
  : {color: string; area: number} {
  var newSquare = {
    color: "white", 
    area: 100
  };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

var mySquare = createSquare({color: "black"});

console.log(mySquare.color);
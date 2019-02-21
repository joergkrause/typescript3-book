let conf = {
  "/src/app/components": {
    "copy": true
  }
} 
type keys = keyof typeof conf;
let someobj: keys = '/src/app/components';
console.log(someobj);
const COLOR_RED    = Symbol();
const COLOR_GREEN  = Symbol();
const COLOR_BLUE   = 'COLOR_BLUE';


function colorName(c: string): string | null{
  switch(c){
    case COLOR_BLUE:
      return 'blue'
     default:
      return null;
  }
}

let cName = colorName('COLOR_BLUE');


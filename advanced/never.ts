function someTypeCheck(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }
  failCheck("Unexhaustive!");
}

function failCheck(message: string): never { throw new Error(message); }
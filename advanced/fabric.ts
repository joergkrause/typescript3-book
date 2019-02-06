export interface Type<T> extends Function {
  new (...args: any[]): T;
}

export class typeFactory<T> {
  getInstance(t: Type<T>): T {
    let obj = new t();
    return obj;
  }
}

export class SomeType {
  name: string;
  city: string;
  toString(): string {
    return `${this.name} aus ${this.city}`;
  }
}

export class OtherType {
  location: string;
}

var factory = new typeFactory<SomeType>();

var instance = factory.getInstance(SomeType);
instance.name = "Joerg";
instance.city = "Berlin";

console.log(`${instance}`);
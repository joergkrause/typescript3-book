const s = Symbol('h');

class HasH {
  [s]: string;
}

let h = new HasH();

h[s] = 'some string';
console.log() h[Symbol('h')]

let token = Symbol('Foo')

Symbol('Foo') !== Symbol('Foo')



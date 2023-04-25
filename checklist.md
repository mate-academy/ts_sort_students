1. [CODE STYLE] - If you have predetermined amount of options it is better to use ```switch/case``` structure instead
of multiple ```if/else``` blocks
2. [CODE STYLE] - Enum constant names usually start with capital letter. Values can have any case that's necessary.

BAD EXAMPLE:
```
export enum Directions {
  up = 'UP',
  down = 'DOWN',
  left = 'LEFT',
  right = 'RIGHT',
}
```

GOOD EXAMPLE:
```
export enum Directions {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
```

3. [CODE STYLE] - DRY. Combine logic for sorting by fields with same data types.
4. [CODE KNOWLEDGE] - Method `sort` mutates the array, so you don't need to reassign the result of the sorting.

BAD EXAMPLE:
```
let copiedStudents = [...students];

copiedStudents = copiedStudents.sort();
```


GOOD EXAMPLE:
```
const copiedStudents = [...students];

copiedStudents.sort();
```

5. [CODE KNOWLEDGE] - When you declare a constructor parameter with an access modifier TypeScript implicitly creates a property on the class with the same name as the parameter and assigns the parameter value to that property. You don't need to do it manually.

BAD EXAMPLE: 
```
constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
}
```

GOOD EXAMPLE: 
```
constructor(a: number, b: number, c: number) {

}
```



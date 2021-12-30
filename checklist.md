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

# Sort students
Create a `sortStudents` function that takes 3 parameters and return a new array
with students sorted according to the given params. The original array must not
change.

The parameters are:
- `students` an initial array of students
- `sortBy` a type of sort (see `SortType` enum)
- `order` a sort order that can be `asc` or `desc`
Создайте функцию sortStudents, которая принимает 3 параметра и возвращает новый массив
со студентами, отсортированными в соответствии с заданными параметрами. Исходный массив не должен
меняться.

Параметры:
- `students` начальный массив учеников
- `sortBy` тип сортировки (см. перечисление `SortType`)
- `order` порядок сортировки, который может быть `asc` или `desc`

You also need to add correct types:
- Create `Student` interface matching the next data:
необходимо добавить правильные типы:
- Создать интерфейс `Студент`, соответствующий следующим данным:
    ```
    {
      name: 'Jessica',
      surname: 'Buxton',
      age: 26,
      married: true,
      grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
    }
    ```
- Create a `SortType` enum, having the next values:
    ```
    Name
    Surname
    Age
    Married
    AverageGrade
    ```
    Hint: `AverageGrade` is sorting by an average value in `grades` array.
- Create `SortOrder` type with only 2 values `'asc'` and `'desc'` 
    Hint: If values are the same the students should go in the original order 
    (no matter we use `asc` or `desc` order)
Подсказка: `AverageGrade` сортирует по среднему значению в массиве `grades`.
- Создайте тип `SortOrder` только с двумя значениями `'asc'` и `'desc'`
    Подсказка: если значения совпадают, учащиеся должны идти в первоначальном порядке.
    (независимо от того, используем ли мы порядок `asc` или `desc`)
Examples:
```js
// from the youngest to the oldest
const studentsByAge = sortStudents(students, SortType.Age, 'asc');

// Surnames from Z to A
const studentsBySurnameDesc = sortStudents(students, SortType.Surname, 'desc');

// from the lowest Average grade to the highest
const studentsByGrade = sortStudents(students, SortType.AverageGrade, 'asc');
```

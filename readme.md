# Sort students
Create and export a `sortStudents` function that takes 3 parameters and return a
new array with students sorted according to the given params. Original array
should not be changed.

The parameters are:
- an initial array of students
- a string representing a type of sort
- a sort order that can be `asc` or `desc`

You also need to add correct types:
- Create `Student` interface matching the next data:
    ```
    {
      name: 'Jessica',
      surname: 'Buxton',
      age: 26,
      married: true,
      grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
    }
    ```
- Create and export a `SortType` enum, having the next values:
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

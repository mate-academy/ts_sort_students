export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
  index: number,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Array<Student>,
  sortBy: SortType, order: SortOrder) : Array<Student> {
  const newArr = [...students];

  for (let i = 0; i < newArr.length; i += 1) {
    newArr[i] = { ...newArr[i] };
  }

  switch (true) {
    // sort by Name
    case (sortBy === 'name' && order === 'asc'):
      return newArr.sort((a, b) => a.name.localeCompare(b.name));
    case (sortBy === 'name' && order === 'desc'):
      return newArr.sort((a, b) => b.name.localeCompare(a.name));

    // sort by Surname
    case (sortBy === 'surname' && order === 'asc'):
      return newArr.sort((a, b) => a.surname.localeCompare(b.surname));
    case (sortBy === 'surname' && order === 'desc'):
      return newArr.sort((a, b) => b.surname.localeCompare(a.surname));

      // sort by Age
    case (sortBy === 'age' && order === 'asc'):
      return newArr.sort((a, b) => a.age - b.age);

    case (sortBy === 'age' && order === 'desc'):
      return newArr.sort((a, b) => b.age - a.age);

    // sort by Married
    case (sortBy === 'married' && order === 'asc'):
      return newArr.sort((a, b) => +!!a.married - +!!b.married);

    case (sortBy === 'married' && order === 'desc'):
      return newArr.sort((a, b) => +!!b.married - +!!a.married);

    // sort by AverageGrade
    case (sortBy === 'grades' && order === 'asc'):
      return newArr.sort((a, b) => (a.grades.reduce((c, d) => c + d, 0)
      / a.grades.length) - ((b.grades.reduce((c, d) => c + d, 0))
      / b.grades.length));

    case (sortBy === 'grades' && order === 'desc'):
      return newArr.sort((a, b) => (b.grades.reduce((c, d) => c + d, 0)
      / b.grades.length) - ((a.grades.reduce((c, d) => c + d, 0))
      / a.grades.length));

    default:
      return newArr;
  }
}

// describe Student type
// create and export SortType enum
// create SortOrder type

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade= 'grades'
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  let newArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newArray = (order === 'asc')
        ? newArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : newArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      break;
    case SortType.Age:
      newArray = (order === 'asc')
        ? newArray.sort((a, b) => a[sortBy] - b[sortBy])
        : newArray.sort((a, b) => b[sortBy] - a[sortBy]);
      break;
    case SortType.Married:
      newArray = (order === 'asc')
        ? newArray.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : newArray.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
      break;
    case SortType.AverageGrade:
      newArray = (order === 'asc')
        ? newArray.sort((a, b) => a[sortBy]
          .reduce((acc, num) => acc + num) / a[sortBy].length - b[sortBy]
          .reduce((acc, num) => acc + num) / b[sortBy].length)
        : newArray.sort((a, b) => b[sortBy]
          .reduce((acc, num) => acc + num) / b[sortBy].length - a[sortBy]
          .reduce((acc, num) => acc + num) / a[sortBy].length);
      break;
    default:
      break;
  }

  return newArray;
}


export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const newArray = [...students];

  switch (sortBy) {
    case SortType.Name:
      newArray.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case SortType.Surname:
      newArray.sort((a, b) => a.surname.localeCompare(b.surname));
      break;

    case SortType.Age:
      if (order === 'asc') {
        newArray.sort((a, b) => a.age - b.age);
      } else {
        newArray.sort((a, b) => b.age - a.age);
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        newArray.sort((a, b) => Number(a.married) - Number(b.married));
      } else {
        newArray.sort((a, b) => Number(b.married) - Number(a.married));
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        newArray.sort((a, b) => {
          const averegePrev = a.grades.reduce((sum, x) => sum + x, 0)
            / a.grades.length;
          const averegeNext = b.grades.reduce((sum, x) => sum + x, 0)
            / b.grades.length;

          return averegePrev - averegeNext;
        });
      } else {
        newArray.sort((a, b) => {
          const averegePrev = a.grades.reduce((sum, x) => sum + x, 0)
            / a.grades.length;
          const averegeNext = b.grades.reduce((sum, x) => sum + x, 0)
            / b.grades.length;

          return averegeNext - averegePrev;
        });
      }
      break;
    default:
  }

  // if (order === 'desc') {
  //   newArray.reverse();
  // }

  // eslint-disable-next-line no-console
  console.log(newArray);

  return newArray;
}

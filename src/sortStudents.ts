
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

const callback = (sum: number, value: number): number => sum + value;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let result: Student[] = [...students];
  const isMarried: Student[] = result
    .filter((person) => person.married === true);
  const isNotMarried: Student[] = result
    .filter((person) => person.married === false);

  switch (sortBy) {
    case SortType.Name:
      if (order === 'desc') {
        result = result.sort((elem1, elem2) => elem2.name
          .localeCompare(elem1.name));
      } else {
        result = result.sort((elem1, elem2) => elem1.name
          .localeCompare(elem2.name));
      }
      break;

    case SortType.Surname:
      result = result.sort((elem1, elem2) => elem1.surname
        .localeCompare(elem2.surname));
      break;

    case SortType.Age:
      if (order === 'desc') {
        result = result.sort((elem1, elem2) => elem2.age - elem1.age);
      } else {
        result = result.sort((elem1, elem2) => elem1.age - elem2.age);
      }
      break;

    case SortType.Married:
      if (order === 'desc') {
        result = [...isMarried, ...isNotMarried];
      } else {
        result = [...isNotMarried, ...isMarried];
      }
      break;

    case SortType.AverageGrade:
      if (order === 'desc') {
        result = result
          .sort((a, b) => b.grades
            .reduce(callback) / b.grades.length
            - a.grades
              .reduce(callback) / a.grades.length);
      } else {
        result = result
          .sort((a, b) => a.grades
            .reduce(callback) / a.grades.length
            - b.grades
              .reduce(callback) / b.grades.length);
      }
      break;

    default:
      break;
  }

  return result;
}

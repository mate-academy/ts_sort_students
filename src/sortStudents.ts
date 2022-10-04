export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function sortStrings(
  first: string,
  second: string,
  order: string,
): number {
  if (order === 'asc') {
    return first.localeCompare(second);
  }

  return second.localeCompare(first);
}

function sortNumbers(
  first: number | boolean,
  second: number | boolean,
  order: string,
): number {
  if (order === 'asc') {
    return +first - +second;
  }

  return +second - +first;
}

function getAverage(grades: number[]): number {
  return grades
    .reduce((acc: number, current: number) => acc + current) / (grades.length);
}

export
function sortStudents(students: Student[], sortBy: SortType, order: SortOrder)
  : Student[] {
  const sortedStudents: Student[] = students
    .map((person: Student) => ({ ...person }));

  sortedStudents.sort((first: Student, second: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sortStrings(first[sortBy], second[sortBy], order);

      case SortType.Age:
      case SortType.Married:
        return sortNumbers(first[sortBy], second[sortBy], order);

      case SortType.AverageGrade:
        return sortNumbers(getAverage(first.grades),
          getAverage(second.grades), order);

      default:
        return 1;
    }
  });

  return sortedStudents;
}

// switch (sortBy) {
//   case SortType.Name:
//   case SortType.Surname:
//     return sortedStudents.sort((first: Student, second: Student) => {
//       return sortStrings(first[sortBy], second[sortBy], order);
//     });

//   case SortType.Age:
//   case SortType.Married:
//     return sortedStudents.sort((first: Student, second: Student) => {
//       return sortNumbers(first[sortBy], second[sortBy], order);
//     });

//   case SortType.AverageGrade:
//     return sortedStudents.sort((first: Student, second: Student) => {
//       return sortNumbers(getAverage(first.grades),
//         getAverage(second.grades), order);
//     });

//   default:
//     return students;
// }

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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(studentAverage: number[]): number {
  return studentAverage.reduce((prevResult, currentGrade) => {
    return (prevResult + currentGrade);
  }, 0) / studentAverage.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        studentsCopy.sort(
          (stud1, stud2) => stud1.name.localeCompare(stud2.name),
        );
      } else {
        studentsCopy.sort(
          (stud1, stud2) => stud2.name.localeCompare(stud1.name),
        );
      }

      break;

    case SortType.Surname:
      if (order === 'asc') {
        studentsCopy.sort(
          (stud1, stud2) => stud1.surname.localeCompare(stud2.surname),
        );
      } else {
        studentsCopy.sort(
          (stud1, stud2) => stud2.surname.localeCompare(stud1.surname),
        );
      }

      break;

    case SortType.Age:
      if (order === 'asc') {
        studentsCopy.sort((stud1, stud2) => +stud1.age - (+stud2.age));
      } else {
        studentsCopy.sort((stud1, stud2) => +stud2.age - (+stud1.age));
      }

      break;

    case SortType.Married:
      if (order === 'asc') {
        studentsCopy.sort((stud1, stud2) => +stud1.married - (+stud2.married));
      } else {
        studentsCopy.sort((stud1, stud2) => +stud2.married - (+stud1.married));
      }

      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        studentsCopy.sort((stud1, stud2) => (
          getAverage(stud1.grades) - getAverage(stud2.grades)));
      } else {
        studentsCopy.sort((stud1, stud2) => (
          getAverage(stud2.grades) - getAverage(stud1.grades)));
      }

      break;

    default:

      break;
  }

  return studentsCopy;
}

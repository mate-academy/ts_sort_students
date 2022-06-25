
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number []
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function getAverage(studentAverages: number[]): number {
  return studentAverages.reduce((prevResult, currentGrade) => {
    return (prevResult + currentGrade);
  }, 0) / studentAverages.length;
}

export function sortStudents(
  students: Student [],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const sortOrder: 1 | -1 = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
      if (order === 'desc') {
        studentsCopy.sort((stud1, stud2) => stud2.name
          .localeCompare(stud1.name));
      }

      studentsCopy.sort((stud1, stud2) => stud1.name
        .localeCompare(stud2.name));

      break;

    case SortType.Surname:
      if (order === 'desc') {
        studentsCopy.sort((stud1, stud2) => stud2.surname
          .localeCompare(stud1.surname));
      }

      studentsCopy.sort((stud1, stud2) => stud1.surname
        .localeCompare(stud2.surname));

      break;

    case SortType.Married:
      studentsCopy.sort((stud1, stud2) => (+stud1.married
        - +stud2.married) * sortOrder);

      break;

    case SortType.Age:
      studentsCopy.sort((stud1, stud2) => (+stud1.age
    - +stud2.age) * sortOrder);

      break;

    case SortType.AverageGrade:

      studentsCopy.sort((
        stud1, stud2,
      ) => (getAverage(stud1.grades)
      - getAverage(stud2.grades)) * sortOrder);

      break;

    default:

      break;
  }

  return studentsCopy;
}

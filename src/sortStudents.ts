// import { type } from "os";

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: string,
): Student[] {
  const copyStudents: Student[] = [...students];

  type Sum = (sum: number, mark: number) => number;

  const sumMarks: Sum = (sum, mark) => sum + mark;

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        copyStudents.sort(
          ({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB),
        );
      } else {
        copyStudents.sort(
          ({ name: nameA }, { name: nameB }) => nameB.localeCompare(nameA),
        );
      }
      break;

    case SortType.Surname:
      if (order === 'asc') {
        copyStudents.sort((
          { surname: surnameA },
          { surname: surnameB },
        ) => surnameA.localeCompare(surnameB));
      } else {
        copyStudents.sort((
          { surname: surnameA },
          { surname: surnameB },
        ) => surnameB.localeCompare(surnameA));
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        copyStudents.sort(({ age: ageA }, { age: ageB }) => ageA - ageB);
      } else {
        copyStudents.sort(({ age: ageA }, { age: ageB }) => ageB - ageA);
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        copyStudents.sort((
          { married: marriedA },
          { married: marriedB },
        ) => Number(marriedA) - Number(marriedB));
      } else {
        copyStudents.sort((
          { married: marriedA },
          { married: marriedB },
        ) => Number(marriedB) - Number(marriedA));
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        copyStudents.sort((
          { grades: gradesA },
          { grades: gradesB },
        ) => (
          (gradesA.reduce(sumMarks, 0) / gradesA.length)
          - (gradesB.reduce(sumMarks, 0) / gradesB.length)
        ));
      } else {
        copyStudents.sort((
          { grades: gradesA },
          { grades: gradesB },
        ) => (
          (gradesB.reduce(sumMarks, 0) / gradesB.length)
          - (gradesA.reduce(sumMarks, 0) / gradesA.length)
        ));
      }
      break;

    default:
      throw new Error(`Invalid value: ${sortBy}`);
  }

  return copyStudents;
}

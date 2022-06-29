
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
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        studentsCopy.sort(
          (std1, std2) => std1[sortBy].localeCompare(std2[sortBy]),
        );
      } else {
        studentsCopy.sort(
          (std1, std2) => std2[sortBy].localeCompare(std1[sortBy]),
        );
      }

      break;

    case SortType.Age:
      if (order === 'asc') {
        studentsCopy.sort((std1, std2) => std1.age - std2.age);
      } else {
        studentsCopy.sort((std1, std2) => std2.age - std1.age);
      }

      break;

    case SortType.Married:
      if (order === 'asc') {
        studentsCopy.sort(
          (std1, std2) => Number(std1.married) - Number(std2.married),
        );
      } else {
        studentsCopy.sort(
          (std1, std2) => Number(std2.married) - Number(std1.married),
        );
      }

      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        studentsCopy.sort((std1, std2) => getAverageGrade(std1.grades)
          - getAverageGrade(std2.grades));
      } else {
        studentsCopy.sort((std1, std2) => getAverageGrade(std2.grades)
        - getAverageGrade(std1.grades));
      }

      break;

    default:

      break;
  }

  return studentsCopy;
}

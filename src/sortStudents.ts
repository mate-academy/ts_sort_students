// import { SortOrder } from './sortStudents';

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

function getAverageGrade(grades: number[]): number {
  return (grades.reduce((result, grade) => result + grade, 0) / grades.length);
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((previos: Student, current: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return previos[sortBy].localeCompare(current[sortBy]);
        }

        return current[sortBy].localeCompare(previos[sortBy]);

      case SortType.Age:
        if (order === 'asc') {
          return previos[sortBy] - current[sortBy];
        }

        return current[sortBy] - previos[sortBy];

      case SortType.Married:
        if (previos[sortBy] && !current[sortBy]) {
          return order === 'asc' ? 1 : -1;
        }

        if (!previos[sortBy] && current[sortBy]) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;

      case SortType.AverageGrade:
        if (order === 'asc') {
          return getAverageGrade(previos.grades)
          - getAverageGrade(current.grades);
        }

        return getAverageGrade(current.grades)
        - getAverageGrade(previos.grades);

      default:
        return 0;
    }
  });

  return sortedStudents;
}

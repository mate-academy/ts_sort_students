
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function findAverageGrade(grades: number[]): number {
  return grades.reduce((sum, mark) => sum + mark, 0) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copiedStudents.sort((currentStudent, nextStudent) => {
        return order === 'asc'
          ? currentStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(currentStudent[sortBy]);
      });

      break;

    case SortType.Age:
    case SortType.Married:
      copiedStudents.sort((currentStudent, nextStudent) => {
        return order === 'asc'
          ? +currentStudent[sortBy] - (+nextStudent[sortBy])
          : +nextStudent[sortBy] - (+currentStudent[sortBy]);
      });

      break;

    case SortType.AverageGrade:
      copiedStudents.sort((currentStudent, nextStudent) => {
        return order === 'asc'
          ? findAverageGrade(currentStudent[sortBy])
            - findAverageGrade(nextStudent[sortBy])
          : findAverageGrade(nextStudent[sortBy])
            - findAverageGrade(currentStudent[sortBy]);
      });

      break;

    default:
      throw new Error('Oops... you tried to sort by non-existent type');
  }

  return copiedStudents;
}

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

function getAvarageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => (
    sum + grade / grades.length
  ), 0);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];
  const sortDirection = order === 'asc' ? 1 : -1;

  copyStudents.sort((currentStudent: Student, nextStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return currentStudent[sortBy].localeCompare(nextStudent[sortBy])
          * sortDirection;

      case SortType.Age:
      case SortType.Married:
        return (+currentStudent[sortBy] - +nextStudent[sortBy])
          * sortDirection;

      default:
        return (getAvarageGrade(currentStudent.grades)
          - getAvarageGrade(nextStudent.grades))
          * sortDirection;
    }
  });

  return copyStudents;
}

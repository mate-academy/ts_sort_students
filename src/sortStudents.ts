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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAvarageGrade(grades: number[]): number {
  return grades.reduce((acc, grade) => acc + grade) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((student1: Student, student2: Student): number => {
    let firstToCompare: Student = student1;
    let secondToCompare: Student = student2;

    if (order === 'desc') {
      [firstToCompare, secondToCompare] = [secondToCompare, firstToCompare];
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return firstToCompare[sortBy].localeCompare(secondToCompare[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return +firstToCompare[sortBy] - +secondToCompare[sortBy];

      case SortType.AverageGrade:
        return (
          getAvarageGrade(firstToCompare.grades)
          - getAvarageGrade(secondToCompare.grades)
        );

      default:
        return 0;
    }
  });
}

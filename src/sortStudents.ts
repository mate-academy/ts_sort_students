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

function getAvarageGrade(student: Student): number {
  return student.grades.reduce((
    prevSum: number,
    currentGrade:
    number,
  ) => prevSum + currentGrade) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +firstStudent[sortBy] - +secondStudent[sortBy]
          : +secondStudent[sortBy] - +firstStudent[sortBy];

      case SortType.AverageGrade: {
        return order === 'asc'
          ? getAvarageGrade(firstStudent) - getAvarageGrade(secondStudent)
          : getAvarageGrade(secondStudent) - getAvarageGrade(firstStudent);
      }
      default:
        return 0;
    }
  };)
}

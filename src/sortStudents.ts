
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((firstStudent, secondStudent) => (
        order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((firstStudent, secondStudent) => (
        order === 'asc'
          ? firstStudent[sortBy] - secondStudent[sortBy]
          : secondStudent[sortBy] - firstStudent[sortBy]
      ));

    case SortType.AverageGrade:
      return sortedStudents.sort((firstStudent, secondStudent) => (
        order === 'asc'
          ? getAverageGrade(firstStudent.grades)
            - getAverageGrade(secondStudent.grades)
          : getAverageGrade(secondStudent.grades)
            - getAverageGrade(firstStudent.grades)
      ));

    default:
      break;
  }

  return sortedStudents;
}

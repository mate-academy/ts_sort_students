
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  function calculateAvarageGrade(numbers: number[]): number {
    return numbers.reduce((sum, grade) => sum + grade, 0) / numbers.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
      return sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case SortType.Married:
      return sortedStudents.sort((a, b) => (
        order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy])
      ));

    case SortType.AverageGrade:
      return sortedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? calculateAvarageGrade(a[sortBy]) - calculateAvarageGrade(b[sortBy])
          : calculateAvarageGrade(b[sortBy]) - calculateAvarageGrade(a[sortBy]);
      });

    default:
      return sortedStudents;
  }
}

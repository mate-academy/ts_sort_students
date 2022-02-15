
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

function getAveregeGrade(student: Student): number {
  return student.grades
    .reduce((acc, curr) => acc + curr) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((studentOne, studentTwo) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentOne[sortBy].localeCompare(studentTwo[sortBy])
          : studentTwo[sortBy].localeCompare(studentOne[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +studentOne[sortBy] - +studentTwo[sortBy]
          : +studentTwo[sortBy] - +studentOne[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAveregeGrade(studentOne)
            - getAveregeGrade(studentTwo)
          : getAveregeGrade(studentTwo)
            - getAveregeGrade(studentOne);
      default:
        return new Error('Handled exception');
    }
  });
}

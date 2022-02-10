
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function studentAverageGrade(student: Student): number {
    return student.grades
      .reduce((a, b) => a + b) / student.grades.length;
  }

  return [...students].sort((studentFirst, studentSecond) => {
    let first: Student = studentFirst;
    let second: Student = studentSecond;

    if (order === 'desc') {
      [first, second] = [second, first];
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return first[sortBy].localeCompare(second[sortBy]);

      case SortType.Married:
      case SortType.Age:
        return Number(first[sortBy]) - Number(second[sortBy]);
      case SortType.AverageGrade:
        return studentAverageGrade(first) - studentAverageGrade(second);

      default:
        throw new Error('Unexpected value');
    }
  });
}

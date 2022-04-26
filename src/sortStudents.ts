
export interface Student {
  name: string;
  surname: string;
  age: number,
  married: boolean,
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function studentAverageGrade(array: Student): number {
  return array.grades.reduce((a, b) => a + b, 0) / array.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsClone = [...students];

  return studentsClone.sort((a, b) => {
    let student1: Student = a;
    let student2: Student = b;

    if (order === 'desc') {
      [student1, student2] = [student2, student1];
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return student1[sortBy].localeCompare(student2[sortBy]);

      case SortType.Married:
      case SortType.Age:
        return Number(student1[sortBy]) - Number(student2[sortBy]);
      case SortType.AverageGrade:
        return studentAverageGrade(student1) - studentAverageGrade(student2);

      default:
        throw new Error('Error: Invalid value');
    }
  });
}


export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
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
  const newStudent = [...students];

  newStudent.sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      default: throw new Error('Error');

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +studentA[sortBy] - +studentB[sortBy]
          : +studentB[sortBy] - +studentA[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? studentA.grades.reduce((acc, val) => acc + val, 0)
          / studentA.grades.length
            - studentB.grades.reduce((acc, val) => acc + val, 0)
            / studentB.grades.length
          : studentB.grades.reduce((acc, val) => acc + val, 0)
          / studentB.grades.length
          - studentA.grades.reduce((acc, val) => acc + val, 0)
          / studentA.grades.length;
    }
  });

  return newStudent;
}

export function average(grades: number[]): number {
  return grades.reduce((prev, curr) => prev + curr, 0) / grades.length;
}

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
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copy.sort((student, student2) => student[sortBy]
          .localeCompare(student2[sortBy]))

        : copy.sort((student, student2) => student2[sortBy]
          .localeCompare(student[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copy
          .sort((student, student2) => +student[sortBy] - +student2[sortBy])

        : copy
          .sort((student, student2) => +student2[sortBy] - +student[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((student, student2) => average(student.grades)
          - average(student2.grades))

        : copy.sort((student, student2) => average(student2.grades)
          - average(student.grades));

    default: return students;
  }
}

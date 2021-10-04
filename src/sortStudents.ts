export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[],
  averageGrades: number,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrades',
}

export type SortOrder = ('asc' | 'desc');

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const arrayCopy = students.map((student: Student) => {
    const averageGrades = student.grades
      .reduce((a: number, b: number): number => a + b) / student.grades.length;

    return {
      ...student,
      averageGrades,
    };
  });

  arrayCopy.sort((a: Student, b: Student): number => {
    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      return (order === 'asc')
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy]);
    }

    if (
      sortBy === SortType.Age
      || sortBy === SortType.AverageGrade
      || sortBy === SortType.Married
    ) {
      return (order === 'asc')
        ? Number(a[sortBy]) - Number(b[sortBy])
        : Number(b[sortBy]) - Number(a[sortBy]);
    }

    return 0;
  });

  return arrayCopy;
}

interface Student {
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

type SortOrder = 'asc' | 'desc';

const findAverage = (arr: number[]): number => {
  return arr.reduce((sum: number, n: number) => sum + n, 0) / arr.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = students
    .map((student) => {
      const average = student.grades
        .reduce((sum, grade) => sum + grade, 0) / student.grades.length;

      return {
        ...student,
        average,
      };
    });

  studentsCopy.sort((a:Student, b:Student): number => {
    if (sortBy === SortType.Age || sortBy === SortType.Married) {
      return order === 'asc'
        ? Number(a[sortBy]) - Number(b[sortBy])
        : Number(b[sortBy]) - Number(a[sortBy]);
    }

    if (sortBy === SortType.AverageGrade) {
      const aAverage = findAverage(a[sortBy]);
      const bAverage = findAverage(b[sortBy]);

      return order === 'asc'
        ? aAverage - bAverage
        : bAverage - aAverage;
    }

    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      return order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy]);
    }

    return 0;
  });

  return studentsCopy;
}

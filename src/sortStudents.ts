export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

type SortOrder = 'asc' | 'desc';

function getAverageGrades(grades: number[]):number {
  return grades.reduce((acc: number, value: number) => (
    acc + value)) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result: Student[] = [...students];

  return result.sort((a: Student, b: Student) => {
    if (sortBy === SortType.AverageGrade) {
      if (getAverageGrades(a[sortBy]) > getAverageGrades(b[sortBy])) {
        return order === 'desc'
          ? -1
          : 1;
      }

      if (getAverageGrades(a[sortBy]) < getAverageGrades(b[sortBy])) {
        return order === 'desc'
          ? 1
          : -1;
      }

      return 0;
    }

    if (a[sortBy] > b[sortBy]) {
      return order === 'desc'
        ? -1
        : 1;
    }

    if (a[sortBy] < b[sortBy]) {
      return order === 'desc'
        ? 1
        : -1;
    }

    return 0;
  });
}

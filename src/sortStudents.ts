
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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

function getAverage(student: Student): number {
  return student.grades.reduce((prev, current) => prev + current, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const allStudent = [...students];

  if (SortType.Name === sortBy || SortType.Surname === sortBy) {
    allStudent.sort((prev: Student, curr: Student) => {
      return order === 'asc'
        ? prev[sortBy].localeCompare(curr[sortBy])
        : curr[sortBy].localeCompare(prev[sortBy]);
    });
  }

  if (SortType.Age === sortBy) {
    allStudent.sort((prev: Student, curr: Student) => {
      return order === 'asc'
        ? prev.age - curr.age
        : curr.age - prev.age;
    });
  }

  if (SortType.Married === sortBy) {
    allStudent.sort((prev: Student, curr: Student) => {
      return order === 'asc'
        ? +prev.married - +curr.married
        : +curr.married - +prev.married;
    });
  }

  if (SortType.AverageGrade === sortBy) {
    allStudent.sort((prev: Student, curr: Student): number => {
      return order === 'asc'
        ? getAverage(prev) - getAverage(curr)
        : getAverage(curr) - getAverage(prev);
    });
  }

  return allStudent;
}

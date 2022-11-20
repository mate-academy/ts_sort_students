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

export function averageGradeCalc(student: Student): number {
  return student.grades.reduce((acc, curr) => {
    return acc + curr;
  }, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case ('name'):
    case ('surname'):
      return order === 'desc'
        ? studentsCopy.sort((a: Student, b: Student): number => {
          return b[sortBy].localeCompare(a[sortBy]);
        })
        : studentsCopy.sort((a: Student, b: Student): number => {
          return a[sortBy].localeCompare(b[sortBy]);
        });

    case 'age':
      return order === 'desc'
        ? studentsCopy.sort((a, b) => {
          return b[sortBy] - a[sortBy];
        })
        : studentsCopy.sort((a, b) => {
          return a[sortBy] - b[sortBy];
        });

    case ('married'):
      return studentsCopy.sort((a: Student): number => {
        return a[sortBy] ? -1 : 1;
      });

    default:
      return order === 'desc'
        ? studentsCopy.sort((a, b) => {
          return averageGradeCalc(b) - averageGradeCalc(a);
        })
        : studentsCopy.sort((a, b) => {
          return averageGradeCalc(a) - averageGradeCalc(b);
        });
  }
}


export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
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
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy = [...students];

  copy.sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case (SortType.Name):
      case (SortType.Surname):
        if (order === 'asc') {
          return firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
        }

        return secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case (SortType.Age):
        if (order === 'asc') {
          return firstStudent.age - secondStudent.age;
        }

        return secondStudent.age - firstStudent.age;

      case (SortType.Married):
        if (order === 'asc') {
          return +firstStudent.married - +secondStudent.married;
        }

        return +secondStudent.married - +firstStudent.married;

      default:
        if (order === 'asc') {
          return (firstStudent.grades.reduce(
            (a, b) => a + b, 0,
          ) / firstStudent.grades.length) - (secondStudent.grades.reduce(
            (a, b) => a + b, 0,
          ) / secondStudent.grades.length);
        }

        return (secondStudent.grades.reduce(
          (a, b) => a + b, 0,
        ) / secondStudent.grades.length) - (firstStudent.grades.reduce(
          (a, b) => a + b, 0,
        ) / firstStudent.grades.length);
    }
  });

  return copy;
}

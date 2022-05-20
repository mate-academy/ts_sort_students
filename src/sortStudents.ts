
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

  if (order === 'asc') {
    switch (sortBy) {
      case (SortType.Name):
      case (SortType.Surname):
        copy.sort((firstStudent: Student, secondStudent: Student) => {
          return firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
        });
        break;
      case (SortType.Age):
        copy.sort((firstStudent, secondStudent) => {
          return firstStudent.age - secondStudent.age;
        });
        break;
      case (SortType.Married):
        copy.sort((firstStudent, secondStudent) => +firstStudent.married
         - +secondStudent.married);
        break;
      default:
        copy.sort(
          (firstStudent, secondStudent) => (
            firstStudent.grades.reduce(
              (a, b) => a + b, 0,
            ) / firstStudent.grades.length)
               - (secondStudent.grades.reduce(
                 (a, b) => a + b, 0,
               ) / secondStudent.grades.length),
        );
    }
  } else {
    switch (sortBy) {
      case (SortType.Name):
      case (SortType.Surname):
        copy.sort((secondStudent, firstStudent) => {
          return firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
        });
        break;
      case (SortType.Age):
        copy.sort((secondStudent, firstStudent) => {
          return firstStudent.age - secondStudent.age;
        });
        break;
      case (SortType.Married):
        copy.sort((secondStudent, firstStudent) => +firstStudent.married
         - +secondStudent.married);
        break;
      default:
        copy.sort(
          (secondStudent, firstStudent) => (
            firstStudent.grades.reduce(
              (a, b) => a + b, 0,
            ) / firstStudent.grades.length)
               - (secondStudent.grades.reduce(
                 (a, b) => a + b, 0,
               ) / secondStudent.grades.length),
        );
    }
  }

  return copy;
}

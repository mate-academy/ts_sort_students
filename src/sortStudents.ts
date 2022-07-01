
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGr(firstStudent: Student, secondStudent: Student): number {
  return secondStudent.grades.reduce((grade1: number, grade2: number) => grade1
  + grade2, 0) / secondStudent.grades.length
  - firstStudent.grades.reduce((grade1: number, grade2: number) => grade1
  + grade2, 0) / firstStudent.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  copyStudents.sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Age:
        if (order === 'desc') {
          return secondStudent.age - firstStudent.age;
        }

        return firstStudent.age - secondStudent.age;

      case SortType.Married:
        if (order === 'desc') {
          return +secondStudent.married - +firstStudent.married;
        }

        return +firstStudent.married - +secondStudent.married;

      case SortType.Name:
      case SortType.Surname:
        if (order === 'desc') {
          return secondStudent[sortBy].localeCompare(firstStudent[sortBy]);
        }

        return firstStudent[sortBy].localeCompare(secondStudent[sortBy]);

      case SortType.AverageGrade:
        if (order === 'desc') {
          return averageGr(firstStudent, secondStudent);
        }

        return averageGr(secondStudent, firstStudent);

      default:
        return 0;
    }
  });

  return copyStudents;
}

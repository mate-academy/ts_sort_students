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
// const avarage =

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((s1: Student, s2: Student) => {
    const average1 = s1.grades.reduce((a, b) => a + b) / s1.grades.length;
    const average2 = s2.grades.reduce((a, b) => a + b) / s2.grades.length;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return s1[sortBy].localeCompare(s2[sortBy]);
      case SortType.Age:
        if (order === 'asc') {
          return s1.age - s2.age;
        }

        return s2.age - s1.age;
      case SortType.Married:
        if (order === 'asc') {
          return +s1.married - +s2.married;
        }

        return +s2.married - +s1.married;
      case SortType.AverageGrade:

        if (order === 'asc') {
          return average1 - average2;
        }

        return average2 - average1;
      default:
        return 0;
    }
  });

  return sortedStudents;
}

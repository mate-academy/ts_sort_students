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
  const listOfStudents = [...students];

  const averageOfGrade = (student: Student): number => student.grades
    .reduce((sum, grade) => sum + grade) / student.grades.length;
  const sortOrReverse = (a: number, b: number): number => {
    if (order === 'desc') {
      return a - b;
    }

    return b - a;
  };

  listOfStudents.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.AverageGrade:
        return sortOrReverse(averageOfGrade(b), averageOfGrade(a));

      case SortType.Age:
        return sortOrReverse(b.age, a.age);

      case SortType.Surname:
      case SortType.Name:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Married:
        return sortOrReverse(+b.married, +a.married);

      default:
        return 0;
    }
  });

  return listOfStudents;
}

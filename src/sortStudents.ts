export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,

}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedStudents: Student[] = JSON.parse(JSON.stringify(students));

  let avgGradeA: number;
  let avgGradeB: number;

  function married(person: Student): number {
    let res;

    if (person.married) {
      res = 1;
    } else {
      res = -1;
    }

    return res;
  }

  function sorter(a: Student, b: Student): number {
    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);

      case SortType.Surname:
        return a.surname.localeCompare(b.surname);

      case SortType.Age:
        return a.age - b.age;

      case SortType.Married:

        return a.married === b.married ? 0 : married(a);

      case SortType.AverageGrade:
        avgGradeA = a.grades
          .reduce((sum, grade) => sum + grade, 0) / a.grades.length;

        avgGradeB = b.grades
          .reduce((sum, grade) => sum + grade, 0) / b.grades.length;

        return avgGradeA - avgGradeB;

      default:
        throw new Error('Invalid SortType');
    }
  }

  sortedStudents.sort((a: Student, b: Student) => {
    const sortOrderFactor = order === 'asc' ? 1 : -1;

    return sortOrderFactor * sorter(a, b);
  });

  return sortedStudents;
}

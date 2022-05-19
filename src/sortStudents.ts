
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'dsc';

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const arr: Student[] = [...students];

  function getAverageGrades(person: Student): number {
     return person.grades.reduce((total, current) => total + current) / person.grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order = 'asc') {
        return arr.sort((a, b) => a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase()));
      };

      return arr.sort((a, b) => b[sortBy].toLowerCase().localeCompare(a[sortBy].toLowerCase()));

    case SortType.Age:
      if (order === 'asc') {
        return arr.sort((a, b) => a.age - b.age);
      };

      return arr.sort((a, b) => b.age - a.age);

    case SortType.Married:
      if (order === 'asc') {
        return arr.sort((a, b) => +a.married - +b.married);
      };

      return arr.sort((a, b) => +b.married - +a.married);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return arr.sort((a, b) => {
          const el1 = getAverageGrades(a);
          const el2 = getAverageGrades(b);

          return el1 - el2;
        });
      };

      return arr.sort((a, b) => {
        const el1 = getAverageGrades(a);
        const el2 = getAverageGrades(b);

        return el2 - el1;
      });

    default:
      return students;
  }
}

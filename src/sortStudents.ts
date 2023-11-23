
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

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const sorted = [...students];

  const compare = (a: Student, b: Student): number => {
    let aVar: string | number | boolean;
    let bVar: string | number | boolean;

    switch (sortBy) {
      case SortType.Name:
        aVar = a.name;
        bVar = b.name;
        break;
      case SortType.Surname:
        aVar = a.surname;
        bVar = b.surname;
        break;
      case SortType.Age:
        aVar = a.age;
        bVar = b.age;
        break;
      case SortType.Married:
        aVar = a.married;
        bVar = b.married;
        break;
      case SortType.AverageGrade:
        aVar = a.grades
          .reduce((acc, grade) => acc + grade, 0) / a.grades.length;

        bVar = b.grades
          .reduce((acc, grade) => acc + grade, 0) / b.grades.length;
        break;
      default: throw new Error('Wrong sort type');
    }

    if (aVar < bVar) {
      return order === 'asc' ? -1 : 1;
    }

    if (aVar > bVar) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  };

  return sorted.sort(compare);
}

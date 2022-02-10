
export interface Student {
  // describe Student interface
}

export enum SortType {
  // describe SortType enum
}

// create SortOrder type
export type SortOrder;


interface Student {
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
  AverageGrade = 'averageGrade',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrayFromStudents: Student[] = [...students];
  const reducer = (x: number, y: number): number => x + y;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? arrayFromStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : arrayFromStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? arrayFromStudents.sort((a, b) => a.age - b.age)
        : arrayFromStudents.sort((a, b) => b.age - a.age);

    case SortType.Married:
      return order === 'asc'
        ? arrayFromStudents.sort((a, b) => String(a.married)
          .localeCompare(String(b.married)))
        : arrayFromStudents.sort((a, b) => String(b.married)
          .localeCompare(String(a.married)));

    case SortType.AverageGrade:
      return order === 'asc'
        ? arrayFromStudents.sort((a, b) => a.grades.reduce(reducer)
          / a.grades.length - b.grades.reduce(reducer)
          / b.grades.length)
        : arrayFromStudents.sort((a, b) => b.grades.reduce(reducer)
        / b.grades.length - a.grades.reduce(reducer) / a.grades.length);

    default:
      return arrayFromStudents;
  }
}

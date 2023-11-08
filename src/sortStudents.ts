export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
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
  const sortedStudents: Student[] = [...students];

  function getAverage(student: Student): number {
    return (
      student.grades.reduce(
        (sum, grade) => sum + grade, 0,
      ) / student.grades.length
    );
  }

  sortedStudents.sort((a: Student, b: Student): number => {
    const sortOrder: boolean = order === 'asc';

    switch (sortBy) {
      case SortType.Name:
        return sortOrder
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        return sortOrder
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return sortOrder
          ? a.age - b.age
          : b.age - a.age;

      case SortType.Married:
        return sortOrder
          ? (a.married ? -1 : 1) - (b.married ? -1 : 1)
          : (a.married ? -1 : 1) - (b.married ? -1 : 1);

      case SortType.AverageGrade:
        return sortOrder
          ? getAverage(a) - getAverage(b)
          : getAverage(b) - getAverage(a);

      default:
        return 0;
    }
  });

  return sortedStudents;
}

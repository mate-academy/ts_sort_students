
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
  const copyOfStudents: Student[] = [...students];

  function avGrade(grades: number[]): number {
    const totalGrades: number = grades
      .reduce((prev, curr) => (prev + curr));

    return totalGrades / grades.length;
  }

  copyOfStudents.sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      case SortType.Surname:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      case SortType.Age:
        return order === 'desc'
          ? b.age - a.age
          : a.age - b.age;
      case SortType.Married:
        return order === 'desc'
          ? (+b.married) - (+a.married)
          : (+a.married) - (+b.married);
      case SortType.AverageGrade:
        return order === 'desc'
          ? avGrade(b.grades) - avGrade(a.grades)
          : avGrade(a.grades) - avGrade(b.grades);
      default:
        return 0;
    }
  });

  return copyOfStudents;
}

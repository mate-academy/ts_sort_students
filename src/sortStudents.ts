
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

export function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, curr) => sum + curr, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortStudent: Student[] = [...students];
  const isAscending = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      sortStudent.sort((firstStudent, secondStudent) => (isAscending
        ? firstStudent.name.localeCompare(secondStudent.name)
        : secondStudent.name.localeCompare(firstStudent.name)
      ));
      break;

    case SortType.Surname:
      sortStudent.sort((firstStudent, secondStudent) => (isAscending
        ? firstStudent.surname.localeCompare(secondStudent.surname)
        : secondStudent.surname.localeCompare(firstStudent.surname)
      ));
      break;

    case SortType.Age:
      sortStudent.sort((firstStudent, secondStudent) => (isAscending
        ? firstStudent.age - secondStudent.age
        : secondStudent.age - firstStudent.age
      ));
      break;

    case SortType.Married:
      sortStudent.sort((firstStudent, secondStudent) => (isAscending
        ? Number(firstStudent.married) - Number(secondStudent.married)
        : Number(secondStudent.married) - Number(firstStudent.married)
      ));
      break;

    case SortType.AverageGrade:
      sortStudent.sort((firstStudent, secondStudent) => (isAscending
        ? getAverageGrade(firstStudent.grades)
        - getAverageGrade(secondStudent.grades)
        : getAverageGrade(secondStudent.grades)
        - getAverageGrade(firstStudent.grades)
      ));
      break;

    default: break;
  }

  return sortStudent;
}


export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function getAverageGrade({ grades }: Student): number {
  const sum = grades.reduce((all, next) => all + next);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((prevStudent, curStudent) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? prevStudent.name.localeCompare(curStudent.name)
          : curStudent.name.localeCompare(prevStudent.name);

      case SortType.Surname: return order === 'asc'
        ? prevStudent.surname.localeCompare(curStudent.surname)
        : curStudent.surname.localeCompare(prevStudent.surname);

      case SortType.Age: return order === 'asc'
        ? prevStudent.age - curStudent.age
        : curStudent.age - prevStudent.age;

      case SortType.Married: return order === 'asc'
        ? +prevStudent.married - +curStudent.married
        : +curStudent.married - +prevStudent.married;

      case SortType.AverageGrade:
        return order === 'asc'
          ? (getAverageGrade(prevStudent) - getAverageGrade(curStudent))
          : (getAverageGrade(curStudent) - getAverageGrade(prevStudent));
      default:
        return 0;
    }
  });
}

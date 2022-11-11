
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
  AverageGrade = 'avarageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function getAvarageGrade(grades: number[]): number {
  return grades.reduce((a: number, b: number) => a + b, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  return studentsCopy.sort((first: Student, second: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? first[sortBy].localeCompare(second[sortBy])
          : second[sortBy].localeCompare(first[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +first[sortBy] - +second[sortBy]
          : +second[sortBy] - +first[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAvarageGrade(first.grades) - getAvarageGrade(second.grades)
          : getAvarageGrade(second.grades) - getAvarageGrade(first.grades);

      default: throw new Error('Invalid sort type input');
    }
  });
}

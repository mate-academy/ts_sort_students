
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

const getAverage = (grades: number[]): number => {
  return grades
    .reduce((prev: number, curr: number) => prev + curr) / grades.length;
};

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Age:
      copy.sort((st1: Student, st2: Student) => {
        return order === 'asc'
          ? st1.age - st2.age
          : st2.age - st1.age;
      });

      break;

    case SortType.Name:
      copy.sort((st1: Student, st2: Student) => {
        return order === 'asc'
          ? st1.name.localeCompare(st2.name)
          : st2.name.localeCompare(st1.name);
      });

      break;

    case SortType.Surname:
      copy.sort((st1: Student, st2: Student) => {
        return order === 'asc'
          ? st1.surname.localeCompare(st2.surname)
          : st2.surname.localeCompare(st1.surname);
      });

      break;

    case SortType.Married:
      copy.sort((st1: Student, st2: Student) => {
        return order === 'asc'
          ? Number(st1.married) - Number(st2.married)
          : Number(st2.married) - Number(st1.married);
      });

      break;

    case SortType.AverageGrade:
      copy.sort((st1: Student, st2: Student) => {
        return order === 'asc'
          ? getAverage(st1.grades) - getAverage(st2.grades)
          : getAverage(st2.grades) - getAverage(st1.grades);
      });

      break;

    default:
      break;
  }

  return copy;
}

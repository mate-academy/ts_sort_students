
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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades:number[]):number {
  return grades.reduce((sum, mark) => sum + mark, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  let married;
  let notMarried;

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return sortedStudents.sort((st1: Student, st2: Student): number => {
          return st1.name.localeCompare(st2.name);
        });
      }

      return sortedStudents.sort((st1: Student, st2: Student): number => {
        return st2.name.localeCompare(st1.name);
      });

    case SortType.Surname:
      if (order === 'asc') {
        return sortedStudents.sort((st1: Student, st2: Student): number => {
          return st1.surname.localeCompare(st2.surname);
        });
      }

      return sortedStudents.sort((st1: Student, st2: Student): number => {
        return st2.surname.localeCompare(st1.surname);
      });

    case SortType.Age:
      if (order === 'asc') {
        return sortedStudents.sort((st1: Student, st2: Student): number => {
          return st1.age - st2.age;
        });
      }

      return sortedStudents.sort((st1: Student, st2: Student): number => {
        return st2.age - st1.age;
      });

    case SortType.Married:
      married = sortedStudents
        .filter((st: Student): boolean => st.married === true);

      notMarried = sortedStudents
        .filter((st: Student): boolean => st.married === false);

      if (order === 'asc') {
        return [...notMarried, ...married];
      }

      return [...married, ...notMarried];

    case SortType.AverageGrade:
      if (order === 'asc') {
        return sortedStudents.sort((st1: Student, st2: Student): number => {
          return getAverageGrade(st1.grades) - getAverageGrade(st2.grades);
        });
      }

      return sortedStudents.sort((st1: Student, st2: Student): number => {
        return getAverageGrade(st2.grades) - getAverageGrade(st1.grades);
      });

    default:
      throw new Error('Something went wrong...');
  }
}

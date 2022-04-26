
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  function averGrade(arr: number[]): number {
    const grade = arr.reduce((sum: number, a: number):
    number => sum + a, 0) / arr.length;

    return grade;
  }

  const newStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? newStudents.sort((a: Student, b: Student):
        number => a[sortBy].localeCompare(b[sortBy]))
        : newStudents.sort((a: Student, b: Student):
        number => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? newStudents.sort((a: Student, b: Student):
        number => a.age - b.age)
        : newStudents.sort((a: Student, b: Student):
        number => b.age - a.age);

    case SortType.Married: {
      newStudents.sort((a: Student, b: Student): number => {
        if (a.married && !b.married) {
          if (order === 'asc') {
            return 1;
          }

          return -1;
        }

        if (!a.married && b.married) {
          if (order === 'asc') {
            return -1;
          }

          return 1;
        }

        return 0;
      });

      break;
    }

    case SortType.AverageGrade:
      return order === 'asc'
        ? newStudents.sort((a: Student, b: Student):
        number => averGrade(a.grades) - averGrade(b.grades))
        : newStudents.sort((a: Student, b: Student):
        number => averGrade(b.grades) - averGrade(a.grades));

    default:
      throw new Error('No correct data');
  }

  return newStudents;
}

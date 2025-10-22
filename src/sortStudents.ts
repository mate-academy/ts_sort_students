
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  const avg = (grades: number[]):
  number => grades.reduce((s, g) => s + g, 0) / grades.length;

  return studentsCopy.sort((a: Student, b: Student) => {
    let valueA: string | number;
    let valueB: string | number;

    switch (sortBy) {
      case SortType.Name:

      // eslint-disable-next-line no-fallthrough
      case SortType.Surname: {
        const key: 'name' | 'surname'
          = sortBy === SortType.Name ? 'name' : 'surname';

        valueA = a[key].toLowerCase();
        valueB = b[key].toLowerCase();
        break;
      }

      case SortType.Age:
        valueA = a.age;
        valueB = b.age;
        break;

      case SortType.Married:
        valueA = Number(a.married);
        valueB = Number(b.married);
        break;

      case SortType.AverageGrade:
        valueA = avg(a.grades);
        valueB = avg(b.grades);
        break;

      default:
        return 0;
    }

    if (valueA < valueB) {
      return order === 'asc' ? -1 : 1;
    }

    if (valueA > valueB) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  });
}

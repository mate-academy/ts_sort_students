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
): object[] {
  const copy: Student[] = students
    .map((student: Student) => ({ ...student }));

  function sortCopyBy(field: SortType, item: Student[] = copy): Student[] {
    return item.sort((a: Student, b: Student): number => {
      return (a[field] > b[field] ? 1 : -1);
    });
  }

  let link: Student[];

  switch (sortBy) {
    case SortType.Name:
      link = sortCopyBy(SortType.Name);
      break;
    case SortType.Age:
      link = sortCopyBy(SortType.Age);
      break;
    case SortType.Surname:
      link = sortCopyBy(SortType.Surname);
      break;
    case SortType.Married:
      link = sortCopyBy(SortType.Married);
      break;
    case SortType.AverageGrade:
      return (copy.sort((a: Student, b: Student): number => {
        const valueA: number = (
          a.grades
            .reduce((sum, n) => sum + n, 0)
              / a.grades.length);
        const valueB: number = (
          b.grades
            .reduce((sum, n) => sum + n, 0)
              / b.grades.length);

        if (order === 'desc') {
          return valueB - valueA;
        }

        return valueA - valueB;
      }));

    default:
      return copy;
  }

  if (order === 'asc') {
    return link;
  }

  return link.reverse();
}


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
  const sortedStudents = JSON.parse(JSON.stringify(students));
  const reducer = (acc: number, curt: number): number => acc + curt;

  sortedStudents.sort((a: Student, b: Student): number => {
    let comparator: number = 0;

    switch (sortBy) {
      case ('name'):
      case ('surname'):
        comparator = a[sortBy].localeCompare(b[sortBy]);
        break;
      case ('age'):
      case ('married'):
        comparator = +a[sortBy] - +b[sortBy];
        break;
      case ('grades'):
        comparator = (a[sortBy].reduce(reducer) / a[sortBy].length)
          - (b[sortBy].reduce(reducer) / b[sortBy].length);
        break;
      default:
        break;
    }

    return (order === 'asc') ? comparator : comparator * -1;
  });

  return sortedStudents;
}


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

function addingSortBy(addendums: number[]): number {
  return addendums.reduce((x, y) => x + y);
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const unsorted: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return unsorted.sort((
        firstStud: Student,
        secondStud: Student,
      ) => (order === 'asc'
        ? firstStud[sortBy].localeCompare(secondStud[sortBy])
        : secondStud[sortBy].localeCompare(firstStud[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? unsorted.sort((firstStud, secondStud) => (
          +firstStud[sortBy] - +secondStud[sortBy]))
        : unsorted.sort((firstStud, secondStud) => (
          +secondStud[sortBy] - +firstStud[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? unsorted.sort((firstStud, secondStud) => {
          const sumA = addingSortBy(firstStud[sortBy]);
          const sumB = addingSortBy(secondStud[sortBy]);

          return sumA
          / firstStud[sortBy].length - sumB / secondStud[sortBy].length;
        })
        : unsorted.sort((firstStud, secondStud) => {
          const sumA = addingSortBy(firstStud[sortBy]);
          const sumB = addingSortBy(secondStud[sortBy]);

          return sumB
          / secondStud[sortBy].length - sumA / firstStud[sortBy].length;
        });

    default:
      return unsorted;
  }
}


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

function Adding(addendums: number[]): number {
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
      return order === 'asc'
        ? unsorted.sort((
          firstStud: Student,
          secondStud: Student,
        ) => firstStud[sortBy].localeCompare(secondStud[sortBy]))
        : unsorted.sort((
          firstStud: Student,
          secondStud: Student,
        ) => secondStud[sortBy].localeCompare(firstStud[sortBy]));

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
          const sumA = Adding(firstStud[sortBy]);
          const sumB = Adding(secondStud[sortBy]);

          return sumA
          / firstStud.grades.length - sumB / secondStud.grades.length;
        })
        : unsorted.sort((firstStud, secondStud) => {
          const sumA = Adding(firstStud[sortBy]);
          const sumB = Adding(secondStud[sortBy]);

          return sumB
          / secondStud[sortBy].length - sumA / firstStud[sortBy].length;
        });

    default:
      return unsorted;
  }
}

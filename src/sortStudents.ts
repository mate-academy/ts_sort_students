
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
        ? unsorted.sort((firstStud, secondStud) => {
          return (+firstStud[sortBy] - +secondStud[sortBy]);
        })
        : unsorted.sort((firstStud, secondStud) => {
          return (+secondStud[sortBy] - +firstStud[sortBy]);
        });

    case SortType.AverageGrade:
      if (order === 'asc') {
        unsorted.sort((firstStud, secondStud) => {
          const sumA = firstStud[sortBy].reduce((x, y) => x + y);
          const sumB = secondStud[sortBy].reduce((x, y) => x + y);

          // eslint-disable-next-line max-len
          return sumA / firstStud.grades.length - sumB / secondStud.grades.length;
        });
      }

      if (order === 'desc') {
        unsorted.sort((firstStud, secondStud) => {
          const sumA = firstStud[sortBy].reduce((x, y) => x + y);
          const sumB = secondStud[sortBy].reduce((x, y) => x + y);

          // eslint-disable-next-line max-len
          return sumB / secondStud[sortBy].length - sumA / firstStud[sortBy].length;
        });
      }
      break;

    default:
      break;
  }

  return unsorted;
}

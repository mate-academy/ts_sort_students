
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const StudentsCopy: Student[] = [...students];

  function findAvaragegrade(gradesArray: number[]): number {
    return gradesArray.reduce((acc, grade) => acc
    + grade, 0) / gradesArray.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? StudentsCopy.sort(
          (firstStud, secondStud) => firstStud[sortBy]
            .localeCompare(secondStud[sortBy]),
        )
        : StudentsCopy.sort(
          (firstStud, secondStud) => secondStud[sortBy]
            .localeCompare(firstStud[sortBy]),
        );

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? StudentsCopy.sort(
          (firstStud, secondStud) => +firstStud[sortBy]
          - +secondStud[sortBy],
        )
        : StudentsCopy.sort(
          (firstStud, secondStud) => +secondStud[sortBy]
          - +firstStud[sortBy],
        );

    case SortType.AverageGrade:
      return order === 'asc'
        ? StudentsCopy.sort(
          (firstStud, secondStud) => findAvaragegrade(firstStud.grades)
          - findAvaragegrade(secondStud.grades),
        )
        : StudentsCopy.sort(
          (firstStud, secondStud) => findAvaragegrade(secondStud.grades)
        - findAvaragegrade(firstStud.grades),
        );

    default:
      return StudentsCopy;
  }
}

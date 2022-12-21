
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
  const studentsCopy: Student[] = [...students];

  function findAvaragegrade(gradesArray: number[]): number {
    return gradesArray.reduce((acc, grade) => acc
    + grade, 0) / gradesArray.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((firstStud, secondStud) => {
        if (order === 'asc') {
          return firstStud[sortBy].localeCompare(secondStud[sortBy]);
        }

        return secondStud[sortBy].localeCompare(firstStud[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort((firstStud, secondStud) => {
        if (order === 'asc') {
          return +firstStud[sortBy] - +secondStud[sortBy];
        }

        return +secondStud[sortBy] - +firstStud[sortBy];
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((firstStud, secondStud) => {
        if (order === 'asc') {
          return findAvaragegrade(firstStud.grades)
        - findAvaragegrade(secondStud.grades);
        }

        return findAvaragegrade(secondStud.grades)
        - findAvaragegrade(firstStud.grades);
      });

    default:
      return studentsCopy;
  }
}

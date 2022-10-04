
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

function getAverageGrades(grades:number[]):number {
  return grades.reduce(
    (acc: number, prev: number) => acc + prev,
  ) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((firstStud:Student, secondStud:Student) => {
        if (order === 'asc') {
          return firstStud[sortBy].localeCompare(secondStud[sortBy]);
        }

        return secondStud[sortBy].localeCompare(firstStud[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((firstStud:Student, secondStud:Student) => {
        if (order === 'asc') {
          return Number(firstStud[sortBy]) - Number(secondStud[sortBy]);
        }

        return Number(secondStud[sortBy]) - Number(firstStud[sortBy]);
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((firstStud:Student, secondStud:Student) => {
        const firstStudGrades = getAverageGrades(firstStud[sortBy]);
        const secondStudGrades = getAverageGrades(secondStud[sortBy]);

        if (order === 'asc') {
          return firstStudGrades - secondStudGrades;
        }

        return secondStudGrades - firstStudGrades;
      });
    default:
      return sortedStudents;
  }
}

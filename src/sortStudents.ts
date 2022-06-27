
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedArr: Student[] = [...students];
  const compareMod: 1 | -1 = (order === 'desc') ? -1 : 1;

  function avgGrade(grades: number[]) :number {
    return grades.reduce((sum:number, grade:number): number => (sum + grade),
      0) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedArr.sort((studentA, studentB) => (
        studentA[sortBy].localeCompare(studentB[sortBy]) * compareMod
      ));
      break;

    case SortType.Age:
      sortedArr.sort((studentA, studentB) => (
        (studentA.age - studentB.age) * compareMod
      ));
      break;

    case SortType.Married:
      sortedArr.sort((studentA, studentB) => {
        if (studentA.married !== studentB.married) {
          return (studentA.married ? 1 : -1) * compareMod;
        }

        return 0;
      });
      break;

    case SortType.AverageGrade:
      sortedArr.sort((studentA, studentB) => (
        (avgGrade(studentA.grades) - avgGrade(studentB.grades)) * compareMod
      ));
      break;

    default:
      break;
  }

  return sortedArr;
}


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
  AverageGrade = 'grade',
}

export type SortOrder = 'asc' | 'desc';

function getAvgGrades(arrayOfGrades: number[]): number {
  return arrayOfGrades.reduce((accumulator, currentValue) => (
    accumulator + currentValue
  )) / arrayOfGrades.length;
}

export function sortStudents(
  students : Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const copyOfStudentsArray = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudentsArray.sort((studentA, studentB) => (
        (order === 'asc')
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy])
      ));
      break;

    case SortType.Married:
    case SortType.Age:
      copyOfStudentsArray.sort((studentA, studentB) => (
        (order === 'asc')
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy])
      ));
      break;

    case (SortType.AverageGrade):
      copyOfStudentsArray.sort((studentA, studentB) => (
        (order === 'asc')
          ? getAvgGrades(studentA.grades) - getAvgGrades(studentB.grades)
          : getAvgGrades(studentB.grades) - getAvgGrades(studentA.grades)
      ));
      break;

    default:
      throw new Error('Error');
  }

  return copyOfStudentsArray;
}

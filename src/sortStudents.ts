
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

const averageGrade = (grades: number[]): number => {
  return grades.reduce((a, b) => a + b) / grades.length;
};

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsArr.sort((initial, current) => (
          initial[sortBy].localeCompare(current[sortBy])))
        : studentsArr.sort((initial, current) => (
          current[sortBy].localeCompare(initial[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsArr.sort((initial, current) => (
          Number(initial[sortBy]) - Number(current[sortBy])))
        : studentsArr.sort((initial, current) => (
          Number(current[sortBy]) - Number(initial[sortBy])));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsArr.sort(
          (initial, current) => (
            averageGrade(initial[sortBy]) - averageGrade(current[sortBy])),
        )
        : studentsArr.sort(
          (initial, current) => (
            averageGrade(current[sortBy]) - averageGrade(initial[sortBy])),
        );

    default:
      break;
  }

  return studentsArr;
}


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

function findAvarageGrade(studentGrades: number[]): number {
  return (studentGrades.reduce((acc, prev) => acc + prev, 0))
   / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsForSort = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsForSort.sort((studentA, studentB) => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return studentsForSort.sort((studentA, studentB) => {
        return order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);
      });

    case SortType.AverageGrade:
      return studentsForSort.sort((studentA, studentB) => {
        return order === 'asc'
          ? findAvarageGrade(studentA.grades)
          - findAvarageGrade(studentB.grades)
          : findAvarageGrade(studentB.grades)
          - findAvarageGrade(studentA.grades);
      });

    default:
      return studentsForSort;
  }
}

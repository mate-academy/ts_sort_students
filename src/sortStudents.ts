
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

function getAvgGrade(grade: number[]): number {
  return grade.reduce((sum: number, x: number) => sum + x) / grade.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  return copyStudents.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      case SortType.Age:
        return order === 'asc'
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;
      case SortType.Married:
        return order === 'asc'
          ? Number(studentA.married) - Number(studentB.married)
          : Number(studentB.married) - Number(studentA.married);
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAvgGrade(studentA[sortBy]) - getAvgGrade(studentB[sortBy])
          : getAvgGrade(studentB[sortBy]) - getAvgGrade(studentA[sortBy]);
      default:
        return 0;
    }
  });
}

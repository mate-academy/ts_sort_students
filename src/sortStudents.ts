
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

function getAvgGrade(gradesArr: number[]): number {
  return gradesArr.reduce((acc, grade) => acc + grade, 0) / gradesArr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];
  const isASC: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copiedStudents.sort((a: Student, b: Student): number => (
        isASC
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
      return copiedStudents.sort((a: Student, b: Student): number => (
        isASC
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy]
      ));

    case SortType.AverageGrade:
      return copiedStudents.sort((a: Student, b: Student): number => {
        const x: number = getAvgGrade(a[sortBy]);
        const y: number = getAvgGrade(b[sortBy]);

        return isASC ? x - y : y - x;
      });

    default:
      return students;
  }
}

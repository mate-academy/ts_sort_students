
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
  const newStudentsArr = [...students];

  function calculateAverageGrade(student: Student): number {
    return student.grades.reduce((sum, grade) => sum + grade, 0)
    / student.grades.length;
  }

  newStudentsArr.sort((a, b) => {
    let compareResult: number;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        compareResult = a[sortBy].localeCompare(b[sortBy]);
        break;

      case SortType.Age:
      case SortType.Married:
        compareResult = Number(a[sortBy]) - Number(b[sortBy]);
        break;

      case SortType.AverageGrade:
        compareResult = calculateAverageGrade(a) - calculateAverageGrade(b);
        break;

      default:
        compareResult = 0;
        break;
    }

    if (order === 'desc') {
      compareResult = -compareResult;
    }

    return compareResult;
  });

  return newStudentsArr;
}


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

export function getAverageGrades(grades: number[]): number {
  const gradesSum = grades.reduce(
    (grade, currentGrade) => (grade + currentGrade), 0,
  );

  return gradesSum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsList = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsList.sort((a: Student, b: Student) => (
        order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:
      studentsList.sort((a, b) => (order === 'asc'
        ? Number(a[sortBy]) - Number(b[sortBy])
        : Number(b[sortBy]) - Number(a[sortBy])
      ));
      break;

    case SortType.AverageGrade:
      studentsList.sort((a, b) => (order === 'asc'
        ? getAverageGrades(a[sortBy]) - getAverageGrades(b[sortBy])
        : getAverageGrades(b[sortBy]) - getAverageGrades(a[sortBy])
      ));
      break;

    default:
      throw new Error();
  }

  return studentsList;
}

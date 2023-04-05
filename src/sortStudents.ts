
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

export function getAverageGrade(grades: number[]): number {
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
      studentsList.sort((student1: Student, student2: Student) => (
        order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:
      studentsList.sort((student1, student2) => (order === 'asc'
        ? Number(student1[sortBy]) - Number(student2[sortBy])
        : Number(student2[sortBy]) - Number(student1[sortBy])
      ));
      break;

    case SortType.AverageGrade:
      studentsList.sort((student1, student2) => (order === 'asc'
        ? getAverageGrade(student1[sortBy]) - getAverageGrade(student2[sortBy])
        : getAverageGrade(student2[sortBy]) - getAverageGrade(student1[sortBy])
      ));
      break;

    default:
      throw new Error();
  }

  return studentsList;
}

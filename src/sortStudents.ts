
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  const gradesLength = grades.length;

  if (gradesLength === 0) {
    return 0;
  }

  return grades.reduce((total, grade) => total + grade, 0) / gradesLength;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((s1, s2) => {
        return order === 'asc'
          ? s1[sortBy].localeCompare(s2[sortBy])
          : s2[sortBy].localeCompare(s1[sortBy]);
      });
    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((s1, s2) => {
        return order === 'asc'
          ? Number(s1[sortBy]) - Number(s2[sortBy])
          : Number(s2[sortBy]) - Number(s1[sortBy]);
      });
    case SortType.AverageGrade:
      return sortedStudents.sort((s1, s2) => {
        return order === 'asc'
          ? getAverageGrade(s1.grades) - getAverageGrade(s2.grades)
          : getAverageGrade(s2.grades) - getAverageGrade(s1.grades);
      });
    default:
      return sortedStudents;
  }
}

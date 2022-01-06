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

function getAverage(grades: number[]): number {
  return grades.reduce((sum, num) => sum + num, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(b[sortBy]);
      });
      break;

    case 'age':
    case 'married':
      sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      });
      break;

    case 'grades':
      sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? getAverage(a.grades) - getAverage(b.grades)
          : getAverage(b.grades) - getAverage(a.grades);
      });
      break;

    default:
      return sortedStudents;
  }

  return sortedStudents;
}

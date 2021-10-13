interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type SortOrder = 'asc'|'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, current) => sum + current, 0)
    / grades.length;
}

let result: Student[];

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case 'name':
    case 'surname':
      result = [...students].sort((a, b) => {
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;
    case 'age':
    case 'married':
      result = [...students].sort((a, b) => {
        return (order === 'asc')
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      });
      break;
    case 'grades':
      result = [...students].sort((a, b) => {
        return (order === 'asc')
          ? getAverageGrade(a.grades)
            - getAverageGrade(b.grades)
          : getAverageGrade(b.grades)
            - getAverageGrade(a.grades);
      });
      break;
    default:
      break;
  }

  return result;
}


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

function getAverageGrade(students: Student): number {
  return (students.grades.reduce((sum, grade) => sum + grade))
    / students.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((prev, curr) => {
        return order === 'asc'
          ? prev[sortBy].localeCompare(curr[sortBy])
          : curr[sortBy].localeCompare(prev[sortBy]);
      });
      break;

    case SortType.Age:
      copyStudents.sort((prev, curr) => {
        return order === 'asc'
          ? prev[sortBy] - curr[sortBy]
          : curr[sortBy] - prev[sortBy];
      });
      break;

    case SortType.Married:
      copyStudents.sort((prev, curr) => {
        return (order === 'asc')
          ? +prev[sortBy] - +curr[sortBy]
          : +curr[sortBy] - +prev[sortBy];
      });
      break;

    case SortType.AverageGrade:
      copyStudents.sort((prev, curr) => {
        return order === 'asc'
          ? getAverageGrade(prev) - getAverageGrade(curr)
          : getAverageGrade(curr) - getAverageGrade(prev);
      });
      break;

    default:
      break;
  }

  return copyStudents;
}

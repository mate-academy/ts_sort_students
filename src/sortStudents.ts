
// create SortOrder type
type SortOrder = 'asc' | 'desc';

// describe Student type
interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

// create and export SortType enum
export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// helper f() for average grade
function avgGrade(stud: Student): number {
  return stud.grades.reduce((sum, x) => sum + x) / stud.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  return students.slice().sort((curr, next) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? curr[sortBy].localeCompare(next[sortBy])
          : curr[sortBy].localeCompare(next[sortBy]) * -1;

      case SortType.Age:
        return order === 'asc'
          ? curr[sortBy] - next[sortBy]
          : (curr[sortBy] - next[sortBy]) * -1;

      case SortType.Married:
        return order === 'asc'
          ? Number(curr[sortBy]) - Number(next[sortBy])
          : (Number(curr[sortBy]) - Number(next[sortBy])) * -1;

      case SortType.AverageGrade:
        return order === 'asc'
          ? avgGrade(curr) - avgGrade(next)
          : (avgGrade(curr) - avgGrade(next)) * -1;

      default:
        return Number(false);
    }
  });
}

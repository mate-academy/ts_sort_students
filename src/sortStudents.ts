
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

// create SortOrder type
export type SortOrder = 'desc' | 'asc';

function calcAvGrade(grades: number[]): number {
  return grades.reduce((x, y) => x + y) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArr = [...students];
  const ascOrder = order === 'asc';

  studentsArr.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return ascOrder
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return ascOrder
          ? (+a[sortBy] - +b[sortBy])
          : (+b[sortBy] - +a[sortBy]);
      case SortType.AverageGrade:
      default:
        return ascOrder
          ? (calcAvGrade(a[sortBy]) - calcAvGrade(b[sortBy]))
          : (calcAvGrade(b[sortBy]) - calcAvGrade(a[sortBy]));
    }
  });

  return studentsArr;
}

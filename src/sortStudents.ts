
export interface Student {
  name:string,
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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
type SortOrder = 'asc' | 'des';

const getAverageGrade = (grades: number[]):number => {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const studentsCopy:Student[] = [...students];

  studentsCopy.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
          : getAverageGrade(b.grades) - getAverageGrade(a.grades);

      default:
        return 0;
    }
  });

  return studentsCopy;
}

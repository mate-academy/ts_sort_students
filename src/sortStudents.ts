
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const newStudentArr = [...students];

  newStudentArr.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'desc'
          ? b[sortBy].localeCompare(a[sortBy])
          : a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'desc'
          ? Number(b[sortBy]) - Number(a[sortBy])
          : Number(a[sortBy]) - Number(b[sortBy]);

      case SortType.AverageGrade:
        return order === 'desc'
          ? getAverageGrade(b.grades) - getAverageGrade(a.grades)
          : getAverageGrade(a.grades) - getAverageGrade(b.grades);

      default: throw new Error('Sortype is not valid');
    }
  });

  return newStudentArr;
}

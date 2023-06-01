
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce(
    (gradesSum: number, grade: number) => grade + gradesSum,
  ) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  return studentsCopy.sort((currentStudent: Student, nextStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? (currentStudent[sortBy]).localeCompare(nextStudent[sortBy])
          : (nextStudent[sortBy].localeCompare(currentStudent[sortBy]));

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? (+currentStudent[sortBy]) - (+nextStudent[sortBy])
          : (+nextStudent[sortBy]) - (+currentStudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(currentStudent.grades)
                - getAverageGrade(nextStudent.grades)

          : getAverageGrade(nextStudent.grades)
                - getAverageGrade(currentStudent.grades);

      default:
        throw new Error('Invalid sorting parameters');
    }
  });
}

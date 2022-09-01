
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
  AverageGrade = 'averagegrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order:SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  function getAverageGrade(grades: number[]): number {
    const gradesSum = grades.reduce((storage: number, current: number) => {
      return storage + current;
    });

    return gradesSum / grades.length;
  }

  studentsCopy.sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Married:
      case SortType.Age:
        return (order === 'asc'
          ? +firstStudent[sortBy] - +secondStudent[sortBy]
          : +secondStudent[sortBy] - +firstStudent[sortBy]);

      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : firstStudent[sortBy].localeCompare(secondStudent[sortBy]));

      default:
        return (order === 'asc'
          ? getAverageGrade(firstStudent.grades)
        - getAverageGrade(secondStudent.grades)
          : getAverageGrade(secondStudent.grades)
        - getAverageGrade(firstStudent.grades));
    }
  });

  return studentsCopy;
}

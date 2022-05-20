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
  AverageGrade = 'averageGrade,'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function getAverageGrade(arr: number[]): number {
    const grade = arr.reduce((sum: number, a: number):
    number => sum + a, 0) / arr.length;

    return grade;
  }

  const newStudents = [...students];

  return newStudents.sort((firstStudent, secondStudent) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.Age:
        return (order === 'asc')
          ? firstStudent[sortBy] - secondStudent[sortBy]
          : secondStudent[sortBy] - firstStudent[sortBy];

      case SortType.Married:
        return (order === 'asc')
          ? +firstStudent[sortBy] - +secondStudent[sortBy]
          : +secondStudent[sortBy] - +firstStudent[sortBy];
      case SortType.AverageGrade:
        return (order === 'asc')
          ? getAverageGrade(firstStudent.grades)
            - getAverageGrade(secondStudent.grades)
          : getAverageGrade(secondStudent.grades)
            - getAverageGrade(firstStudent.grades);
      default:
        throw new Error('No correct data');
    }
  });
}

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

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

function getAverageGrade(student: Student): number {
  return student.grades.reduce((total, grade) => {
    return total + grade;
  }, 0)
  / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentCopy: Student[] = [...students];
  const isAscending = order === SortOrder.Asc
    ? 1
    : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentCopy.sort((firstStudent, secondStudent): number => {
        return isAscending
          * firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return studentCopy.sort((firstStudent, secondStudent): number => {
        return isAscending
          * (+firstStudent[sortBy] - +secondStudent[sortBy]);
      });

    case SortType.AverageGrade:
      return studentCopy.sort((firstStudent, secondStudent): number => {
        return isAscending
          * (getAverageGrade(firstStudent) - getAverageGrade(secondStudent));
      });

    default:
      throw new Error(`Invalid SortBy value: ${sortBy}`);
  }
}

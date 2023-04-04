
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
  AverageGrade = 'grades'
}

export type SortOrder = 'ask'|'desc';

function getAvgOfGrades(student: Student): number {
  return student.grades.reduce((acc: number, curr: number) => {
    return acc + curr;
  }, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  return studentsCopy.sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
      case SortType.Married:
        return order === 'desc'
          ? secondStudent[sortBy].toString()
            .localeCompare(firstStudent[sortBy].toString())
          : firstStudent[sortBy].toString()
            .localeCompare(secondStudent[sortBy].toString());

      case SortType.Age:
        return order === 'desc'
          ? +secondStudent[sortBy] - +firstStudent[sortBy]
          : +firstStudent[sortBy] - +secondStudent[sortBy];

      case SortType.AverageGrade:
        return order === 'desc'
          ? getAvgOfGrades(secondStudent) - getAvgOfGrades(firstStudent)
          : getAvgOfGrades(firstStudent) - getAvgOfGrades(secondStudent);

      default:
        return 0;
    }
  });
}

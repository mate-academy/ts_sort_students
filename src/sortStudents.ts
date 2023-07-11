
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function averageGrade(student: Student): number {
  return student.grades.reduce((sum, currentStudentGrade) => (
    sum + currentStudentGrade
  ), 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder = 'asc',
): Student[] {
  let sortedStudentArray = [...students];

  sortedStudentArray = sortedStudentArray.sort((
    firstStudent: Student, secondStudent: Student,
  ) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return firstStudent[sortBy].localeCompare(secondStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        if (order === 'desc') {
          return +secondStudent[sortBy] - +firstStudent[sortBy];
        }

        return +firstStudent[sortBy] - +secondStudent[sortBy];

      case SortType.AverageGrade:
        if (order === 'desc') {
          return averageGrade(secondStudent) - averageGrade(firstStudent);
        }

        return averageGrade(firstStudent) - averageGrade(secondStudent);

      default: return 0;
    }
  });

  return sortedStudentArray;
}

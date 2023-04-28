
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function calculateAverage(student: Student): number {
  return student.grades
    .reduce((total, grade) => total + grade) / student.grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): object[] {
  // write your function
  const sortedStudents: Student[] = [...students];

  sortedStudents.sort((firstStudent, secondStudent) => {
    const isDesc: boolean = order === 'desc';

    switch (sortBy) {
      case SortType.Age:
        if (isDesc) {
          return secondStudent[sortBy] - firstStudent[sortBy];
        }

        return firstStudent[sortBy] - secondStudent[sortBy];
      case SortType.Married:
        if (firstStudent[sortBy] === secondStudent[sortBy]) {
          return 0;
        }

        if (isDesc) {
          return firstStudent[sortBy] ? -1 : 1;
        }

        return firstStudent[sortBy] ? 1 : -1;
      case SortType.AverageGrade:
        if (isDesc) {
          return (
            calculateAverage(secondStudent) - calculateAverage(firstStudent)
          );
        }

        return (
          calculateAverage(firstStudent) - calculateAverage(secondStudent)
        );
      case SortType.Surname:
      case SortType.Name:
        if (isDesc) {
          return firstStudent[sortBy] > secondStudent[sortBy] ? -1 : 1;
        }

        return firstStudent[sortBy] > secondStudent[sortBy] ? 1 : -1;
      default:
        throw new Error('wrong sortBy type');
    }
  });

  return sortedStudents;
}

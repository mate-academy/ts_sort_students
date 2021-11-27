
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

function getAverageGrade(student: Student): number {
  return (student.grades.reduce((a, b) => a + b) / student.grades.length);
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((prevStudent: Student, currentStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return prevStudent[sortBy].localeCompare(currentStudent[sortBy]);
        }

        return currentStudent[sortBy].localeCompare(prevStudent[sortBy]);

      case SortType.Age:
        if (order === 'asc') {
          return prevStudent[sortBy] - currentStudent[sortBy];
        }

        return currentStudent[sortBy] - prevStudent[sortBy];

      case SortType.Married:
        if (prevStudent[sortBy] && !currentStudent[sortBy]) {
          return order === 'asc' ? 1 : -1;
        }

        if (!prevStudent[sortBy] && currentStudent[sortBy]) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;

      case SortType.AverageGrade:
        if (order === 'asc') {
          return getAverageGrade(prevStudent) - getAverageGrade(currentStudent);
        }

        return getAverageGrade(currentStudent) - getAverageGrade(prevStudent);

      default:
        return 0;
    }
  });

  return sortedStudents;
}

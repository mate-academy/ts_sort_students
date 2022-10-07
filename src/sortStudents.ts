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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(student: Student): number {
  return student.grades
    .reduce((acc: number, prev: number) => acc + prev, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const outputArray: Student[] = [...students];

  return outputArray.sort((currStudent: Student, prevStudent: Student) => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(currStudent[sortBy]) - Number(prevStudent[sortBy])
          : Number(prevStudent[sortBy]) - Number(currStudent[sortBy]);

      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? currStudent[sortBy].localeCompare(prevStudent[sortBy])
          : prevStudent[sortBy].localeCompare(currStudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverage(currStudent)
            - getAverage(prevStudent)
          : getAverage(prevStudent)
            - getAverage(currStudent);

      default:
        return 0;
    }
  });
}

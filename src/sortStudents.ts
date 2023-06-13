
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

// function for average

function getAverageGrade(grades: number[]): number {
  const averageGrade
    = grades.reduce((sum, element) => sum + element, 0) / grades.length;

  return averageGrade;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc' ? 1 : -1)
          * student1[sortBy].localeCompare(student2[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (order === 'asc' ? 1 : -1)
          * (+student1[sortBy] - +student2[sortBy]);

      case SortType.AverageGrade:
        return (
          (order === 'asc' ? 1 : -1)
            * (getAverageGrade(student1.grades)
            - getAverageGrade(student2.grades))
        );

      default:
        throw new Error('Unrecognised sort type!');
    }
  });

  return studentsCopy;
}

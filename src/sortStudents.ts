
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
  AverageGrade = 'grade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function countAverage(student: Student): number {
  return student.grades.reduce((sum, grade) => sum + grade, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents: Student[] = [...students];

  return copiedStudents
    .sort((studentFirst, studentSecond) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? studentFirst[sortBy].localeCompare(studentSecond[sortBy])
            : studentSecond[sortBy].localeCompare(studentFirst[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return order === 'asc'
            ? +studentFirst[sortBy] - +studentSecond[sortBy]
            : +studentSecond[sortBy] - +studentFirst[sortBy];

        case SortType.AverageGrade:
          return order === 'asc'
            ? countAverage(studentFirst) - countAverage(studentSecond)
            : countAverage(studentSecond) - countAverage(studentFirst);

        default:
          throw new Error(`Sorry, but your type ${sortBy} wasn't found`);
      }
    });
}


export interface Student {
  // describe Student interface
}

export enum SortType {
  // describe SortType enum
}

// create SortOrder type
export type SortOrder;


interface Student {
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

type SortOrder = 'asc' | 'desc';

function avgGrade(student: Student): number {
  if (student.grades.length === 0) {
    return 0;
  }

  return student.grades.reduce((sum, nextGrade) => sum
  + nextGrade) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder = 'asc',
): Student[] {
  const copy: Student[] = [...students];

  return copy.sort(
    (studentA: Student, studentB: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return (order === 'asc')
            ? studentA[sortBy].localeCompare(studentB[sortBy])
            : studentB[sortBy].localeCompare(studentA[sortBy]);

        case SortType.Age:
          return (order === 'asc')
            ? studentA[sortBy] - studentB[sortBy]
            : studentB[sortBy] - studentA[sortBy];

        case SortType.Married:
          return (order === 'asc')
            ? Number(studentA[sortBy]) - Number(studentB[sortBy])
            : Number(studentB[sortBy]) - Number(studentA[sortBy]);

        case SortType.AverageGrade: {
          return (order === 'asc')
            ? avgGrade(studentA) - avgGrade(studentB)
            : avgGrade(studentB) - avgGrade(studentA);
        }

        default:
          return 0;
      }
    },
  );
}

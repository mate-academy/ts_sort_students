
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
  AverageGrade = 'grade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function findAverageGrade(studentGrades: number[]): number {
  const sum: number = studentGrades
    .reduce((grade1: number, grade2: number) => grade1 + grade2);

  return sum / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      copyStudents.sort((studentFirst, studentSecond) => {
        return order === 'asc'
          ? studentFirst[sortBy].localeCompare(studentSecond[sortBy])
          : studentSecond[sortBy].localeCompare(studentFirst[sortBy]);
      });

      break;

    case SortType.Age:
    case SortType.Married:

      copyStudents.sort((studentFirst, studentSecond) => {
        return order === 'asc'
          ? Number(studentFirst[sortBy]) - Number(studentSecond[sortBy])
          : Number(studentSecond[sortBy]) - Number(studentFirst[sortBy]);
      });

      break;

    case SortType.AverageGrade:

      copyStudents.sort((studentFirst, studentSecond) => {
        return order === 'asc'
          ? findAverageGrade(studentFirst.grades)
            - findAverageGrade(studentSecond.grades)
          : findAverageGrade(studentSecond.grades)
            - findAverageGrade(studentFirst.grades);
      });

      break;

    default:
      break;
  }

  return copyStudents;
}

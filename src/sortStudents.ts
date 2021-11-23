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

export type SortOrder = 'asc' | 'desc';

const getAverageGrade = ({ grades }: Student): number => {
  const totalGrades = grades.reduce((total, grade) => total + grade, 0);

  return totalGrades / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsSample: Student[] = [...students];
  const isAscending: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsSample.sort((studentA, studentB) => {
        return isAscending
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });
      break;

    case SortType.Age:
      studentsSample.sort((studentA, studentB) => {
        return isAscending
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;
      });
      break;

    case SortType.Married: {
      studentsSample.sort((studentA, studentB) => {
        return isAscending
          ? +studentA.married - +studentB.married
          : +studentB.married - +studentA.married;
      });
      break;
    }

    case SortType.AverageGrade: {
      studentsSample.sort((studentA, studentB) => {
        return isAscending
          ? getAverageGrade(studentA) - getAverageGrade(studentB)
          : getAverageGrade(studentB) - getAverageGrade(studentA);
      });
      break;
    }

    default:
      throw new Error('Unknown error');
  }

  return studentsSample;
}

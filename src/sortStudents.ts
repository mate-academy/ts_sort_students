
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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = string;

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const sortedStudents = [...students];
  let callback: (studentA:Student, studentB:Student) => number;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      callback = (studentA, studentB):number => {
        if (order === 'desc') {
          return studentB[sortBy].localeCompare(studentA[sortBy]);
        }

        return studentA[sortBy].localeCompare(studentB[sortBy]);
      };
      break;
    case SortType.Age:
    case SortType.Married:
      callback = (studentA, studentB):number => {
        if (order === 'desc') {
          return +studentB[sortBy] - +studentA[sortBy];
        }

        return +studentA[sortBy] - +studentB[sortBy];
      };
      break;

    default:
      callback = (studentA, studentB):number => {
        const studentASum
          = studentA.grades.reduce((acc, curr) => acc + curr, 0);
        const studentBSum
          = studentB.grades.reduce((acc, curr) => acc + curr, 0);

        if (order === 'desc') {
          return (studentBSum / studentB.grades.length)
          - (studentASum / studentA.grades.length);
        }

        return (studentASum / studentA.grades.length)
          - (studentBSum / studentB.grades.length);
      };
  }

  return sortedStudents.sort(callback);
}

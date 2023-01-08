
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
  AverageGrade = 'averageGrade' // required an initializer by lint
}

export type SortOrder = 'asc' | 'desc';

export function calculateAvgGrade(student: Student): number {
  const sum = student.grades.reduce(
    (prevGrade: number, nextGrade: number) => prevGrade + nextGrade, 0,
  );

  return sum / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let sortFunc: Function;

  switch (true) {
    case sortBy === SortType.Name || sortBy === SortType.Surname:
      sortFunc = (a: Student, b: Student): number => {
        return a[sortBy].localeCompare(b[sortBy]);
      };
      break;

    case sortBy === SortType.Age || sortBy === SortType.Married:
      sortFunc = (a: Student, b: Student): number => {
        return +a[sortBy] - +b[sortBy];
      };
      break;

    case sortBy === SortType.AverageGrade:
      sortFunc = (a: Student, b: Student): number => {
        const avgPrev = calculateAvgGrade(a);
        const avgNext = calculateAvgGrade(b);

        return avgPrev - avgNext;
      };
      break;

    default: // default case required by linter
      throw new Error('ERROR');
  }

  return students.sort(
    (prevStudent: Student, nextStudent: Student): number => {
      let studentA: Student = prevStudent;
      let studentB: Student = nextStudent;

      if (order === 'desc') {
        [studentA, studentB] = [studentB, studentA];
      }

      return sortFunc(studentA, studentB);
    },
  );
}

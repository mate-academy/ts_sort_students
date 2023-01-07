
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
  AverageGrade = '' // required an initializer by lint
}

export type SortOrder = 'asc' | 'desc';

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

    case sortBy === SortType.Age:
      sortFunc = (a: Student, b: Student): number => {
        return a[sortBy] - b[sortBy];
      };
      break;

    case sortBy === SortType.Married:
      sortFunc = (a: Student, b: Student): number => {
        let res = -1;

        if (a[sortBy] === b[sortBy]) {
          res = 0;
        } else if (a[sortBy]) {
          res = 1;
        }

        return res;
      };
      break;

    case sortBy === SortType.AverageGrade:
      sortFunc = (a: Student, b: Student): number => {
        const sumPrev = a.grades.reduce(
          (prevGrade, nextGrade) => prevGrade + nextGrade, 0,
        );
        const avgPrev = (sumPrev / a.grades.length);
        const sumNext = b.grades.reduce(
          (prevGrade, nextGrade) => prevGrade + nextGrade, 0,
        );
        const avgNext = (sumNext / b.grades.length);

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

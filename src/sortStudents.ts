
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export enum SortOrder {
  ascending = 'asc',
  descending = 'desc',
}

type CompareFunc = (st1: Student, st2: Student) => number;

function compareFuncGenerator(byProp: SortType
  , order: SortOrder = SortOrder.ascending): CompareFunc {
  let callback: CompareFunc;

  switch (byProp) {
    case SortType.Name:
    case SortType.Surname:
      callback = (st1, st2): number => {
        return st1[byProp].localeCompare(st2[byProp]);
      };
      break;

    case SortType.Age:
    case SortType.Married:
      callback = (st1, st2): number => {
        return Number(st1[byProp]) - Number(st2[byProp]);
      };
      break;

    case SortType.AverageGrade:
      callback = (st1, st2): number => {
        const st1GradesAvg = st1[byProp]
          .reduce((prev, next) => prev + next) / st1[byProp].length;
        const st2GradesAvg = st2[byProp]
          .reduce((prev, next) => prev + next) / st2[byProp].length;

        return st1GradesAvg - st2GradesAvg;
      };
      break;

    default:
      break;
  }

  const wrapFunc: CompareFunc = (student1, student2) => {
    const compareResult: number = callback(student1, student2);

    return order === SortOrder.ascending
      ? compareResult
      : compareResult * -1;
  };

  return wrapFunc;
}

export function sortStudents(students: Array<Student>
  , sortBy: SortType, order: SortOrder): Array<Student> {
  const copyArr = students.map((s: Student) => {
    return { ...s };
  });

  const callback: CompareFunc = compareFuncGenerator(sortBy, order);

  return copyArr.sort(callback);
}

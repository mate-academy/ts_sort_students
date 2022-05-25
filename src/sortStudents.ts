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

type CompareFunc = (student1: Student, student2: Student) => number;

function compareFuncGenerator(
  byProp: SortType,
  order: SortOrder = SortOrder.ascending,
): CompareFunc {
  let callback: CompareFunc;

  switch (byProp) {
    case SortType.Name:
    case SortType.Surname:
      callback = (student1, student2): number => {
        return student1[byProp].localeCompare(student2[byProp]);
      };
      break;

    case SortType.Age:
    case SortType.Married:
      callback = (student1, student2): number => {
        return Number(student1[byProp]) - Number(student2[byProp]);
      };
      break;

    case SortType.AverageGrade:
      callback = (student1, student2): number => {
        const student1GradesAvg = student1[byProp]
          .reduce((prev, next) => prev + next, 0) / student1[byProp].length;
        const student2GradesAvg = student2[byProp]
          .reduce((prev, next) => prev + next, 0) / student2[byProp].length;

        return student1GradesAvg - student2GradesAvg;
      };
      break;

    default:
      callback = (): number => {
        return 0;
      };
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

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const copyArr = students.map((s: Student) => {
    return { ...s };
  });

  const callback: CompareFunc = compareFuncGenerator(sortBy, order);

  return copyArr.sort(callback);
}

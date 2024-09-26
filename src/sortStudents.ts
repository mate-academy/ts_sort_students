
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copiedArr: Student[] = [...students];

  return copiedArr.sort((firstStudent: Student, secondStudent: Student) => {
    if (typeof firstStudent[sortBy] === 'string') {
      if (order === 'desc') {
        return secondStudent[sortBy].toString()
          .localeCompare(firstStudent[sortBy].toString());
      }

      return firstStudent[sortBy].toString()
        .localeCompare(secondStudent[sortBy].toString());
    }

    if (sortBy === 'grades') {
      const averageFirst: number = firstStudent.grades
        .reduce((acc, el) => acc + el, 0) / firstStudent.grades.length;

      const averageSecond: number = secondStudent.grades
        .reduce((acc, el) => acc + el, 0) / secondStudent.grades.length;

      if (order === 'desc') {
        return +averageSecond - +averageFirst;
      }

      return +averageFirst - +averageSecond;
    }

    if (order === 'desc') {
      return +secondStudent[sortBy] - +firstStudent[sortBy];
    }

    return +firstStudent[sortBy] - +secondStudent[sortBy];
  });
}

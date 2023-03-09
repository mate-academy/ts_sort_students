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
  Grades = 'grades',
}

export type SortOrder = 'asc' | 'desc';
type CountAvarageGradeCallback = (grades: number[]) => number;

const countAvarageGrade: CountAvarageGradeCallback
= (grades) => (
  grades.reduce((sum, grade) => sum + grade, 0)
  / grades.length
);

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return students.sort((currentStudent, nextStudent) => {
    const orderCoefficient = order === 'asc' ? 1 : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return orderCoefficient
        * currentStudent[sortBy].localeCompare(nextStudent[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return orderCoefficient * Number(currentStudent[sortBy])
          - orderCoefficient * Number(nextStudent[sortBy]);
      case SortType.Grades:
        return orderCoefficient * countAvarageGrade(currentStudent[sortBy])
          - orderCoefficient * countAvarageGrade(nextStudent[sortBy]);
      default:
        throw new Error(`Impossible to sort. Student has no ${sortBy} key`);
    }
  });
}

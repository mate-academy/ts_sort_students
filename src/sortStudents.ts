
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]) : number {
  return grades.reduce((prevV, curentV) => prevV + curentV, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((firstS: Student, secondS: Student) => {
    const studentFirst = order === 'asc' ? firstS : secondS;
    const studentSecond = order === 'asc' ? secondS : firstS;

    if (typeof studentFirst[sortBy] === 'string') {
      return studentFirst[sortBy].localeCompare(studentSecond[sortBy]);
    }

    switch (sortBy) {
      case SortType.Age:
        return studentFirst.age - studentSecond.age;

      case SortType.Married:
        return Number(studentFirst.married) - Number(studentSecond.married);

      case SortType.AverageGrade:
        return getAverageGrade(studentFirst.grades)
        - getAverageGrade(studentSecond.grades);

      default:
        return 0;
    }
  });
}

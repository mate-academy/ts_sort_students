
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function reducingGrades(grades: number[]): number {
  return (grades.reduce((accum: number, cur: number) => accum + cur, 0)
    / grades.length);
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const newArr = [...students];

  newArr.sort((stud1: Student, stud2: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? stud1[sortBy].localeCompare(stud2[sortBy])
          : stud2[sortBy].localeCompare(stud1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +stud1[sortBy] - +stud2[sortBy]
          : +stud2[sortBy] - +stud1[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? reducingGrades(stud1[sortBy]) - reducingGrades(stud2[sortBy])
          : reducingGrades(stud2[sortBy]) - reducingGrades(stud1[sortBy]);

      default:
        return 0;
    }
  });

  return newArr;
}

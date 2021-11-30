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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArrOfStudents = [...students];

  function gradeAverage(grades: number[]): number {
    return grades.reduce((accum, grade) => accum + grade) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newArrOfStudents.sort((prevStudent, nextStudent) => (
        order === 'asc'
          ? prevStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(prevStudent[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:
      newArrOfStudents.sort((prevStudent, nextStudent) => (
        order === 'asc'
          ? +prevStudent[sortBy] - +nextStudent[sortBy]
          : +nextStudent[sortBy] - +prevStudent[sortBy]
      ));
      break;

    case SortType.AverageGrade:
      newArrOfStudents.sort((prevStudent, nextStudent) => (
        order === 'asc'
          ? gradeAverage(prevStudent.grades) - gradeAverage(nextStudent.grades)
          : gradeAverage(nextStudent.grades) - gradeAverage(prevStudent.grades)
      ));
      break;

    default:
      return newArrOfStudents;
  }

  return newArrOfStudents;
}


export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';


export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const studentstArray: Student[] = [...students];

  switch(sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentstArray.sort((firstStudent: Student, secondStudents: Student): number => (
        order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudents[sortBy])
          : secondStudents[sortBy].localeCompare(firstStudent[sortBy])
        )
      );

    case SortType.Age:
    case SortType.AverageGrade:
      return studentstArray.sort((firstStudent: Student, secondStudents: Student): number => (
        order === 'asc'
          ? +firstStudent[sortBy] - secondStudents[sortBy]
          : +secondStudents[sortBy] - firstStudent[sortBy]
        )
      );

      case SortType.AverageGrade:
        studentstArray.sort(
          (order === 'asc'
            ? (firstStudent: Student, secondStudents: Student): number => getAverage(firstStudent[sortBy]) - getAverage(secondStudents[sortBy])
            : (firstStudent: Student, secondStudents: Student): number => getAverage(secondStudents[sortBy]) - getAverage(firstStudent[sortBy]))
          );

      default:
        break;
  }
}

function getAverage(grades: number[]): number {
  return grades.reduce((prev: number, cur: number) => prev + cur, 0) / grades.length;
}

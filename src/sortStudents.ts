
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverage(student: Student): number {
  return student.grades
    .reduce((prev: number, grade: number) => prev + grade, 0)
   / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentstArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      studentstArray.sort(
        (firstStudent: Student, secondStudents: Student): number => (
          order === 'asc'
            ? firstStudent[sortBy].localeCompare(secondStudents[sortBy])
            : secondStudents[sortBy].localeCompare(firstStudent[sortBy])
        ),
      );
      break;

    case SortType.Age:
    case SortType.Married:

      studentstArray.sort(
        (firstStudent: Student, secondStudents: Student): number => (
          order === 'asc'
            ? +firstStudent[sortBy] - +secondStudents[sortBy]
            : +secondStudents[sortBy] - +firstStudent[sortBy]
        ),
      );
      break;

    case SortType.AverageGrade:
      studentstArray.sort(
        order === 'asc'
          ? (firstStudent: Student, secondStudents: Student): number => (
            getAverage(firstStudent) - getAverage(secondStudents)
          )
          : (firstStudent: Student, secondStudents: Student): number => (
            getAverage(secondStudents) - getAverage(firstStudent)
          ),
      );
      break;

    default:
      break;
  }

  return studentstArray;
}

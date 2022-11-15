
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

function getAverage(number: number[]): number {
  return number.reduce((sum, x) => sum + x, 0) / number.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudent: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudent.sort((student: Student, nextStudent: Student) => (
          student[sortBy].localeCompare(nextStudent[sortBy])
        ))
        : copyStudent.sort((student: Student, nextStudent: Student) => (
          nextStudent[sortBy].localeCompare(student[sortBy])
        ));

    case SortType.Age:
    case SortType.Married:
      return copyStudent.sort((
        student: Student,
        nextStudent: Student,
      ) => (
        order === 'asc'
          ? Number(student[sortBy]) - Number(nextStudent[sortBy])
          : Number(nextStudent[sortBy]) - Number(student[sortBy])
      ));

    case SortType.AverageGrade:
      if (order === 'asc') {
        copyStudent.sort(
          (student, nextStudent) => getAverage(student.grades)
            - getAverage(nextStudent.grades),
        );
      } else {
        copyStudent.sort(
          (student, nextStudent) => getAverage(nextStudent.grades)
            - getAverage(student.grades),
        );
      }

      break;

    default:
      throw new Error('Can not sort by that parameters');
  }

  return copyStudent;
}

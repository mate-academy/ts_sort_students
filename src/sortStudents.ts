export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'avgGrade',
}

export type SortOrder = 'asc' | 'desc';

function getStudentAvgMark(marks: number[]): number {
  return marks.reduce((total, mark) => {
    return total + mark;
  }, 0) / marks.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  const sortOrder: number = order === 'asc'
    ? 1
    : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((currStudent, nextStudent) => {
        return sortOrder * (
          currStudent[sortBy].localeCompare(nextStudent[sortBy])
        );
      });
      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((currStudent, nextStudent) => {
        return sortOrder * ((+currStudent[sortBy]) - (+nextStudent[sortBy]));
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((currStudent, nextStudent) => {
        const currStudAvgMark: number = getStudentAvgMark(currStudent.grades);
        const nextStudAvgMark: number = getStudentAvgMark(nextStudent.grades);

        return sortOrder * (currStudAvgMark - nextStudAvgMark);
      });
      break;

    default:
      break;
  }

  return studentsCopy;
}

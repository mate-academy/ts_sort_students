
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
  AverageGrade = 'average',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(marks: number[]): number {
  return marks.reduce(
    (total, mark) => total + mark
    , 0,
  ) / marks.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortOrder: number = order === 'desc' ? -1 : 1;
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Age:
    case SortType.Married:
      copyStudents.sort(
        (student1: Student, student2: Student): number => {
          return sortOrder * (+(student1[sortBy]) - (+student2[sortBy]));
        },
      );
      break;

    case SortType.AverageGrade:
      copyStudents.sort(
        (student1: Student, student2: Student): number => {
          return sortOrder * (
            getAverageGrade(student1.grades) - getAverageGrade(student2.grades)
          );
        },
      );
      break;

    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort(
        (student1: Student, student2: Student): number => {
          return sortOrder * (student1[sortBy].localeCompare(student2[sortBy]));
        },
      );
      break;

    default:
      break;
  }

  return copyStudents;
}

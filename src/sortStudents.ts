interface Student {
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

type SortOrder = 'asc' | 'desc';

function getAverageG(num: number[]): number {
  return num.reduce((prev: number, item: number) => prev + item);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | string {
  const copyOfStudents = students.map((item: Student) => {
    return { ...item };
  });

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudents.sort((student1: Student, student2: Student) => (
        order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy])
      ));
      break;
    case SortType.Age:
      copyOfStudents.sort((student1: Student, student2: Student) => (
        order === 'asc'
          ? student1[sortBy] - (student2[sortBy])
          : student2[sortBy] - (student1[sortBy])
      ));
      break;
    case SortType.Married:
      copyOfStudents.sort((student1: Student, student2: Student) => {
        if (student1[sortBy] === student2[sortBy]) {
          return 0;
        }

        if (order === 'asc') {
          return student1[sortBy] ? 1 : -1;
        }

        return student1[sortBy] ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      copyOfStudents.sort((student1: Student, student2: Student) => (
        order === 'asc'
          ? getAverageG(student1[sortBy]) - getAverageG(student2[sortBy])
          : getAverageG(student2[sortBy]) - getAverageG(student1[sortBy])
      ));
      break;

    default:
      break;
  }

  return copyOfStudents;
}

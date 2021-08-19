// describe Student type
interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}
// create and export SortType enum

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}
// create SortOrder type
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

function getAverage(numbers: number[]): number {
  return numbers.reduce((sum: number, number: number) => sum + number);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | string {
  const studentsCopy = students.map((student: Student) => (
    { ...student }
  ));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((student1: Student, student2: Student) => (
        order === SortOrder.asc
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy])
      ));
      break;

    case SortType.Age:
      studentsCopy.sort((student1: Student, student2: Student) => (
        order === SortOrder.asc
          ? student1[sortBy] - student2[sortBy]
          : student2[sortBy] - student1[sortBy]
      ));
      break;

    case SortType.Married:
      studentsCopy.sort((student1: Student, student2: Student) => {
        if (student1[sortBy] === student2[sortBy]) {
          return 0;
        }

        if (order === SortOrder.asc) {
          return student1[sortBy] ? 1 : -1;
        }

        return student1[sortBy] ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((student1: Student, student2: Student) => (
        order === SortOrder.asc
          ? getAverage(student1[sortBy]) - getAverage(student2[sortBy])
          : getAverage(student2[sortBy]) - getAverage(student1[sortBy])
      ));
      break;

    default:
      return 'Invalid data!';
  }

  return studentsCopy;
}

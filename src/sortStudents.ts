// describe Student type
// create and export SortType enum

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

enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = students
    .map((student: Student) => ({ ...student }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((studentA: Student, studentB: Student) => (
        order === SortOrder.Ascending
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy])
      ));
      break;

    case SortType.Age:
      copyStudents.sort((studentA: Student, studentB: Student) => (
        order === SortOrder.Ascending
          ? studentA[sortBy] - studentB[sortBy]
          : studentB[sortBy] - studentA[sortBy]
      ));
      break;

    case SortType.AverageGrade:
      copyStudents.sort((studentA: Student, studentB: Student) => (
        order === SortOrder.Ascending
          ? getAverageGrade(studentA[sortBy])
          - getAverageGrade(studentB[sortBy])
          : getAverageGrade(studentB[sortBy])
          - getAverageGrade(studentA[sortBy])
      ));
      break;

    case SortType.Married:
      copyStudents.sort((studentA: Student, studentB: Student) => {
        if (studentA[sortBy] === studentB[sortBy]) {
          return 0;
        }

        if (order === SortOrder.Ascending) {
          return studentA[sortBy] ? 1 : -1;
        }

        return studentA[sortBy] ? -1 : 1;
      });
      break;

    default:
      break;
  }

  return copyStudents;
}

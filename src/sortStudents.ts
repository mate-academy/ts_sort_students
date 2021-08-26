// describe Student type
// create and export SortType enum
// create SortOrder type

function getAverageGrade(grades: number[]): number {
  return grades
    .reduce((sum: number, grade: number) => sum + grade, 0) / grades.length;
}

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export function sortStudents(
  students: Student[],
  sortBy: string,
  order: string,
): Student[] {
  const studentsCopy = students.map((student: Student) => ({ ...student }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((studentX: Student, studentY: Student) => (
        order === SortOrder.Ascending
          ? studentX[sortBy].localeCompare(studentY[sortBy])
          : studentY[sortBy].localeCompare(studentX[sortBy])
      ));

      break;

    case SortType.Age:
      studentsCopy
        .sort((studentX: Student, studentY: Student) => (
          order === SortOrder.Ascending
            ? studentX[sortBy] - studentY[sortBy]
            : studentY[sortBy] - studentX[sortBy]
        ));

      break;

    case SortType.Married:
      studentsCopy
        .sort((studentX: Student, studentY: Student) => (
          order === SortOrder.Ascending
            ? Number(studentX[sortBy]) - Number(studentY[sortBy])
            : Number(studentY[sortBy]) - Number(studentX[sortBy])
        ));

      break;

    case SortType.AverageGrade:
      studentsCopy
        .sort((studentX: Student, studentY: Student) => (
          order === SortOrder.Ascending
            ? getAverageGrade(studentX[sortBy])
              - getAverageGrade(studentY[sortBy])
            : getAverageGrade(studentY[sortBy])
              - getAverageGrade(studentX[sortBy])
        ));

      break;

    default:
      break;
  }

  return studentsCopy;
}

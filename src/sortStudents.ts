// describe Student type
// create and export SortType enum
// create SortOrder type

type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
};

export type SortOrder = 'asc' | 'desc';

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade= 'grades',
}

function calсAverageMarks(student: Student): number {
  const allMarks: number = student.grades
    .reduce((sum: number, mark: number) => sum + mark);

  return allMarks / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: string,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort(
        (studentA: Student, studentB: Student) => {
          return order === 'asc'
            ? studentA[sortBy].localeCompare(studentB[sortBy])
            : studentA[sortBy].localeCompare(studentB[sortBy]);
        },
      );
      break;

    case SortType.Age:
      studentsCopy.sort(
        (studentA: Student, studentB: Student) => {
          return order === 'asc'
            ? studentA[sortBy] - studentB[sortBy]
            : studentB[sortBy] - studentA[sortBy];
        },
      );
      break;

    case SortType.Married:
      studentsCopy.sort(
        (studentA: Student, studentB: Student) => {
          return order === 'asc'
            ? +studentA[sortBy] - +studentB[sortBy]
            : +studentB[sortBy] - +studentA[sortBy];
        },
      );
      break;

    case SortType.AverageGrade:
      studentsCopy.sort(
        (studentA: Student, studentB: Student) => {
          return order === 'asc'
            ? calсAverageMarks(studentA) - calсAverageMarks(studentB)
            : calсAverageMarks(studentB) - calсAverageMarks(studentA);
        },
      );
      break;

    default:
      break;
  }

  return studentsCopy;
}

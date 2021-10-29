export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const output: Student[] = students
    .map((student: Student) => ({ ...student }));

  const averageGrade = function getAverageGrade(student: Student): number {
    return student.grades
      .reduce((sum, grade) => sum + grade, 0) / student.grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        output.sort((firstStudent, secondStudent) => firstStudent.name
          .localeCompare(secondStudent.name));
      }

      if (order === 'desc') {
        output.sort((firstStudent, secondStudent) => secondStudent.name
          .localeCompare(firstStudent.name));
      }
      break;

    case SortType.Surname:
      if (order === 'asc') {
        output.sort((firstStudent, secondStudent) => firstStudent.surname
          .localeCompare(secondStudent.surname));
      }

      if (order === 'desc') {
        output.sort((firstStudent, secondStudent) => secondStudent.surname
          .localeCompare(firstStudent.surname));
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        output.sort((firstStudent, secondStudent) => firstStudent.age
          - secondStudent.age);
      }

      if (order === 'desc') {
        output.sort((firstStudent, secondStudent) => secondStudent.age
          - firstStudent.age);
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        output
          .sort((firstStudent, secondStudent) => Number(firstStudent.married)
            - Number(secondStudent.married));
      }

      if (order === 'desc') {
        output
          .sort((firstStudent, secondStudent) => Number(secondStudent.married)
            - Number(firstStudent.married));
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        output.sort((firstStudent, secondStudent) => averageGrade(firstStudent)
          - averageGrade(secondStudent));
      }

      if (order === 'desc') {
        output.sort((firstStudent, secondStudent) => averageGrade(secondStudent)
          - averageGrade(firstStudent));
      }
      break;

    default:
  }

  return output;
}

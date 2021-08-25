// describe Student type
interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

// create and export SortType enum
export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
enum SortOrder {
  asc = 'asc',
  desc = 'desc'
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | string {
  const copiedStudent = students.map((person) => ({ ...person }));

  function calcAverage(grades: number[]): number {
    return grades
      .reduce((accumulator: number, sum: number) => accumulator + sum, 0)
      / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copiedStudent.sort((studentA: Student, studentB: Student) => {
        return order === SortOrder.asc
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });
      break;

    case SortType.Age:
      copiedStudent.sort((studentA: Student, studentB: Student) => {
        return order === SortOrder.asc
          ? studentA[sortBy] - studentB[sortBy]
          : studentB[sortBy] - studentA[sortBy];
      });
      break;

    case SortType.Married:

      copiedStudent.sort((studentA: Student, studentB: Student) => {
        if (studentA[sortBy] === studentB[sortBy]) {
          return 0;
        }

        if (order === SortOrder.asc) {
          return studentA[sortBy] ? 1 : -1;
        }

        return studentA[sortBy] ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      copiedStudent.sort((studentA: Student, studentB: Student) => {
        return order === SortOrder.asc
          ? calcAverage(studentA[sortBy]) - calcAverage(studentB[sortBy])
          : calcAverage(studentB[sortBy]) - calcAverage(studentA[sortBy]);
      });
      break;

    default:
      break;
  }

  return copiedStudent;
}

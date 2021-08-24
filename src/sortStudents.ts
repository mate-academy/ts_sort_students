type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

function getAverageGrade(gradesArr: number[]): number {
  return gradesArr.reduce((sum: number, num: number) => sum + num);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order:SortOrder,
): Student[] {
  const copyStudents: Student[] = students.map((x: Student) => ({ ...x }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((studentOne: Student, studentTwo: Student) => (
        order === SortOrder.asc
          ? studentOne[sortBy].localeCompare(studentTwo[sortBy])
          : studentTwo[sortBy].localeCompare(studentOne[sortBy])
      ));
      break;

    case SortType.Age:
      copyStudents.sort((studentOne: Student, studentTwo: Student) => (
        order === SortOrder.asc
          ? studentOne[sortBy] - studentTwo[sortBy]
          : studentTwo[sortBy] - studentOne[sortBy]
      ));
      break;

    case SortType.Married:
      copyStudents.sort((studentOne: Student, studentTwo: Student) => {
        if (studentOne[sortBy] === studentTwo[sortBy]) {
          return 0;
        }

        if (order === SortOrder.asc) {
          return studentOne[sortBy] ? 1 : -1;
        }

        return studentOne[sortBy] ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      copyStudents.sort((studentOne: Student, studentTwo: Student) => (
        order === SortOrder.asc
          ? getAverageGrade(studentOne[sortBy])
          - getAverageGrade(studentTwo[sortBy])
          : getAverageGrade(studentTwo[sortBy])
          - getAverageGrade(studentOne[sortBy])
      ));
      break;
    default: break;
  }

  return copyStudents;
}

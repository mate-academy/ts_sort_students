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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(totalGrades: number[]): number {
  const sum = totalGrades.reduce((prev, item) => prev + item, 0);

  return sum / totalGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];
  const typeOfOrder = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      return copyOfStudents.sort((firstStudent, secondStudent) => (
        typeOfOrder
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy])
      ));

    case SortType.Surname:
      return copyOfStudents.sort((firstStudent, secondStudent) => (
        typeOfOrder
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy])
      ));

    case SortType.Age:
      return copyOfStudents.sort((firstStudent, secondStudent) => (
        typeOfOrder
          ? firstStudent[sortBy] - secondStudent[sortBy]
          : secondStudent[sortBy] - firstStudent[sortBy]
      ));

    case SortType.Married:
      return copyOfStudents.sort((firstStudent, secondStudent) => (
        typeOfOrder
          ? +firstStudent[sortBy] - +secondStudent[sortBy]
          : +secondStudent[sortBy] - +firstStudent[sortBy]
      ));

    case SortType.AverageGrade:
      return copyOfStudents.sort((firstStudent, secondStudent) => (
        typeOfOrder
          ? averageGrade(
            firstStudent[sortBy],
          ) - averageGrade(secondStudent[sortBy])
          : averageGrade(
            secondStudent.grades,
          ) - averageGrade(firstStudent[sortBy])
      ));

    default:
      return students;
  }
}

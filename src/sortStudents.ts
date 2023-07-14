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

function calculateAverageGrade(grades: number[]): number {
  return grades.reduce((prev, grade) => grade + prev) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: string,
): Student[] {
  let sortedStudents: Student[] = [...students];
  const sortOrder = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents = sortedStudents.sort(
        (firstStudent, nextStudent) => sortOrder * firstStudent[sortBy]
          .localeCompare(nextStudent[sortBy]),
      );
      break;

    case SortType.Age:
    case SortType.Married:
      sortedStudents = sortedStudents.sort(
        (firstStudent, nextStudent) => (Number(firstStudent[sortBy])
          - Number(nextStudent[sortBy])) * sortOrder,
      );
      break;

    case SortType.AverageGrade:
      sortedStudents = sortedStudents.sort(
        (firstStudent, nextStudent) => (
          calculateAverageGrade(firstStudent.grades)
          - calculateAverageGrade(nextStudent.grades)
        ) * sortOrder,
      );
      break;

    default:
      break;
  }

  return sortedStudents;
}

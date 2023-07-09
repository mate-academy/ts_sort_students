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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: string,
): Student[] {
  let sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        sortedStudents = sortedStudents.sort(
          (firstStudent, nextStudent) => firstStudent[sortBy]
            .localeCompare(nextStudent[sortBy]),
        );
      } else {
        sortedStudents = sortedStudents.sort(
          (firstStudent, nextStudent) => nextStudent[sortBy]
            .localeCompare(firstStudent[sortBy]),
        );
      }
      break;

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        sortedStudents = sortedStudents.sort(
          (firstStudent, nextStudent) => Number(firstStudent[sortBy])
            - Number(nextStudent[sortBy]),
        );
      } else {
        sortedStudents = sortedStudents.sort(
          (firstStudent, nextStudent) => Number(nextStudent[sortBy])
            - Number(firstStudent[sortBy]),
        );
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedStudents = sortedStudents.sort(
          (firstStudent, nextStudent) => (firstStudent.grades.reduce(
            (prev, grade) => grade + prev,
          ) / firstStudent.grades.length)
          - (nextStudent.grades.reduce(
            (prev, grade) => grade + prev,
          ) / nextStudent.grades.length),
        );
      } else {
        sortedStudents = sortedStudents.sort(
          (firstStudent, nextStudent) => (nextStudent.grades.reduce(
            (prev, grade) => grade + prev,
          ) / nextStudent.grades.length)
          - (firstStudent.grades.reduce(
            (prev, grade) => grade + prev,
          ) / firstStudent.grades.length),
        );
      }
      break;

    default:
      break;
  }

  return sortedStudents;
}

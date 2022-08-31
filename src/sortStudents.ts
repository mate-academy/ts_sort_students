
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function getAverageGrade(student: Student): number {
    return student.grades
      .reduce((sum: number, grade: number) => (
        sum + el
      ), 0) / student.grades.length;
  }

  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      return order === 'asc'
        ? studentsCopy
          .sort((student1: Student, student2: Student) => (
            student1[sortBy].localeCompare(student2[sortBy])
          ))
        : studentsCopy
          .sort((student1: Student, student2: Student) => (
            student2[sortBy].localeCompare(student1[sortBy])
          ));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy
          .sort((student1: Student, student2: Student) => (
            Number(student1[sortBy]) - Number(student2[sortBy])
          ))
        : studentsCopy
          .sort((student1: Student, student2: Student) => (
            Number(student2[sortBy]) - Number(student1[sortBy])
          ));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy
          .sort((student1: Student, student2: Student) => {
            const average1 = getAverageGrade(student1);
            const average2 = getAverageGrade(student2);

            return average1 - average2;
          })
        : studentsCopy
          .sort((student1: Student, student2: Student) => {
            const average1 = getAverageGrade(student1);
            const average2 = getAverageGrade(student2);

            return average2 - average1;
          });

    default:
      return students;
  }
}

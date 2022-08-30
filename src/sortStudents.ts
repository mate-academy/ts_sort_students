
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
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return studentsCopy
          .sort((student1: Student, student2: Student) => (
            student1[sortBy].toString()
              .localeCompare(student2[sortBy].toString())
          ));
      }

      return studentsCopy
        .sort((student1: Student, student2: Student) => (
          student2[sortBy].toString()
            .localeCompare(student1[sortBy].toString())
        ));

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return studentsCopy
          .sort((student1: Student, student2: Student) => (
            Number(student1[sortBy]) - Number(student2[sortBy])
          ));
      }

      return studentsCopy
        .sort((student1: Student, student2: Student) => (
          Number(student2[sortBy]) - Number(student1[sortBy])
        ));

    case SortType.AverageGrade:
      if (order === 'asc') {
        return studentsCopy
          .sort((student1: Student, student2: Student) => {
            const average1 = student1.grades
              .reduce((sum: number, el: number) => (
                sum + el
              ), 0) / student1.grades.length;
            const average2 = student2.grades
              .reduce((sum: number, el: number) => (
                sum + el
              ), 0) / student2.grades.length;

            return average1 - average2;
          });
      }

      return studentsCopy
        .sort((student1: Student, student2: Student) => {
          const average1 = student1.grades.reduce((sum: number, el: number) => (
            sum + el
          ), 0) / student1.grades.length;
          const average2 = student2.grades.reduce((sum: number, el: number) => (
            sum + el
          ), 0) / student2.grades.length;

          return average2 - average1;
        });

    default:
      return students;
  }
}

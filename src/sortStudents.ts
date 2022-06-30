
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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(student: Student):number {
  const gradesSum = student.grades.reduce(
    (total :number, grade :number) => total + grade,
  );

  return gradesSum / student.grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
) :Student[] {
  const studentsCopied: Student[] = students;

  switch (sortBy) {
    case ('name'):
    case ('surname'):
      if (order === 'asc') {
        return studentsCopied.sort(
          (
            student1: Student,
            student2: Student,
          ) => student1[sortBy].localeCompare(student2[sortBy]),
        );
      }

      return studentsCopied.sort(
        (
          student1: Student,
          student2: Student,
        ) => student2[sortBy].localeCompare(student1[sortBy]),
      );

    case ('age'):
    case ('married'):
      if (order === 'asc') {
        return studentsCopied.sort(
          (
            student1: Student,
            student2: Student,
          ) => Number(student1[sortBy]) - Number(student2[sortBy]),
        );
      }

      return studentsCopied.sort(
        (
          student1: Student,
          student2: Student,
        ) => Number(student2[sortBy]) - Number(student1[sortBy]),
      );

    case (SortType.AverageGrade):
      if (order === 'asc') {
        return studentsCopied.sort(
          (
            student1: Student,
            student2: Student,
          ) => getAverageGrade(student1) - getAverageGrade(student2),
        );
      }

      return studentsCopied.sort(
        (
          student1: Student,
          student2: Student,
        ) => getAverageGrade(student2) - getAverageGrade(student1),
      );

    default:
      return studentsCopied;
  }
}

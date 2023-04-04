
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudentsArray: Student[] = [...students];

  switch (order) {
    case 'asc':
      switch (sortBy) {
        case (SortType.Name):
          newStudentsArray.sort((
            student1: Student,
            student2: Student,
          ) => student1.name.localeCompare(student2.name));
          break;

        case (SortType.Surname):
          newStudentsArray.sort((
            student1: Student,
            student2: Student,
          ) => student1.surname.localeCompare(student2.surname));
          break;

        case (SortType.Age):
          newStudentsArray.sort((
            student1: Student,
            student2: Student,
          ) => student1.age - student2.age);
          break;

        case (SortType.Married):
          newStudentsArray.sort((
            student1: Student,
            student2: Student,
          ) => Number(student1.married) - Number(student2.married));
          break;

        case (SortType.AverageGrade):
          newStudentsArray.sort((student1: Student, student2: Student) => {
            const student1AverageGrade: number = student1.grades.reduce((
              acc: number,
              val: number,
            ) => acc + val, 0) / student1.grades.length;

            const student2AverageGrade: number = student2.grades.reduce((
              acc: number,
              val: number,
            ) => acc + val, 0) / student2.grades.length;

            return student1AverageGrade - student2AverageGrade;
          });
          break;

        default:
          throw new Error();
      }
      break;

    case 'desc':
      switch (sortBy) {
        case (SortType.Name):
          newStudentsArray.sort((
            student1: Student,
            student2: Student,
          ) => student2.name.localeCompare(student1.name));
          break;

        case (SortType.Surname):
          newStudentsArray.sort((
            student1: Student,
            student2: Student,
          ) => student2.surname.localeCompare(student1.surname));
          break;

        case (SortType.Age):
          newStudentsArray.sort((
            student1: Student,
            student2: Student,
          ) => student2.age - student1.age);
          break;

        case (SortType.Married):
          newStudentsArray.sort((
            student1: Student,
            student2: Student,
          ) => Number(student2.married) - Number(student1.married));
          break;

        case (SortType.AverageGrade):
          newStudentsArray.sort((student1: Student, student2: Student) => {
            const student1AverageGrade: number = student1.grades.reduce((
              acc: number,
              val: number,
            ) => acc + val, 0) / student1.grades.length;
            const student2AverageGrade: number = student2.grades.reduce((
              acc: number,
              val: number,
            ) => acc + val, 0) / student2.grades.length;

            return student2AverageGrade - student1AverageGrade;
          });
          break;

        default:
          throw new Error();
      }
      break;

    default:
      throw new Error();
  }

  return newStudentsArray;
}

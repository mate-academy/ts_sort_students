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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function calcAvgMark(value: number[] = []):number {
  return value.reduce((accum, grade) => accum + grade, 0) / value.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudentsArray = students.concat();

  switch (sortBy) {
    case SortType.Name:
      newStudentsArray.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1.name.localeCompare(student2.name)
          : student2.name.localeCompare(student1.name);
      });
      break;

    case SortType.Surname:
      newStudentsArray.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1.surname.localeCompare(student2.surname)
          : student2.surname.localeCompare(student1.surname);
      });
      break;

    case SortType.Age:
      newStudentsArray.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1.age - student2.age
          : student2.age - student1.age;
      });
      break;

    case SortType.Married:
      newStudentsArray.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? Number(student1.married) - Number(student2.married)
          : Number(student2.married) - Number(student1.married);
      });
      break;

    case SortType.AverageGrade:
      newStudentsArray.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? calcAvgMark(student1.grades) - calcAvgMark(student2.grades)
          : calcAvgMark(student2.grades) - calcAvgMark(student1.grades);
      });
      break;

    default:
      break;
  }

  return newStudentsArray;
}

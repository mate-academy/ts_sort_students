
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: Boolean;
  grades: Array<number>;
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function getAverageGrades(gradesArray: Array<number>): number {
  return gradesArray
    .reduce((acc: number, mark: number) => acc + mark, 0) / gradesArray.length;
}

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
)

  : Array<Student> {
  const studentsCopy: Array<Student> = [...students];

  switch (sortBy) {
    case SortType.Name:
      return studentsCopy.sort((pupil1: Student, pupil2: Student) => {
        return order === 'asc'
          ? pupil1.name.localeCompare(pupil2.name)
          : pupil2.name.localeCompare(pupil1.name);
      });

    case SortType.Surname:
      return studentsCopy.sort((pupil1: Student, pupil2: Student) => {
        return order === 'asc'
          ? pupil1.surname.localeCompare(pupil2.surname)
          : pupil2.surname.localeCompare(pupil1.surname);
      });

    case SortType.Age:
      return studentsCopy.sort((pupil1: Student, pupil2: Student) => {
        return order === 'asc'
          ? pupil1.age - pupil2.age
          : pupil2.age - pupil1.age;
      });

    case SortType.Married:
      return studentsCopy.sort((pupil1: Student, pupil2: Student) => {
        return order === 'asc'
          ? +pupil1.married - +pupil2.married
          : +pupil2.married - +pupil1.married;
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((pupil1: Student, pupil2: Student) => {
        return order === 'asc'
          ? getAverageGrades(pupil1.grades) - getAverageGrades(pupil2.grades)
          : getAverageGrades(pupil2.grades) - getAverageGrades(pupil1.grades);
      });

    default:
      throw new Error('You have entered incorrect data');
  }
}

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],

}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

const avarageGrade = (student: Student) :number => {
  return student.grades.reduce((prev:number, grade: number) => prev + grade)
    / student.grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const sortedStudents : Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? sortedStudents.sort((firstStudent, secondStudent) => (
          firstStudent.name.localeCompare(secondStudent.name)
        ))
        : sortedStudents.sort((firstStudent, secondStudent) => (
          secondStudent.name.localeCompare(firstStudent.name)
        ));

    case SortType.Surname:
      return order === 'asc'
        ? sortedStudents.sort((firstStudent, secondStudent) => (
          firstStudent.surname.localeCompare(secondStudent.surname)
        ))
        : sortedStudents.sort((firstStudent, secondStudent) => (
          secondStudent.surname.localeCompare(firstStudent.surname)
        ));

    case SortType.Married:
      return order === 'asc'
        ? sortedStudents.sort((firstStudent, secondStudent) => (
          Number(firstStudent.married) - Number(secondStudent.married)
        ))
        : sortedStudents.sort((firstStudent, secondStudent) => (
          Number(secondStudent.married) - Number(firstStudent.married)
        ));

    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedStudents.sort((firstStudent, secondStudent) => (
          avarageGrade(firstStudent) - avarageGrade(secondStudent)
        ))
        : sortedStudents.sort((firstStudent, secondStudent) => (
          avarageGrade(secondStudent) - avarageGrade(firstStudent)
        ));

    case SortType.Age:
      return order === 'asc'
        ? sortedStudents.sort((firstStudent, secondStudent) => (
          firstStudent.age - secondStudent.age))
        : sortedStudents.sort((firstStudent, secondStudent) => (
          secondStudent.age - firstStudent.age));

    default:
      return [];
  }
}

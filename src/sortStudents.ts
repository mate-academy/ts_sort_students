export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents: Student[] = JSON.parse(JSON.stringify(students));

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? copyOfStudents
          .sort((currentStudent: Student, nextStudent: Student) => {
            return currentStudent.name.localeCompare(nextStudent.name);
          })
        : copyOfStudents
          .sort((currentStudent: Student, nextStudent: Student) => {
            return nextStudent.name.localeCompare(currentStudent.name);
          });

    case SortType.Surname:
      return order === 'asc'
        ? copyOfStudents
          .sort((currentStudent: Student, nextStudent: Student) => {
            return currentStudent.surname.localeCompare(nextStudent.surname);
          })
        : copyOfStudents
          .sort((currentStudent: Student, nextStudent: Student) => {
            return nextStudent.surname.localeCompare(currentStudent.surname);
          });

    case SortType.Age:
      return order === 'asc'
        ? copyOfStudents
          .sort((currentStudent: Student, nextStudent: Student) => {
            return currentStudent.age - nextStudent.age;
          })
        : copyOfStudents
          .sort((currentStudent: Student, nextStudent: Student) => {
            return nextStudent.age - currentStudent.age;
          });

    case SortType.Married:
      return order === 'asc'
        ? copyOfStudents
          .sort((currentStudent: Student, nextStudent: Student) => {
            return +currentStudent.married - +nextStudent.married;
          })
        : copyOfStudents
          .sort((currentStudent: Student, nextStudent: Student) => {
            return +nextStudent.married - +currentStudent.married;
          });

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyOfStudents
          .sort((currentStudent: Student, nextStudent: Student) => {
            const firstStudentAvg = currentStudent.grades
              .reduce((acc, mark) => {
                return acc + mark;
              }) / currentStudent.grades.length;

            const secondStudentAvg = nextStudent.grades
              .reduce((acc, mark) => {
                return acc + mark;
              }) / nextStudent.grades.length;

            return firstStudentAvg - secondStudentAvg;
          })
        : copyOfStudents
          .sort((currentStudent: Student, nextStudent: Student) => {
            const firstStudentAvg = currentStudent.grades
              .reduce((acc, mark) => {
                return acc + mark;
              }) / currentStudent.grades.length;

            const secondStudentAvg = nextStudent.grades
              .reduce((acc: number, mark: number) => {
                return acc + mark;
              }) / nextStudent.grades.length;

            return secondStudentAvg - firstStudentAvg;
          });

    default:
      throw new Error('Invalid sort type');
  }
}

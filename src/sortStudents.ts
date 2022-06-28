export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function sortByName(students: Student[], order: SortOrder): Student[] {
  const sortedStudents = students.sort((firstStudent, secondStudent) => {
    return firstStudent.name.localeCompare(secondStudent.name);
  });

  return order === 'asc'
    ? sortedStudents
    : sortedStudents.reverse();
}

function sortBySurname(students: Student[], order: SortOrder): Student[] {
  const sortedStudents = students.sort((firstStudent, secondStudent) => {
    return firstStudent.surname.localeCompare(secondStudent.surname);
  });

  return order === 'asc'
    ? sortedStudents
    : sortedStudents.reverse();
}

function sortByAge(students: Student[], order: SortOrder): Student[] {
  return order === 'asc'
    ? students.sort(
      (firstStudent, secondStudent) => firstStudent.age - secondStudent.age,
    )
    : students.sort(
      (firstStudent, secondStudent) => secondStudent.age - firstStudent.age,
    );
}

function sortByMarried(students: Student[], order: SortOrder): Student[] {
  return order === 'asc'
    ? students.sort(
      (firstStudent, secondStudent) => {
        return Number(firstStudent.married) - Number(secondStudent.married);
      },
    )
    : students.sort(
      (firstStudent, secondStudent) => {
        return Number(secondStudent.married) - Number(firstStudent.married);
      },
    );
}

function sortByGrades(students: Student[], order: SortOrder): Student[] {
  return order === 'asc'
    ? students.sort((firstStudent, secondStudent) => {
      const value1 = firstStudent.grades.reduce((sum, grade) => sum + grade)
      / firstStudent.grades.length;
      const value2 = secondStudent.grades.reduce((sum, grade) => sum + grade)
      / secondStudent.grades.length;

      return value1 - value2;
    })
    : students.sort((firstStudent, secondStudent) => {
      const value1 = firstStudent.grades.reduce((sum, grade) => sum + grade)
      / firstStudent.grades.length;
      const value2 = secondStudent.grades.reduce((sum, grade) => sum + grade)
      / secondStudent.grades.length;

      return value2 - value1;
    });
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrOfStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      return sortByName(arrOfStudents, order);
    case SortType.Surname:
      return sortBySurname(arrOfStudents, order);
    case SortType.Age:
      return sortByAge(arrOfStudents, order);
    case SortType.Married:
      return sortByMarried(arrOfStudents, order);
    case SortType.AverageGrade:
      return sortByGrades(arrOfStudents, order);
    default:
      return arrOfStudents;
  }
}

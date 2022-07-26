
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
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function avagareGrade(student: Student) : number {
  return student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
}

export function sortStudents(
  students: Student [],
  sortBy: SortType,
  order: SortOrder,
) : Student [] {
  const studentCopy = [...students];

  studentCopy.sort((firstStudent, secondStudent) => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return firstStudent.name.localeCompare(secondStudent.name);
        }

        return secondStudent.name.localeCompare(firstStudent.name);

      case SortType.Surname:
        if (order === 'asc') {
          return firstStudent.surname.localeCompare(secondStudent.surname);
        }

        return secondStudent.surname.localeCompare(firstStudent.surname);

      case SortType.Age:
        if (order === 'asc') {
          return firstStudent.age - secondStudent.age;
        }

        return secondStudent.age - firstStudent.age;

      case SortType.AverageGrade:
        if (order === 'asc') {
          return avagareGrade(firstStudent) - avagareGrade(secondStudent);
        }

        return avagareGrade(secondStudent) - avagareGrade(firstStudent);

      case SortType.Married:
        if (order === 'asc') {
          return Number(firstStudent.married) - Number(secondStudent.married);
        }

        return Number(secondStudent.married) - Number(firstStudent.married);

      default:
        return 0;
    }
  });

  return studentCopy;
}

interface Student {
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
  AverageGrade = 'grade',
}

enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

function sumGrades(student: Student) :number {
  return student.grades.reduce(
    (sum: number, n: number) => sum + n, 0,
  ) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === SortOrder.asc) {
        studentsCopy.sort(
          (x: Student, y: Student) => x[sortBy].localeCompare(y[sortBy]),
        );
      } else {
        studentsCopy.sort(
          (x: Student, y: Student) => y[sortBy].localeCompare(x[sortBy]),
        );
      }
      break;

    case SortType.Age:
      if (order === SortOrder.asc) {
        studentsCopy.sort(
          (x: Student, y: Student) => x.age - y.age,
        );
      } else {
        studentsCopy.sort((x: Student, y: Student) => y.age - x.age);
      }

      break;

    case SortType.Married:
      if (order === SortOrder.asc) {
        studentsCopy.sort((x: Student, y: Student) => +x.married - +y.married);
      } else {
        studentsCopy.sort((x: Student, y: Student) => +y.married - +x.married);
      }

      break;

    case SortType.AverageGrade:
      if (order === SortOrder.asc) {
        studentsCopy.sort(
          (x: Student, y: Student) => sumGrades(x) - sumGrades(y),
        );
      } else {
        studentsCopy.sort(
          (x: Student, y: Student) => sumGrades(y) - sumGrades(x),
        );
      }

      break;

    default:
      return studentsCopy;
  }

  return studentsCopy;
}

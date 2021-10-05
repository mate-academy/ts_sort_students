// describe Student type
// create and export SortType enum
// create SortOrder type

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

function averageMark(marks: number[] = []):number {
  return marks.reduce((acc, mark) => acc + mark, 0) / marks.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      copyStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
      break;
    case SortType.Surname:
      copyStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      });
      break;
    case SortType.Age:
      copyStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      });
      break;

    case SortType.Married:
      copyStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? +a.married - +b.married
          : +b.married - +a.married;
      });
      break;

    case SortType.AverageGrade:
      copyStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? averageMark(a.grades) - averageMark(b.grades)
          : averageMark(b.grades) - averageMark(a.grades);
      });
      break;
    default:
      break;
  }

  return copyStudents;
}

// describe Student type
// create and export SortType enum
// create SortOrder type

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
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

function sumGrades(grades:number[]):number {
  return grades.reduce((a:number, b:number) => a + b) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const copyStudents:Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        copyStudents.sort(
          (a:Student, b:Student) => a[sortBy].localeCompare(b[sortBy]),
        );
      } else {
        copyStudents.sort(
          (a:Student, b:Student) => b[sortBy].localeCompare(a[sortBy]),
        );
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        copyStudents.sort((a:Student, b:Student) => a[sortBy] - b[sortBy]);
      } else {
        copyStudents.sort((a:Student, b:Student) => b[sortBy] - a[sortBy]);
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        copyStudents.sort(
          (a:Student, b:Student) => +a[sortBy] - +b[sortBy],
        );
      } else {
        copyStudents.sort(
          (a:Student, b:Student) => +b[sortBy] - +a[sortBy],
        );
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        copyStudents.sort(
          (a:Student, b:Student) => sumGrades(a[sortBy]) - sumGrades(b[sortBy]),
        );
      } else {
        copyStudents.sort(
          (a:Student, b:Student) => sumGrades(b[sortBy]) - sumGrades(a[sortBy]),
        );
      }
      break;

    default:
      break;
  }

  return copyStudents;
}

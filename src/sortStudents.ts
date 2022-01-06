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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

const avarageStudentGrade = (student: Student) :number => {
  return student.grades.reduce((prev:number, curent:number) => prev + curent)
    / student.grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  let sortedStudents : Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortedStudents = students.sort((a, b) => {
        return order === 'asc'
          ? a[`${sortBy}`].localeCompare(b[`${sortBy}`])
          : b[`${sortBy}`].localeCompare(a[`${sortBy}`]);
      });
      break;

    case SortType.Surname:
      sortedStudents = students.sort((a, b) => {
        return order === 'asc'
          ? a[`${sortBy}`].localeCompare(b[`${sortBy}`])
          : b[`${sortBy}`].localeCompare(a[`${sortBy}`]);
      });
      break;

    case SortType.Married:
      sortedStudents = students.sort((a, b) => {
        return order === 'asc'
          ? Number(a[`${sortBy}`]) - Number(b[`${sortBy}`])
          : Number(b[`${sortBy}`]) - Number(a[`${sortBy}`]);
      });
      break;

    case SortType.AverageGrade:
      sortedStudents = students.sort((a, b) => {
        return order === 'asc'
          ? avarageStudentGrade(a) - avarageStudentGrade(b)
          : avarageStudentGrade(b) - avarageStudentGrade(a);
      });
      break;

    case SortType.Age:
      sortedStudents = students.sort((a, b) => {
        return order === 'asc'
          ? a[`${sortBy}`] - b[`${sortBy}`]
          : b[`${sortBy}`] - a[`${sortBy}`];
      });
      break;

    default:
      return [];
  }

  return sortedStudents;
}

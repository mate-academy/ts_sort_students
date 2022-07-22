
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

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  let copyOfStudents: Student[];

  function calulateAverageGrade(grades: number[]): number {
    return grades
      .reduce((sum: number, x: number) => sum + x, 0)
      / grades.length;
  }

  switch (sortBy) {
    case 'name':
    case 'surname':
      copyOfStudents = [...students].sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case 'age':
      copyOfStudents = [...students].sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      });
      break;

    case 'married':
      copyOfStudents = [...students].sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.married.toString().localeCompare(b.married.toString())
          : b.married.toString().localeCompare(a.married.toString());
      });
      break;

    case 'grades':
      copyOfStudents = [...students].sort((a: Student, b: Student) => {
        return order === 'asc'
          ? calulateAverageGrade(a.grades) - calulateAverageGrade(b.grades)
          : calulateAverageGrade(b.grades) - calulateAverageGrade(a.grades);
      });
      break;

    default:
      break;
  }

  return copyOfStudents;
}

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: Array<number>;
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const getAverageGrade = (gradeList: number[]): number => {
    return (
      gradeList
        .reduce((total: number, grade: number) => total + grade, 0)
          / gradeList.length
    );
  };

  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      copiedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
      break;

    case SortType.Surname:
      copiedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      });
      break;

    case SortType.Age:
      copiedStudents.sort((a: Student, b: Student) => {
        return order === 'asc' ? a.age - b.age : b.age - a.age;
      });
      break;

    case SortType.Married:
      copiedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      });
      break;

    default:
      copiedStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
          : getAverageGrade(b.grades) - getAverageGrade(a.grades);
      });
      break;
  }

  return copiedStudents;
}

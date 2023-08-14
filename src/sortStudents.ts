
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

function getAvarageGrade(grades: number[]): number {
  const sum = grades.reduce((a, b) => a + b, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArr = [...students];
  const isAsc: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      studentsArr.sort((a, b) => {
        return isAsc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
      break;

    case SortType.Surname:
      studentsArr.sort((a, b) => {
        return isAsc
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      });
      break;

    case SortType.Age:
      studentsArr.sort((a, b) => {
        return isAsc ? a.age - b.age : b.age - a.age;
      });
      break;

    case SortType.Married:
      studentsArr.sort((a, b) => {
        return isAsc
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      });
      break;

    case SortType.AverageGrade:
      studentsArr.sort((a, b) => {
        return isAsc
          ? getAvarageGrade(a.grades) - getAvarageGrade(b.grades)
          : getAvarageGrade(b.grades) - getAvarageGrade(a.grades);
      });
      break;

    default:
      break;
  }

  return studentsArr;
}

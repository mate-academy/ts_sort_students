function getAvarageGrade(grades : number[]) : number {
  const sum : number = grades.reduce((result, grade) => result + grade, 0);

  return sum / grades.length;
}

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

export type SortOrder = 'asc' | 'desk';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
)
  : Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case (SortType.Name):
      sortedStudents.sort(({ name: name1 }, { name: name2 }) => (
        order === 'asc'
          ? name1.localeCompare(name2)
          : name2.localeCompare(name1)
      ));
      break;

    case (SortType.Surname):
      sortedStudents.sort(({ surname: surname1 }, { surname: surname2 }) => (
        order === 'asc'
          ? surname1.localeCompare(surname2)
          : surname2.localeCompare(surname1)
      ));
      break;

    case (SortType.Age):
      sortedStudents.sort(({ age: age1 }, { age: age2 }) : number => (
        order === 'asc'
          ? age1 - age2
          : age2 - age1
      ));
      break;

    case (SortType.Married):
      sortedStudents.sort(({ married: married1 }, { married: married2 })
      : number => (
        order === 'asc'
          ? +married1 - +married2
          : +married2 - +married1
      ));
      break;

    case (SortType.AverageGrade):
      sortedStudents.sort(({ grades: grades1 }, { grades: grades2 })
      : number => {
        const firstStudentGrade = getAvarageGrade(grades1);
        const secondStudentGrade = getAvarageGrade(grades2);

        return order === 'asc'
          ? firstStudentGrade - secondStudentGrade
          : secondStudentGrade - firstStudentGrade;
      });
      break;

    default:
  }

  return sortedStudents;
}

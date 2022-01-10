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

function avarageGrade(student: Student): number {
  return student.grades
    .reduce((sum, grade) => sum + grade) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? studentsCopy.sort((student1, student2) => student1
          .name.localeCompare(student2.name))
        : studentsCopy.sort((student1, student2) => student2
          .name.localeCompare(student1.name));

    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((student1, student2) => student1
          .surname.localeCompare(student2.surname))
        : studentsCopy.sort((student1, student2) => student2
          .surname.localeCompare(student1.surname));

    case SortType.Age:
      return order === 'asc'
        ? studentsCopy.sort((student1, student2) => student1
          .age - student2.age)
        : studentsCopy.sort((student1, student2) => student2
          .age - student1.age);

    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((student1, student2) => Number(student1
          .married) - Number(student2.married))
        : studentsCopy.sort((student1, student2) => Number(student2
          .married) - Number(student1.married));

    case SortType.AverageGrade: {
      return order === 'asc'
        ? studentsCopy.sort((student1, student2) => avarageGrade(student1)
        - avarageGrade(student2))
        : studentsCopy.sort((student1, student2) => avarageGrade(student2)
        - avarageGrade(student1));
    }

    default:
      return studentsCopy;
  }
}

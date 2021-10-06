// describe Student type
// create and export SortType enum
// create SortOrder type

// import { userInfo } from "os";

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

function averageAge(student: Student): number {
  const avgAge: number = student.grades
    .reduce((sum: number, age: number) => sum + age) / student.grades.length;

  return avgAge;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copy
          .sort((student1: Student, student2: Student) => student1[sortBy]
            .localeCompare(student2[sortBy]))
        : copy
          .sort((student1: Student, student2: Student) => student2[sortBy]
            .localeCompare(student1[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? copy
          .sort((student1: Student, student2: Student) => student1[sortBy]
            - student2[sortBy])
        : copy
          .sort((student1: Student, student2: Student) => student2[sortBy]
            - student1[sortBy]);

    case SortType.Married:
      return order === 'asc'
        ? copy
          .sort((student1: Student, student2: Student) => +student1[sortBy]
            - +student2[sortBy])
        : copy
          .sort((student1: Student, student2: Student) => +student2[sortBy]
            - +student1[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copy
          .sort((student1: Student, student2: Student) => averageAge(student1)
            - averageAge(student2))
        : copy
          .sort((student1: Student, student2: Student) => averageAge(student2)
            - averageAge(student1));

    default:
      break;
  }

  return copy;
}


export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function avrg(arr: number[]): number {
  return arr.reduce((acc, el) => acc + el) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        studentsCopy.sort((student1, student2) => (
          student1[sortBy].localeCompare(student2[sortBy])
        ));
      } else {
        studentsCopy.sort((student1, student2) => (
          student2[sortBy].localeCompare(student1[sortBy])
        ));
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        studentsCopy.sort((student1, student2) => (
          student1.age - student2.age
        ));
      } else {
        studentsCopy.sort((student1, student2) => (
          student2.age - student1.age
        ));
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        studentsCopy.sort((student1, student2) => {
          const check = student1.married === student2.married
            ? 0
            : student1.married;

          if (check === 0) {
            return 0;
          }

          return check ? 1 : -1;
        });
      } else {
        studentsCopy.sort((student1, student2) => {
          const check = student1.married === student2.married
            ? 0
            : student1.married;

          if (check === 0) {
            return 0;
          }

          return check ? -1 : 1;
        });
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        studentsCopy.sort((student1, student2) => (
          avrg(student1.grades) - avrg(student2.grades)
        ));
      } else {
        studentsCopy.sort((student1, student2) => (
          avrg(student2.grades) - avrg(student1.grades)
        ));
      }
      break;

    default:
      break;
  }

  return studentsCopy;
}

// describe Student type
// create and export SortType enum
// create SortOrder type
export interface Student{
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}
export enum SortType {
  Name='name',
  Surname='surname',
  Age='age',
  Married='married',
  AverageGrade='averagegrade',
}
export type SortOrder = 'asc' | 'desc';

function calculateAvg(studentMarks: number[] = []):number {
  return studentMarks.reduce((sum, curr) => sum + curr, 0)
    / studentMarks.length;
}

export function sortStudents(students:Student[],
  sortBy:SortType,
  order: SortOrder):Student[] {
  const copyStudents = students.map((student) => ({ ...student }));
  const k = sortBy.toLocaleLowerCase();

  if (order === 'asc') {
    if (k === SortType.AverageGrade) {
      copyStudents.sort((a, b) => calculateAvg(a.grades)
        - calculateAvg(b.grades));
    } else if (k === SortType.Name || k === SortType.Surname) {
      copyStudents.sort((a, b) => a[k].localeCompare(b[k]));
    } else if (k === SortType.Age) {
      copyStudents.sort((a, b) => a.age - b.age);
    } else {
      copyStudents.sort((a, b) => {
        if (a.married === b.married) {
          return 0;
        }

        if (a.married) {
          return 1;
        }

        return -1;
      });
    }
  } else if (k === SortType.AverageGrade) {
    copyStudents.sort((b, a) => calculateAvg(a.grades)
      - calculateAvg(b.grades));
  } else if (k === SortType.Name || k === SortType.Surname) {
    copyStudents.sort((b, a) => a[k].localeCompare(b[k]));
  } else if (k === SortType.Age) {
    copyStudents.sort((b, a) => a.age - b.age);
  } else {
    copyStudents.sort((b, a) => {
      if (a.married === b.married) {
        return 0;
      }

      if (a.married) {
        return 1;
      }

      return -1;
    });
  }

  return copyStudents;
}

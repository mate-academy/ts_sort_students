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

export function calculateAverageGrade(studentsMarks: number[] = []):number {
  return studentsMarks.reduce((sum, curr) => sum + curr, 0)
    / studentsMarks.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order: SortOrder,
) :Student[] {
  const studentsCopy = students.map((student) => ({ ...student }));
  const fieldForSorting = sortBy.toLowerCase();

  if (order === 'asc') {
    if (fieldForSorting === SortType.AverageGrade) {
      studentsCopy
        .sort((student1, student2) => calculateAverageGrade(student1.grades)
          - calculateAverageGrade(student2.grades));
    } else if (fieldForSorting === SortType.Name
        || fieldForSorting === SortType.Surname) {
      studentsCopy.sort((student1, student2) => student1[fieldForSorting]
        .localeCompare(student2[fieldForSorting]));
    } else if (fieldForSorting === SortType.Age) {
      studentsCopy.sort((student1, student2) => student1.age - student2.age);
    } else {
      studentsCopy.sort((student1, student2) => {
        if (student1.married === student2.married) {
          return 0;
        }

        if (student1.married) {
          return 1;
        }

        return -1;
      });
    }
  } else if (fieldForSorting === SortType.AverageGrade) {
    studentsCopy
      .sort((student2, student1) => calculateAverageGrade(student1.grades)
        - calculateAverageGrade(student2.grades));
  } else if (fieldForSorting === SortType.Name
      || fieldForSorting === SortType.Surname) {
    studentsCopy.sort((student2, student1) => student1[fieldForSorting]
      .localeCompare(student2[fieldForSorting]));
  } else if (fieldForSorting === SortType.Age) {
    studentsCopy.sort((student2, student1) => student1.age - student2.age);
  } else {
    studentsCopy.sort((student2, student1) => {
      if (student1.married === student2.married) {
        return 0;
      }

      if (student1.married) {
        return 1;
      }

      return -1;
    });
  }

  return studentsCopy;
}


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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function sortStrings(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return order === 'asc'
    ? students.sort((st1, st2) => st1[sortBy].localeCompare(st2[sortBy]))
    : students.sort((st1, st2) => st2[sortBy].localeCompare(st1[sortBy]));
}

function getAverageGrade(grades): number {
  return grades.reduce((a: number, b: number) => a + b) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsToSort = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      return sortStrings(studentsToSort, sortBy, order);

    case 'age':
      return order === 'asc'
        ? studentsToSort.sort((st1, st2) => st1.age - st2.age)
        : studentsToSort.sort((st1, st2) => st2.age - st1.age);

    case 'married':
      return order === 'asc'
        ? studentsToSort.sort((st1, st2) => {
          if (st1.married === st2.married) {
            return 0;
          }

          if (st1.married) {
            return 1;
          }

          return -1;
        })
        : studentsToSort.sort((st1, st2) => {
          if (st1.married === st2.married) {
            return 0;
          }

          if (st1.married) {
            return -1;
          }

          return 1;
        });

    case 'averageGrade': {
      return order === 'asc'
        ? studentsToSort.sort((st1, st2) => (
          getAverageGrade(st1.grades) - getAverageGrade(st2.grades)))
        : studentsToSort.sort((st1, st2) => (
          getAverageGrade(st2.grades) - getAverageGrade(st1.grades)));
    }

    default: {
      return studentsToSort;
    }
  }
}

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
  AverageGrade = 'averageGrade',
}

export enum SortOrder {
  ascending = 'asc',
  descending = 'desc',
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArrOfStudents = [...students];

  function gradeAverage(grades: number[]): number {
    return grades.reduce((accum, grade) => accum + grade) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newArrOfStudents.sort((s1, s2) => {
        if (order === SortOrder.ascending) {
          return s1[sortBy].localeCompare(s2[sortBy]);
        }

        return s2[sortBy].localeCompare(s1[sortBy]);
      });
      break;

    case SortType.Age:
      newArrOfStudents.sort((s1, s2) => {
        if (order === SortOrder.ascending) {
          return s1[sortBy] - s2[sortBy];
        }

        return s2[sortBy] - s1[sortBy];
      });
      break;

    case SortType.Married:
      newArrOfStudents.sort((s1, s2) => {
        if (order === SortOrder.ascending) {
          return +s1[sortBy] - +(s2[sortBy]);
        }

        return +s2[sortBy] - +(s1[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      newArrOfStudents.sort((s1, s2) => {
        if (order === SortOrder.ascending) {
          return gradeAverage(s1.grades) - gradeAverage(s2.grades);
        }

        return gradeAverage(s2.grades) - gradeAverage(s1.grades);
      });
      break;

    default:
      break;
  }

  return newArrOfStudents;
}

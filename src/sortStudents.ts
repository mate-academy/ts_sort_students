
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname ='surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averagegrades',
}

export type SortOrder = 'asc'|'desc';

function getAverageGrades(student:Student):number {
  const countOfGrades = student.grades.length;

  return (student.grades
    .reduce((sum:number, grade:number) => sum + grade) / countOfGrades);
}

export function sortStudents(
  students: Student[],
  sortBy:SortType,
  order:SortOrder,
) :Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a: Student, b: Student) => {
    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      return order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy]);
    }

    if (sortBy === SortType.Age) {
      return order === 'asc'
        ? a.age - b.age
        : b.age - a.age;
    }

    if (sortBy === SortType.Married) {
      if (a.married === b.married) {
        return 0;
      }

      if (order === 'asc') {
        return a.married ? 1 : -1;
      }

      return a.married ? -1 : 1;
    }

    return order === 'asc'
      ? getAverageGrades(a) - getAverageGrades(b)
      : getAverageGrades(b) - getAverageGrades(a);
  });

  return sortedStudents;
}

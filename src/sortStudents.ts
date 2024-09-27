export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
  average?: number,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'average',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const newArr = [...students];

  function calculateAverage(grades: number[]): number {
    const sum = grades.reduce((total, grade) => total + grade, 0);

    return sum / grades.length;
  }

  if (order === 'asc') {
    newArr.sort((a: Student, b: Student) => {
      if (sortBy === SortType.AverageGrade) {
        const avgGradeA = calculateAverage(a.grades);
        const avgGradeB = calculateAverage(b.grades);

        return avgGradeA.toString().localeCompare(avgGradeB.toString());
      }

      return a[sortBy].toString().localeCompare(b[sortBy].toString());
    });
  }

  if (order === 'desc') {
    newArr.sort((a: Student, b: Student) => {
      if (sortBy === SortType.AverageGrade) {
        const avgGradeA = calculateAverage(a.grades);
        const avgGradeB = calculateAverage(b.grades);

        return avgGradeB.toString().localeCompare(avgGradeA.toString());
      }

      return b[sortBy].toString().localeCompare(a[sortBy].toString());
    });
  }

  return newArr;
}

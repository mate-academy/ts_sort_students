
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
  Married = 'maried',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedArr: Student[] = [...students];

  function avgGrade(grades: number[]) :number {
    return grades.reduce((sum:number, grade:number): number => (sum + grade),
      0) / grades.length;
  }

  sortedArr.sort((studentA: Student, studentB:Student): number => {
    let compare = 0;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        compare = studentA[sortBy].localeCompare(studentB[sortBy]);
        break;

      case SortType.Age:
        compare = studentA.age - studentB.age;
        break;

      case SortType.Married:
        if (studentA.married !== studentB.married) {
          compare = studentA.married ? 1 : -1;
        }

        break;

      case SortType.AverageGrade:
        compare = avgGrade(studentA.grades) - avgGrade(studentB.grades);
        break;

      default:
        break;
    }

    if (order === 'desc') {
      compare *= (-1);
    }

    return compare;
  });

  return sortedArr;
}

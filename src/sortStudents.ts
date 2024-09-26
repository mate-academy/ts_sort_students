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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  let avgGradeA,
    avgGradeB;
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        comparison = a[sortBy].localeCompare(b[sortBy]);
        break;
      case SortType.Age:
        comparison = a.age - b.age;
        break;
      case SortType.Married:
        if (a.married === b.married) {
          comparison = 0;
        } else {
          comparison = a.married ? 1 : -1;
        }
        break;
      case SortType.AverageGrade:
        avgGradeA = a.grades.reduce((acc, val) => acc + val) / a.grades.length;
        avgGradeB = b.grades.reduce((acc, val) => acc + val) / b.grades.length;
        comparison = avgGradeA - avgGradeB;
        break;
      default:
        throw new Error('Error');
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}

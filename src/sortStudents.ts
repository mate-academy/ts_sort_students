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
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let comparison = 0;

    if (sortBy === SortType.AverageGrade) {
      const averageA = a.grades
        .reduce((acc, grade) => acc + grade, 0) / a.grades.length;
      const averageB = b.grades
        .reduce((acc, grade) => acc + grade, 0) / b.grades.length;

      comparison = averageA - averageB;
    } else if (sortBy === SortType.Age) {
      comparison = a.age - b.age;
    } else if (sortBy === SortType.Married) {
      // eslint-disable-next-line no-nested-ternary
      comparison = a.married === b.married ? 0 : a.married ? 1 : -1;
    } else {
      comparison = a[sortBy] < b[sortBy] ? -1 : 1;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}

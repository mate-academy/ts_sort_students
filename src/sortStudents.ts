
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

// create SortOrder type
export type SortOrder = 'desc' | 'asc';

function getAverageNumber(numbers: number[]): number {
  return numbers.reduce(
    (total, grade) => total + grade, 0,
  ) / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const preparedStudents: Student[] = [...students];
  const orderIndex = order === 'asc' ? 1 : -1;

  preparedStudents.sort((student1, student2): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return student1[sortBy].localeCompare(student2[sortBy]) * orderIndex;

      case SortType.Age:
        return (student1.age - student2.age) * orderIndex;

      case SortType.Married:
        return (+(student1.married) - +(student2.married)) * orderIndex;

      case SortType.AverageGrade: {
        const student1AvgGrade: number = getAverageNumber(student1.grades);
        const student2AvgGrade: number = getAverageNumber(student2.grades);

        return (student1AvgGrade - student2AvgGrade) * orderIndex;
      }

      default:
        return 0;
    }
  });

  return preparedStudents;
}

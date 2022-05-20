
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudentsArr: Student[] = [...students];

  function getAverageGrade(person: Student): number {
    const totalSum = person.grades.reduce((prev, curr) => (prev + curr), 0);

    return totalSum / person.grades.length;
  }

  return copyOfStudentsArr.sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(student1) - getAverageGrade(student2)
          : getAverageGrade(student2) - getAverageGrade(student1);
      default:
        return 0;
    }
  });
}

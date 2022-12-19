
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
  Grades = 'grades',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
):[string] {
  const learner = [...students];

  function getAverage(grades:number[]):number {
    return grades.reduce((prev, element) => prev + element) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? learner.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : learner.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? learner.sort((a, b) => +a[sortBy] - +b[sortBy])
        : learner.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? learner.sort((a, b) => getAverage(a.grades) - getAverage(b.grades))
        : learner.sort((a, b) => getAverage(b.grades) - getAverage(a.grades));

    default:
      return [''];
  }
}

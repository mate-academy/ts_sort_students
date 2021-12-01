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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function getAverage(person:Student):number {
  return person.grades
    .reduce((acc, curr) => acc + curr, 0)
    / person.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudent: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name || SortType.Surname:
      copyOfStudent.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;
    case SortType.Age || SortType.Married:
      copyOfStudent.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
      break;
    case SortType.AverageGrade:
      students.sort((a, b) => {
        return order === 'asc'
          ? getAverage(a) - getAverage(b)
          : getAverage(b) - getAverage(a);
      });
      break;

    default: return copyOfStudent;
  }

  return copyOfStudent;
}

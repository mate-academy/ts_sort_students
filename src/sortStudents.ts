interface Student {
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

function getAverageGrade(student: number[]): number {
  return student.reduce((a: number, b: number) => a + b, 0) / student.length;
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copy.sort(
        (first, second) => {
          return order === 'asc'
            ? first[sortBy].localeCompare(second[sortBy])
            : second[sortBy].localeCompare(first[sortBy]);
        },
      );
      break;

    case SortType.Age:
    case SortType.Married:
      copy.sort(
        (first, second) => {
          return order === 'asc'
            ? Number(first[sortBy]) - Number(second[sortBy])
            : Number(second[sortBy]) - Number(first[sortBy]);
        },
      );
      break;

    case SortType.AverageGrade:
      copy.sort(
        (first, second) => {
          return order === 'asc'
            ? getAverageGrade(first[sortBy]) - getAverageGrade(second[sortBy])
            : getAverageGrade(second[sortBy]) - getAverageGrade(first[sortBy]);
        },
      );
      break;

    default:
      break;
  }

  return copy;
}

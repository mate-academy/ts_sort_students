
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
  AverageGrade = 'averageGrade'
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc'
}

const getAverage = (grades: number[]): number => (
  grades.reduce((sum, mark) => sum + mark) / grades.length
);

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      studCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

      break;

    case SortType.Age:
    case SortType.Married:

      studCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      });
      break;

    case SortType.AverageGrade:
      studCopy.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? getAverage(student1.grades) - getAverage(student2.grades)
          : getAverage(student2.grades) - getAverage(student1.grades);
      });

      break;

    default:
      break;
  }

  return studCopy;
}

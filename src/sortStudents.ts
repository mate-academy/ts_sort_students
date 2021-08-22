// describe Student type
// create and export SortType enum
// create SortOrder type

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export function sortStudents(
  students: Student[],
  sortBy: string,
  order: string,
): Student[] {
  const copyStudents: Student[] = students.map((student) => {
    return { ...student };
  });

  function reduceCall(array: number[]) : number {
    return array.reduce((result, currentValue) => result + currentValue);
  }

  return copyStudents
    .sort((a : Student, b: Student) => {
      if (SortType.Married === sortBy) {
        const first = a[sortBy] ? 1 : -1;
        const second = b[sortBy] ? 1 : -1;

        return SortOrder.asc === order
          ? first - second
          : second - first;
      }

      if (SortType.Age === sortBy) {
        return SortOrder.asc === order
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      }

      if (SortType.Name === sortBy
        || SortType.Surname === sortBy) {
        return SortOrder.asc === order
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      }

      if (SortType.AverageGrade === sortBy) {
        const first = reduceCall(a[sortBy]);
        const second = reduceCall(b[sortBy]);

        return SortOrder.asc === order
          ? first - second
          : second - first;
      }

      throw new Error('Incorrect value');
    });
}


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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = JSON.parse(JSON.stringify(students));

  switch (sortBy) {
    case SortType.AverageGrade:

      copy.sort((a, b) => {
        if (order === 'asc') {
          return a.grades
            .reduce((sum, y) => sum + y, 0) / a.grades.length - b.grades
            .reduce((sum, y) => sum + y, 0) / b.grades.length;
        }

        return b.grades
          .reduce((sum, y) => sum + y, 0) / b.grades.length - a.grades
          .reduce((sum, y) => sum + y, 0) / a.grades.length;
      });

      break;

    case SortType.Name:
      if (order === 'asc') {
        copy.sort((a, b) => a.name.localeCompare(b.name));
      }

      break;

    case SortType.Surname:
      if (order === 'asc') {
        copy.sort((a, b) => a.surname.localeCompare(b.surname));
      }

      break;

    case SortType.Age:
      if (order === 'desc') {
        copy.sort((a, b) => b.age - a.age);
      }

      break;

    case SortType.Married:
      if (order === 'desc') {
        copy.sort((x, y) => (
          JSON.stringify(y.married).localeCompare(JSON.stringify(x.married))
        ));
      }

      break;

    default: break;
  }

  return copy;
}

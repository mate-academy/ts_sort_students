
export interface Student {
  // describe Student interface
}

export enum SortType {
  // describe SortType enum
}

// create SortOrder type
export type SortOrder;


type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: (number)[],
};

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

type SortOrder = string;

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder
): Student[] {
  switch (order) {
    case 'asc':
      switch (sortBy) {
        case SortField.Name:
          return [...students].sort((a, b) => a.name.localeCompare(b.name));

        case SortField.Surname:
          return [...students]
            .sort((a, b) => a.surname.localeCompare(b.surname));

        case SortField.AverageGrade:
          return [...students].sort((a, b) => {
            return (
              a.grades.reduce((x, y) => x + y, 0) / a.grades.length
              - b.grades.reduce((x, y) => x + y, 0) / b.grades.length
            );
          });
      }
      break;

    case 'desc':
      switch (sortBy) {
        case SortField.Age:
          return [...students].sort((a, b) => b.age - a.age);

        case SortField.Married:
          return [...students].sort((a, b) => {
            return a.married === b.married ? 0 : a.married ? -1 : 1;
          });

        case SortField.AverageGrade:
          return [...students].sort((a, b) => {
            return (
              b.grades.reduce((x, y) => x + y) / b.grades.length
              - a.grades.reduce((x, y) => x + y) / a.grades.length
            );
          });

        default:
          return students;
      }
  }

  return students;
}

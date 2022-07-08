
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
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyArrStudents: Student[] = [...students];
  const callback = (sum: number, x: number): number => {
    return sum + x;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyArrStudents.sort((student1, student2) => {
        if (order === 'asc') {
          return student1[sortBy].localeCompare(student2[sortBy]);
        }

        return student2[sortBy].localeCompare(student1[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      copyArrStudents.sort((student1, student2) => {
        if (order === 'asc') {
          return Number(student1[sortBy]) - Number(student2[sortBy]);
        }

        return Number(student2[sortBy]) - Number(student1[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      copyArrStudents.sort((student1, student2) => {
        const gradesOfStudent1: number = student1[sortBy].reduce(callback);
        const gradesOfStudent2: number = student2[sortBy].reduce(callback);

        if (order === 'asc') {
          return ((gradesOfStudent1 / student1[sortBy].length)
            - (gradesOfStudent2 / student2[sortBy].length));
        }

        return ((gradesOfStudent2 / student2[sortBy].length)
          - (gradesOfStudent1 / student1[sortBy].length));
      });
      break;

    default:
      break;
  }

  return copyArrStudents;
}

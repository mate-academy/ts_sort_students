
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
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
): object[] {
  // write your function
  const sortedStudents: Student[] = [...students];

  sortedStudents.sort((student1, student2) => {
    const isDesc: boolean = order === 'desc';

    switch (sortBy) {
      case 'age':
        if (isDesc) {
          return student2[sortBy] - student1[sortBy];
        }

        return student1[sortBy] - student2[sortBy];
      case 'married':
        if (student1[sortBy] === student2[sortBy]) {
          return 0;
        }

        if (isDesc) {
          return student1[sortBy] ? -1 : 1;
        }

        return student1[sortBy] ? 1 : -1;
      case 'grades':
        if (isDesc) {
          return (student2[sortBy]
            .reduce((total, num) => total + num) / student2[sortBy].length)
          - (student1[sortBy]
            .reduce((total, num) => total + num) / student1[sortBy].length);
        }

        return (student1[sortBy]
          .reduce((total, num) => total + num) / student1[sortBy].length)
        - (student2[sortBy]
          .reduce((total, num) => total + num) / student2[sortBy].length);
      default:
        if (isDesc) {
          return student1[sortBy] > student2[sortBy] ? -1 : 1;
        }

        return student1[sortBy] > student2[sortBy] ? 1 : -1;
    }
  });

  return sortedStudents;
}

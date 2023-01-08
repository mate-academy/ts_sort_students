
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: true;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

function averageGrade(grades: number[]): number {
  return grades.reduce((prev, cur) => prev + cur, 0) / grades.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const isAscending: boolean = order === 'asc';
  const copyStudents: Student[] = [...students];

  return copyStudents.sort((firstStud:Student, secondStud: Student) :number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return isAscending
          ? firstStud[sortBy].localeCompare(secondStud[sortBy])
          : secondStud[sortBy].localeCompare(firstStud[sortBy]);

      case SortType.Age:
        return isAscending
          ? firstStud[sortBy] - secondStud[sortBy]
          : secondStud[sortBy] - firstStud[sortBy];

      case SortType.Married:
        return isAscending
          ? Number(firstStud[sortBy]) - Number(secondStud[sortBy])
          : Number(secondStud[sortBy]) - Number(firstStud[sortBy]);

      case SortType.AverageGrade:
        return isAscending
          ? averageGrade(firstStud[sortBy]) - averageGrade(secondStud[sortBy])
          : averageGrade(secondStud[sortBy]) - averageGrade(firstStud[sortBy]);

      default:
        return 0;
    }
  });
}

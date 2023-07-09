
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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];
  const sortOrder: number = order === 'asc' ? 1 : -1;

  function averageGrade(grades: number[]) : number {
    return grades.reduce((summary, grade) => summary + grade, 0)
    / grades.length;
  }

  copyStudents.sort((firstStudent, secondStudent): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return firstStudent[sortBy].localeCompare(secondStudent[sortBy])
        * sortOrder;
      case SortType.Age:
      case SortType.Married:
        return (Number(firstStudent[sortBy]) - Number(secondStudent[sortBy]))
        * sortOrder;
      case SortType.AverageGrade:
        return (averageGrade(firstStudent[sortBy])
        - averageGrade(secondStudent[sortBy])) * sortOrder;
      default:
        return 0;
    }
  });

  return copyStudents;
}

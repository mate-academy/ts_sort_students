
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc'| 'desc';

function averageGrade({ grades } : Student) :number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((firstStudent, secondStudent) : number => {
    let comparison = 0;

    switch (sortBy) {
      case (SortType.Name):
      case (SortType.Surname):
        comparison = firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
        break;

      case (SortType.AverageGrade):
        comparison = averageGrade(firstStudent) - averageGrade(secondStudent);
        break;

      case SortType.Age:
      case SortType.Married:
        comparison = +(firstStudent[sortBy]) - +(secondStudent[sortBy]);
        break;

      default:
        throw new Error('Unknown type');
    }

    return order === 'asc' ? comparison : -comparison;
  });
}

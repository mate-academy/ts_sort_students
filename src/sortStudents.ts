
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAvgGrade(student: Student): number {
  const total: number = student.grades
    .reduce((sum: number, grade: number) => sum + grade, 0);

  return total / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  type Callback = (first: Student, second: Student) => number;

  const sortCallback: Callback = (first, second) => {
    let difference: number;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        difference = first[sortBy].localeCompare(second[sortBy]);
        break;
      case SortType.Age:
      case SortType.Married:
        difference = Number(first[sortBy]) - Number(second[sortBy]);
        break;
      case SortType.AverageGrade:
        difference = getAvgGrade(first) - getAvgGrade(second);
        break;
      default:
        difference = 0;
    }

    return order === 'asc' ? difference : -difference;
  };
  const studentsCopy: Student[] = [...students];

  studentsCopy.sort(sortCallback);

  return studentsCopy;
}

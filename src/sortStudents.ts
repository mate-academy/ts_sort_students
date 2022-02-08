
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averageGrade?: number;
}

export enum SortType {
  AverageGrade = 'averageGrade',
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  Grades = 'grades',
}

export type SortOrder = 'asc' | 'dsc';

function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((a, b) => a + b) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((firstStudent: Student, secondStudent: Student) => {
      switch (sortBy) {
        case SortType.AverageGrade:
          return order === 'asc'
            ? getAverageGrade(firstStudent) - getAverageGrade(secondStudent)
            : getAverageGrade(secondStudent) - getAverageGrade(firstStudent);

        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
            : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

        case SortType.Age:
          return order === 'asc'
            ? firstStudent[sortBy] - secondStudent[sortBy]
            : secondStudent[sortBy] - firstStudent[sortBy];

        case SortType.Married:
          return order === 'asc'
            ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
            : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);

        default:
          return 0;
      }
    });
}

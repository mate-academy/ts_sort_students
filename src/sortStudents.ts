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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((acc: number, curr: number) => acc + curr, 0)
      / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return Array.from(students)
    .sort((firstStudent: Student, secondStudent: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
            : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return order === 'asc'
            ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
            : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);

        default:
          return order === 'asc'
            ? getAverageGrade(firstStudent) - getAverageGrade(secondStudent)
            : getAverageGrade(secondStudent) - getAverageGrade(firstStudent);
      }
    });
}

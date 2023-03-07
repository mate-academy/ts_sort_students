
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

export type SortOrder = 'asc' |'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => grade + sum) / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyOfStudents: Student[] = students.map((person) => ({ ...person }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudents.sort((prev, current) => {
        return order === 'asc'
          ? prev[sortBy].localeCompare(current[sortBy])
          : current[sortBy].localeCompare(prev[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      copyOfStudents.sort((prev, current) => {
        return order === 'asc'
          ? Number(prev[sortBy]) - Number(current[sortBy])
          : Number(current[sortBy]) - Number(prev[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      copyOfStudents.sort((prev, current) => {
        return order === 'asc'
          ? getAverageGrade(prev.grades) - getAverageGrade(current.grades)
          : getAverageGrade(current.grades) - getAverageGrade(prev.grades);
      });
      break;

    default:
      throw new Error('Something went wrong...');
  }

  return copyOfStudents;
}

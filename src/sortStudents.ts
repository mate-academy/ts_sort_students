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

export type SortOrder = 'asc' | 'desc';

function getAvarageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? [...students].sort((prevStud, currentStud) => prevStud[sortBy]
          .localeCompare(currentStud[sortBy]))
        : [...students].sort((prevStud, currentStud) => currentStud[sortBy]
          .localeCompare(prevStud[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? [...students].sort((prevStud, currentStud) => (
          Number(prevStud[sortBy]) - Number(currentStud[sortBy])
        ))
        : [...students].sort((prevStud, currentStud) => (
          Number(currentStud[sortBy]) - Number(prevStud[sortBy])
        ));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? [...students].sort((prevStud, currentStud) => (
          getAvarageGrade(prevStud[sortBy])
            - getAvarageGrade(currentStud[sortBy])
        ))
        : [...students].sort((prevStud, currentStud) => (
          getAvarageGrade(currentStud[sortBy])
            - getAvarageGrade(prevStud[sortBy])
        ));
    default:
      return [...students];
  }
}

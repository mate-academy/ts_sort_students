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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(student: Student): number {
  return student.grades
    .reduce((acc: number, prev: number) => acc + prev, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const outputArray: Student[] = [...students];

  switch (sortBy) {
    case 'age':
    case 'married':
      outputArray.sort((currentStudent, previousStudent) => (
        order === 'asc'
          ? Number(currentStudent[sortBy]) - Number(previousStudent[sortBy])
          : Number(previousStudent[sortBy]) - Number(currentStudent[sortBy])
      ));
      break;

    case 'name':
    case 'surname':
      outputArray.sort((currentStudent, previousStudent) => (
        order === 'asc'
          ? currentStudent[sortBy].localeCompare(previousStudent[sortBy])
          : previousStudent[sortBy].localeCompare(currentStudent[sortBy])
      ));
      break;

    case 'averageGrade':
      outputArray.sort((currentStudent, previousStudent) => (
        order === 'asc'
          ? calculateAverageGrade(currentStudent)
            - calculateAverageGrade(previousStudent)
          : calculateAverageGrade(previousStudent)
            - calculateAverageGrade(currentStudent)
      ));
      break;

    default:
      break;
  }

  return outputArray;
}

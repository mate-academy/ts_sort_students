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
  const sumOfMarks
    = student.grades.reduce((acc: number, prev: number) => acc + prev, 0);
  const allMarks = student.grades.length;
  const averageMarks = sumOfMarks / allMarks;

  return averageMarks;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const outputArray: Student[] = [...students];

  switch (sortBy) {
    case 'age':
      outputArray.sort((currentStudent, previousStudent) => (
        order === 'asc'
          ? currentStudent.age - previousStudent.age
          : previousStudent.age - currentStudent.age
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

    case 'married':
      outputArray.sort((currentStudent, previousStudent) => (
        order === 'asc'
          ? +currentStudent.married - +previousStudent.married
          : +previousStudent.married - +currentStudent.married
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

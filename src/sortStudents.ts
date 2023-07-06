
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

export type SortOrder = 'asc' | 'desc';

function getAverage(numbers: number[]): number {
  return numbers.reduce((total, number) => total + number, 0) / numbers.length;
}

function checkNumberFields(
  num1: number,
  num2: number,
  order: SortOrder,
): number {
  if (order === 'desc') {
    return num2 - num1;
  }

  return num1 - num2;
}

function checkStringFields(
  str1: string,
  str2: string,
  order: SortOrder,
): number {
  if (order === 'desc') {
    return str2.localeCompare(str1);
  }

  return str1.localeCompare(str2);
}

function checkBooleanFields(
  bool1: boolean,
  bool2: boolean,
  order: SortOrder,
): number {
  if (order === 'desc') {
    return Number(!bool1) - Number(!bool2);
  }

  return Number(!bool2) - Number(!bool1);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentCopy = [...students];

  switch (sortBy) {
    case (SortType.Name):
    case (SortType.Surname):
      studentCopy.sort((student1, student2) => {
        return checkStringFields(student1[sortBy], student2[sortBy], order);
      });
      break;

    case (SortType.Age):
      studentCopy.sort((student1, student2) => {
        return checkNumberFields(student1[sortBy], student2[sortBy], order);
      });
      break;

    case (SortType.Married):
      studentCopy.sort((student1, student2) => {
        return checkBooleanFields(student1[sortBy], student2[sortBy], order);
      });
      break;

    case (SortType.AverageGrade):
      studentCopy.sort((student1, student2) => {
        const stud1AverageGrade = getAverage(student1[sortBy]);
        const stud2AverageGrade = getAverage(student2[sortBy]);

        return checkNumberFields(stud1AverageGrade, stud2AverageGrade, order);
      });
      break;
    default:
      break;
  }

  return studentCopy;
}

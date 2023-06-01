
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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  let sortedStudents: Student[] = [...students];
  const calculateAverageGrade = (grades: number[]): number => {
    return grades.reduce((acc, val) => acc + val, 0) / grades.length;
  };

  const sortString = (string1: string, string2: string): number => {
    return order === 'asc'
      ? string1.localeCompare(string2)
      : string2.localeCompare(string1);
  };

  const sortNumber = (number1: number, number2: number): number => {
    return order === 'asc'
      ? number1 - number2
      : number2 - number1;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents = sortedStudents.sort(
        (student1: Student, student2: Student) => {
          return sortString(student1[sortBy], student2[sortBy]);
        },
      );
      break;

    case SortType.Age:
    case SortType.Married:
      sortedStudents = sortedStudents.sort(
        (student1: Student, student2: Student) => {
          return sortNumber(
            Number(student1[sortBy]),
            Number(student2[sortBy]),
          );
        },
      );
      break;

    case SortType.AverageGrade:
      sortedStudents
        = sortedStudents.sort((student1: Student, student2: Student) => {
          const student1Average = calculateAverageGrade(student1.grades);
          const student2Average = calculateAverageGrade(student2.grades);

          return sortNumber(student1Average, student2Average);
        });
      break;
    default:
      return sortedStudents;
  }

  return sortedStudents;
}

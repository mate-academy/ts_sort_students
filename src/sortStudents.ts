
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function sortStudentsByPrimitives(
  students: Student[],
  keyName: string,
  order: SortOrder,
): Student[] {
  return students.sort((studentA: Student, studentB: Student) => {
    const valueA = studentA[keyName as keyof Student];
    const valueB = studentB[keyName as keyof Student];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return order === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    if ((typeof valueA === 'number' && typeof valueB === 'number')
      || (typeof valueA === 'boolean' && typeof valueB === 'boolean')) {
      return order === 'asc'
        ? Number(valueA) - Number(valueB)
        : Number(valueB) - Number(valueA);
    }

    return 0;
  });
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentList = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortStudentsByPrimitives(studentList, 'name', order);
      break;

    case SortType.Surname:
      sortStudentsByPrimitives(studentList, 'surname', order);
      break;

    case SortType.Age:
      sortStudentsByPrimitives(studentList, 'age', order);
      break;

    case SortType.Married:
      sortStudentsByPrimitives(studentList, 'married', order);
      break;

    case SortType.AverageGrade:
      studentList.sort((studentA: Student, studentB: Student) => {
        const gradesCountA = studentA.grades.length;
        const gradesCountB = studentB.grades.length;

        const averageA = gradesCountA > 0
          ? studentA.grades.reduce((sum, grade) => (
            sum + grade
          ), 0) / gradesCountA
          : 0;

        const averageB = gradesCountB > 0
          ? studentB.grades.reduce((sum, grade) => (
            sum + grade
          ), 0) / gradesCountB
          : 0;

        return order === 'asc'
          ? averageA - averageB
          : averageB - averageA;
      });
      break;

    default:
      break;
  }

  return studentList;
}


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

// create SortOrder type
export enum SortOrder {
  decrease = 'desc',
  increase = 'asc'
}

function averageGrade(students: Student): number {
  const totalSum = students.grades.reduce(
    (result: number, grade: number) => result + grade,
  );

  return totalSum / students.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const allStudents = [...students];
  const check: boolean = order === SortOrder.increase;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      allStudents.sort((studentA, studentB) => {
        return check
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });
      break;

    case
      SortType.Age:
      allStudents.sort((studentA, studentB) => {
        return check
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;
      });
      break;

    case
      SortType.Married:
      allStudents.sort((studentA, studentB) => {
        return check
          ? Number(studentA.married) - Number(studentB.married)
          : Number(studentB.married) - Number(studentA.married);
      });
      break;

    case
      SortType.AverageGrade:
      allStudents.sort((studentA, studentB) => {
        return check
          ? averageGrade(studentA) - averageGrade(studentB)
          : averageGrade(studentB) - averageGrade(studentA);
      });
      break;

    default:
      throw new Error('Unknown error');
  }

  return allStudents;
}

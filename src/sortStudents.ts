
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function averageGrades(student: Student):number {
  const sum = student.grades.reduce((a: number, b: number) => a + b);

  return sum / student.grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy = [...students];

  copy.sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case (SortType.Name):
      case (SortType.Surname):
        if (order === 'asc') {
          return firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
        }

        return secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case (SortType.Age):
        if (order === 'asc') {
          return firstStudent.age - secondStudent.age;
        }

        return secondStudent.age - firstStudent.age;

      case (SortType.Married):
        if (order === 'asc') {
          return +firstStudent.married - +secondStudent.married;
        }

        return +secondStudent.married - +firstStudent.married;

      default:
        if (order === 'asc') {
          return averageGrades(firstStudent) - averageGrades(secondStudent);
        }

        return averageGrades(secondStudent) - averageGrades(firstStudent);
    }
  });

  return copy;
}

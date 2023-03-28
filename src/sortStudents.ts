
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): number {
  const compareFunction = (
    firstStudent: Student,
    secondStudent: Student,
  ): number => {
    let result = 0;

    function calcFunc(student): number {
      return student.grades
        .reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    }

    switch (sortBy) {
      case SortType.Name:
        result = firstStudent.name.localeCompare(secondStudent.name);
        break;
      case SortType.Surname:
        result = firstStudent.surname.localeCompare(secondStudent.surname);
        break;
      case SortType.Age:
        result = firstStudent.age - secondStudent.age;
        break;
      case SortType.Married:
        result = +firstStudent.married - +secondStudent.married;
        break;
      case SortType.AverageGrade:
        result = calcFunc(firstStudent) - calcFunc(secondStudent);
        break;
      default:
        break;
    }

    return order === 'asc' ? result : -result;
  };

  return [...students].sort(compareFunction);
}

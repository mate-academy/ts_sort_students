
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
  averageGrade?:number
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' |'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const updateStudent: Student[] = students.map((student: Student) => {
    const sum = student.grades.reduce((total, grade) => total + grade, 0);

    return {
      ...student,
      averageGrade: sum / student.grades.length,
    };
  });

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        return updateStudent.sort((a, b) => a.name.localeCompare(b.name));
      case SortType.Surname:
        return updateStudent.sort((a, b) => a.surname.localeCompare(b.surname));
      case SortType.Age:
        return updateStudent.sort((a, b) => a.age - b.age);
      case SortType.Married:
        return updateStudent.sort((a, b) => Number(a.married)
        - Number(b.married));
      case SortType.AverageGrade:
        return updateStudent.sort((a, b) => a.averageGrade
        - b.averageGrade);
      default:
        return [];
    }
  } else if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
        return updateStudent.sort((a, b) => b.name.localeCompare(a.name));
      case SortType.Surname:
        return updateStudent.sort((a, b) => b.surname.localeCompare(a.surname));
      case SortType.Age:
        return updateStudent.sort((a, b) => b.age - a.age);
      case SortType.Married:
        return updateStudent.sort((a, b) => Number(b.married)
    - Number(a.married));
      case SortType.AverageGrade:
        return updateStudent.sort((a, b) => b.averageGrade
        - a.averageGrade);
      default:
        return [];
    }
  }

  return [];
}

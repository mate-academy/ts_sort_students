
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyStudents: Student[] = students.map((student) => ({ ...student }));

  switch (sortBy) {
    case 'Name':
      return copyStudents.sort((student1, student2) => {
        return student1.name.localeCompare(student2.name);
      });

    case 'Surname':
      return copyStudents.sort((student1, student2) => {
        return student1.surname.localeCompare(student2.surname);
      });

    case 'Age':
      return copyStudents.sort((student1, student2) => {
        if (order === 'desc') {
          return student2.age - student1.age;
        }

        return student1.age - student2.age;
      });

    case 'AverageGrade':
      return copyStudents.sort((student1, student2) => {
        const averegeGradeOfStudent1 = student1.grades.reduce((a, b) => a + b,
          0) / student1.grades.length;
        const averegeGradeOfStudent2 = student2.grades.reduce((a, b) => a + b,
          0) / student2.grades.length;

        if (order === 'desc') {
          return averegeGradeOfStudent2 - averegeGradeOfStudent1;
        }

        return averegeGradeOfStudent1 - averegeGradeOfStudent2;
      });

    case 'Married':
      return copyStudents.sort((student1, student2) => {
        if (order === 'desc') {
          return Number(student2.married) - Number(student1.married);
        }

        return Number(student1.married) - Number(student2.married);
      });

    default:
      break;
  }

  if (order === 'desc') {
    return copyStudents.reverse();
  }

  return copyStudents;
}

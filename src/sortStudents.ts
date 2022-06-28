
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number [];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' |'desc';

export function sortStudents(
  students: Student [], sortBy: SortType, order: SortOrder,
): Student [] {
  const copyStudents: Student[] = students.map((obj:Student) => {
    const tempStor = { ...obj };

    tempStor.grades = [...obj.grades];

    return tempStor;
  });

  copyStudents.sort((a: Student, b: Student): number => {
    const nameA = a.name;
    const nameB = b.name;
    const surnameA = a.surname;
    const surnameB = b.surname;
    const ageA = a.age;
    const ageB = b.age;
    const marriedA = a.married;
    const marriedB = b.married;
    const averageGradeA = a.grades.reduce((sum, n) => sum + n)
      / a.grades.length;
    const averageGradeB = b.grades.reduce((sum, n) => sum + n)
    / b.grades.length;

    switch (sortBy) {
      case SortType.Name:

        switch (order) {
          case ('asc'):
            return nameA < nameB ? -1 : 1;

          default:
            return nameA < nameB ? 1 : -1;
        }

      case SortType.Surname:

        switch (order) {
          case ('asc'):
            return surnameA < surnameB ? -1 : 1;

          default:
            return surnameA < surnameB ? 1 : -1;
        }

      case SortType.Age:
        if (ageA === ageB) {
          return 0;
        }

        switch (order) {
          case ('asc'):
            return ageA < ageB ? -1 : 1;

          default:
            return ageA < ageB ? 1 : -1;
        }

      case SortType.Married:
        if (marriedA === marriedB) {
          return 0;
        }

        switch (order) {
          case ('asc'):
            return marriedA < marriedB ? -1 : 1;

          default:
            return marriedA < marriedB ? 1 : -1;
        }

      case SortType.AverageGrade:
        if (averageGradeA === averageGradeB) {
          return 0;
        }

        switch (order) {
          case ('asc'):
            return averageGradeA < averageGradeB ? -1 : 1;

          default:
            return averageGradeA < averageGradeB ? 1 : -1;
        }

      default:
        return 0;
    }
  });

  // console.log(copyStudents);

  return copyStudents;
}

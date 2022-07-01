
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
    const {
      name: nameA,
      surname: surnameA,
      age: ageA,
      married: marriedA,
      grades: gradesA,
    } = a;

    const {
      name: nameB,
      surname: surnameB,
      age: ageB,
      married: marriedB,
      grades: gradesB,
    } = b;

    const averageGradeA = gradesA.reduce((sum, n) => sum + n)
      / a.grades.length;
    const averageGradeB = gradesB.reduce((sum, n) => sum + n)
    / b.grades.length;

    const orderSwitcher = order === 'asc' ? 1 : -1;

    switch (sortBy) {
      case SortType.Name:
        return nameA < nameB ? (-1 * orderSwitcher) : (1 * orderSwitcher);

      case SortType.Surname:
        return surnameA < surnameB ? (-1 * orderSwitcher) : (1 * orderSwitcher);

      case SortType.Age:
        if (ageA === ageB) {
          return 0;
        }

        return ageA < ageB ? (-1 * orderSwitcher) : (1 * orderSwitcher);

      case SortType.Married:
        if (marriedA === marriedB) {
          return 0;
        }

        return marriedA < marriedB ? (-1 * orderSwitcher) : (1 * orderSwitcher);

      case SortType.AverageGrade:
        if (averageGradeA === averageGradeB) {
          return 0;
        }

        return averageGradeA < averageGradeB
          ? (-1 * orderSwitcher) : (1 * orderSwitcher);

      default:
        return 0;
    }
  });

  return copyStudents;
}

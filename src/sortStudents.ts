export interface Student {
  name: string;
  surname: string;
  age: number,
  married: boolean,
  grades: number [],

}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const copySt = [...students];

  const sortStrings = (property: 'name' | 'surname') => {
    return (a: Student, b: Student): number => {
      const valueA = a[property].toUpperCase();
      const valueB = b[property].toUpperCase();

      if (order === 'asc') {
        return valueA.localeCompare(valueB);
      }

      if (order === 'desc') {
        return valueB.localeCompare(valueA);
      }

      return 0;
    };
  };

  const sortByMarrige = (a: Student, b: Student) : number => {
    const marriedA = a.married;
    const marriedB = b.married;

    if (marriedA === marriedB) {
      return 0;
    }

    if (marriedA && !marriedB) {
      return -1;
    }

    if (!marriedA && marriedB) {
      return 1;
    }

    return 0;
  };

  const calculateAverageAge = (student: Student): number => {
    return student.grades.reduce(
      (sum, grade) => sum + grade,
    ) / student.grades.length;
  };

  const sortByAverageAge = (a: Student, b: Student): number => {
    const averageGradeA = calculateAverageAge(a);

    const averageGradeB = calculateAverageAge(b);

    let num = 0;

    if (order === 'desc') {
      num = averageGradeB - averageGradeA;
    }

    if (order === 'asc') {
      num = averageGradeA - averageGradeB;
    }

    return num;
  };

  switch (sortBy) {
    case SortType.Name:
      return copySt.sort(sortStrings('name'));

    case SortType.Surname:

      return copySt.sort(sortStrings('surname'));

    case SortType.Age:
      return copySt.sort((a: Student, b: Student): number => b.age - a.age);

    case SortType.Married:

      return copySt.sort(sortByMarrige);

    case SortType.AverageGrade:
      return copySt.sort(sortByAverageAge);

    default:
      return students;
  }
}

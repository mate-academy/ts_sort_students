export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function sortByAge(students: Student[], descOrder: boolean): Student[] {
  const sorted = [...students];

  if (descOrder) {
    sorted.sort((student1, student2) => student2.age - student1.age);
  } else {
    sorted.sort((student1, student2) => student1.age - student2.age);
  }

  return sorted;
}

function sortByAverageGrade(students: Student[],
  descOrder: boolean): Student[] {
  const sorted = [...students];

  sorted.sort((student1, student2) => {
    const student1GradesSum = student1.grades
      .reduce((prev, curr) => prev + curr, 0);
    const student1AverageGrade = student1GradesSum / student1.grades.length;

    const student2GradesSum = student2.grades
      .reduce((prev, curr) => prev + curr, 0);
    const student2AverageGrade = student2GradesSum / student2.grades.length;

    return descOrder
      ? student2AverageGrade - student1AverageGrade
      : student1AverageGrade - student2AverageGrade;
  });

  return sorted;
}

function sortByMarried(students: Student[], descOrder: boolean): Student[] {
  const sorted = [...students];

  if (descOrder) {
    sorted.sort((student1, student2) => +student2.married - +student1.married);
  } else {
    sorted.sort((student1, student2) => +student1.married - +student2.married);
  }

  return sorted;
}

function sortByName(students: Student[], descOrder: boolean): Student[] {
  const sorted = [...students];

  sorted.sort((student1, student2) => {
    return student1.name.localeCompare(student2.name);
  });

  return descOrder ? sorted.reverse() : sorted;
}

function sortBySurname(students: Student[], descOrder: boolean): Student[] {
  const sorted = [...students];

  sorted.sort((student1, student2) => {
    return student1.surname.localeCompare(student2.surname);
  });

  return descOrder ? sorted.reverse() : sorted;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const desc = order === 'desc';

  switch (sortBy) {
    case SortType.Age:
      return sortByAge(students, desc);

    case SortType.AverageGrade:
      return sortByAverageGrade(students, desc);

    case SortType.Married:
      return sortByMarried(students, desc);

    case SortType.Name:
      return sortByName(students, desc);

    case SortType.Surname:
      return sortBySurname(students, desc);

    default:
      return students;
  }
}

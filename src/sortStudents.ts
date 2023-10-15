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

function sortNameAsc(arr: Student[]): Student[] {
  return arr.sort((a: Student, b: Student): number => {
    return a.name.localeCompare(b.name);
  });
}

function sortNameDesc(arr: Student[]): Student[] {
  return arr.sort((a: Student, b: Student): number => {
    return b.name.localeCompare(a.name);
  });
}

function sortSurnameAsc(arr: Student[]): Student[] {
  return arr.sort((a: Student, b: Student): number => {
    return a.surname.localeCompare(b.surname);
  });
}

function sortSurnameDesc(arr: Student[]): Student[] {
  return arr.sort((a: Student, b: Student): number => {
    return b.surname.localeCompare(a.surname);
  });
}

function sortMarriedAsc(arr: Student[]): Student[] {
  return arr.sort((a: Student, b: Student): number => {
    return a.married.toString().localeCompare(b.married.toString());
  });
}

function sortMarriedDesc(arr: Student[]): Student[] {
  return arr.sort((a: Student, b: Student): number => {
    return b.married.toString().localeCompare(a.married.toString());
  });
}

function sortAgeAsc(arr: Student[]): Student[] {
  return arr.sort((a: Student, b: Student): number => {
    return (a.age - b.age);
  });
}

function sortAgeDesc(arr: Student[]): Student[] {
  return arr.sort((a: Student, b: Student): number => {
    return (b.age - a.age);
  });
}

function sortAverageGradeAsc(arr: Student[]): Student[] {
  return arr.sort((a: Student, b: Student): number => {
    return (a.grades
      .reduce((acc, value): number => {
        return (acc + value);
      }, 0) / (a.grades.length) - b.grades
      .reduce((acc, value): number => {
        return (acc + value);
      }, 0) / (b.grades.length));
  });
}

function sortAverageGradeDesc(arr: Student[]): Student[] {
  return arr.sort((a: Student, b: Student): number => {
    return (b.grades
      .reduce((acc, value): number => {
        return (acc + value);
      }, 0) / (b.grades.length) - a.grades
      .reduce((acc, value): number => {
        return (acc + value);
      }, 0) / (a.grades.length));
  });
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy = [...students];

  if (sortBy === SortType.Name) {
    if (order === 'asc') {
      sortNameAsc(copy);
    } else {
      sortNameDesc(copy);
    }
  } else if (sortBy === SortType.Surname) {
    if (order === 'asc') {
      sortSurnameAsc(copy);
    } else {
      sortSurnameDesc(copy);
    }
  } else if (sortBy === SortType.Age) {
    if (order === 'asc') {
      sortAgeAsc(copy);
    } else {
      sortAgeDesc(copy);
    }
  } else if (sortBy === SortType.Married) {
    if (order === 'asc') {
      sortMarriedAsc(copy);
    } else {
      sortMarriedDesc(copy);
    }
  } else if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      sortAverageGradeAsc(copy);
    } else {
      sortAverageGradeDesc(copy);
    }
  }

  return copy;
}

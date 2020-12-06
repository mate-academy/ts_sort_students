'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

const getAvarege = (arr: number[]): number =>
  arr.reduce((acc, el) => acc + el) / arr.length;

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder): Student[] {
  const studentsCopy = [...students];
  const isAsc = order === 'asc';

  studentsCopy.sort((student1, student2) => {
    switch (sortBy) {
      case SortField.Name:
      case SortField.Surname:
        return isAsc
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      case SortField.Age:
        return isAsc
          ? student1[sortBy] - student2[sortBy]
          : student2[sortBy] - student1[sortBy];
      case SortField.Married:
        if (student1[sortBy] === student2[sortBy]) {
          return 0;
        }

        return student1[sortBy] > student2[sortBy] ? -1 : 1;
      case SortField.AverageGrade:
        const firstStudent = getAvarege(student1[sortBy]);
        const secondStudent = getAvarege(student2[sortBy]);

        return isAsc
          ? firstStudent - secondStudent
          : secondStudent - firstStudent;
    }
  });

  return studentsCopy;
}

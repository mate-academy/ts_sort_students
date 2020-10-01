'use strict';
type StudentType = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
};

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: StudentType[],
  sortBy: SortField,
  order: SortOrder): Array<StudentType> {
  const studentsCopy = [...students];

  studentsCopy.sort((student1, student2) => {
    switch (sortBy) {
      case SortField.Name:
      case SortField.Surname:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      case SortField.Age:
        return order === 'asc'
          ? student1[sortBy] - student2[sortBy]
          : student2[sortBy] - student1[sortBy];
      case SortField.Married:
        if (student1[sortBy] === student2[sortBy]) {
          return 0;
        }

        return student1[sortBy] > student2[sortBy] ? -1 : 1;
      case SortField.AverageGrade:
        const firstStudent = student1[sortBy]
          .reduce((sum = 0, item) => sum + item) / student1[sortBy].length;
        const secondStudent = student2[sortBy]
          .reduce((sum = 0, item) => sum + item) / student2[sortBy].length;

        return order === 'asc'
          ? firstStudent - secondStudent
          : secondStudent - firstStudent;
    }
  });

  return studentsCopy;
}

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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] { // eslint-disable-line
  const studentsRes = JSON.parse(JSON.stringify(students));

  switch (sortBy) {
    case 'name' || 'surname':
      return studentsRes.sort((student1: Student, student2: Student) => {
        if (order === 'asc') {
          return student1[sortBy].localeCompare(student2[sortBy]);
        }

        return student2[sortBy].localeCompare(student1[sortBy]);
      });

    case 'age' || 'married':
      return studentsRes.sort((student1: Student, student2: Student) => {
        if (order === 'asc') {
          return student1[sortBy] - student2[sortBy];
        }

        return student2[sortBy] - student1[sortBy];
      });

    case 'grades':
      return studentsRes.sort((student1: Student, student2: Student) => {
        const firstAvarage = student1[sortBy].reduce((elem1, elem2) => elem1 + elem2) / student1[sortBy].length; // eslint-disable-line
        const secondAvarage = student2[sortBy].reduce((elem1, elem2) => elem1 + elem2) / student2[sortBy].length; // eslint-disable-line

        if (order === 'asc') {
          return firstAvarage - secondAvarage;
        }

        return secondAvarage - firstAvarage;
      });

    default:
      return studentsRes;
  }
}

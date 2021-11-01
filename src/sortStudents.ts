
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

function getAverageGrade(grades: number[]):number {
  const average = grades.reduce((sum, mark) => sum + mark, 0);

  return average / grades.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order:SortOrder,
): Student[] {
  const coppyStudents: Student[] = [...students];
  const isAscending:boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      coppyStudents.sort((student1, student2) => (isAscending
        ? student1.name.localeCompare(student2.name)
        : student2.name.localeCompare(student1.name)
      ));
      break;

    case SortType.Surname:
      coppyStudents.sort((student1, student2) => (isAscending
        ? student1.surname.localeCompare(student2.surname)
        : student2.surname.localeCompare(student1.surname)
      ));
      break;

    case SortType.Age:
      coppyStudents.sort((student1, student2) => (isAscending
        ? student1.age - student2.age
        : student2.age - student1.age
      ));
      break;

    case SortType.Married:
      coppyStudents.sort((student1, student2) => (isAscending
        ? +student1.married - +student2.married
        : +student2.married - +student1.married
      ));
      break;

    case SortType.AverageGrade:
      coppyStudents.sort((student1, student2) => (isAscending
        ? getAverageGrade(student1.grades) - getAverageGrade(student2.grades)
        : getAverageGrade(student2.grades) - getAverageGrade(student1.grades)
      ));
      break;

    default: break;
  }

  return coppyStudents;
}

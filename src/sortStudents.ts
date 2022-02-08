
export interface Student {
  name: string;
  surname:string;
  age: number;
  married: boolean;
  grades:number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc'|'desc';

function avg(grades:number[]):number {
  return grades.reduce((sum:number, grade:number) => sum + grade, 0)
  / grades.length;
}

export function sortStudents(

  students :Student[],
  sortBy : SortType,
  order:SortOrder,
)
  :Student[] {
  const sortedArray:Student[] = [...students].map((student: Student) => {
    return { ...student };
  });

  switch (sortBy) {
    case SortType.Name:
      sortedArray.sort((studentA:Student, studentB:Student) => {
        return order === 'asc' ? studentA.name.localeCompare(studentB.name)
          : studentB.name.localeCompare(studentA.name);
      });
      break;

    case 'surname':

      sortedArray.sort((studentA:Student, studentB:Student) => {
        return order === 'asc'
          ? studentA.surname.localeCompare(studentB.surname)
          : studentB.surname.localeCompare(studentA.name);
      });
      break;

    case 'age':

      sortedArray.sort((
        studentA:Student, studentB:Student,
      ) => studentB.age - studentA.age);
      break;

    case 'married':

      sortedArray.sort((studentA:Student, studentB:Student) => {
        const a:number = (studentA.married && !studentB.married) ? -1 : 1;
        const b:number = (studentA.married && !studentB.married) ? 1 : -1;

        return order === 'asc' ? b : a;
      });
      break;

    default:

      sortedArray.sort((studentA:Student, studentB:Student) => {
        return order === 'asc'
          ? avg(studentA.grades) - avg(studentB.grades)
          : avg(studentB.grades) - avg(studentA.grades);
      });
      break;
  }

  return sortedArray;
}

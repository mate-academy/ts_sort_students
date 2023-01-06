
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      sortedStudents.sort((person1, person2) => (order === 'asc'
        ? person1[sortBy].localeCompare(person2[sortBy])
        : person2[sortBy].localeCompare(person1[sortBy])));
      break;

    case 'age':
    case 'married':
      sortedStudents.sort((person1, person2) => (order === 'asc'
        ? (Number(person1[sortBy]) - Number(person2[sortBy]))
        : (Number(person2[sortBy]) - Number(person1[sortBy]))));
      break;

    default:
      sortedStudents.sort((person1, person2) => {
        const sum1 = person1.grades.reduce((a, b) => (a + b));
        const avr1 = sum1 / person1.grades.length;

        const sum2 = person2.grades.reduce((a, b) => (a + b));
        const avr2 = sum2 / person2.grades.length;

        return (order === 'asc')
          ? (avr1 - avr2)
          : (avr2 - avr1);
      });
  }

  return sortedStudents;
}


export interface Student {
  // describe Student interface
  name : string;
  surname: string;
  age: number;
  married: boolean;
  grades: Array<number>;
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
type SortOrder = 'desc' | 'asc';

function getAverageForPerson(pers : Student) : number {
  const initialValue : number = 0;

  return (pers.grades.reduce(
    (prev, curr) => prev + curr, initialValue,
  )) / pers.grades.length;
}

export function sortStudents(
  students : Array<Student>,
  sortBy : SortType,
  order : SortOrder,
) : Array<Student> {
  // write your function
  const sorted = JSON.parse(JSON.stringify(students));

  return sorted.sort((person1 : Student, person2 : Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return person1[sortBy].localeCompare(person2[sortBy]);

      case SortType.Age:

        if (order === 'asc') {
          return person1[sortBy] - person2[sortBy];
        }

        return person2[sortBy] - person1[sortBy];

      case SortType.AverageGrade: {
        if (order === 'asc') {
          return getAverageForPerson(person1) - getAverageForPerson(person2);
        }

        return getAverageForPerson(person2) - getAverageForPerson(person1);
      }

      case SortType.Married: {
        return +person2[sortBy] - +person1[sortBy];
      }
      default:
        return 0;
    }
  });
}

/*

function sortBy(people: Person[], field: keyof Person) {
  const copy = [...people];
  return copy.sort((person1, person2) => {
    switch(field) {
      case ‘name’:
      case ‘sex’:
        return person1[field].localeCompare(person2[field]);
      case ‘born’:
      case ‘died’:
        return person1[field] - person2[field];
      default:
        return 0;
    }
  });
}

*/

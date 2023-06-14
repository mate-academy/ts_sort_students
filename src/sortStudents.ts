
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
  AverageGrade = 'Grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: string,
):Student[] {
  const studentCopy: Student[] = JSON.parse(JSON.stringify(students));

  if (sortBy === SortType.Surname || sortBy === SortType.Name) {
    studentCopy.sort(
      (person1, person2) => {
        // if (order === 'asc') {
        //   return person1[sortBy].localeCompare(person2[sortBy]);
        // }

        return person1[sortBy].localeCompare(person2[sortBy]);
      },
    );
  }

  if ((sortBy === SortType.Age) || (sortBy === SortType.Married)) {
    studentCopy.sort((person1, person2) => {
      if (order === 'desc') {
        return (Number(person2[sortBy])) - (Number(person1[sortBy]));
      }

      return (Number(person1[sortBy])) - (Number(person2[sortBy]));
    });
  }

  if (sortBy === SortType.AverageGrade) {
    studentCopy.sort((person1, person2) => {
      const average1:number = person1.grades
        .reduce((sum, grade) => sum + grade);

      const average2:number = person2.grades
        .reduce((sum, grade) => sum + grade);

      if (order === 'desc') {
        return (average2 / person2.grades.length)
      - (average1 / person1.grades.length);
      }

      return (average1 / person1.grades.length)
      - (average2 / person2.grades.length);
    });
  }

  // if (order === 'desc') {
  //   studentCopy.reverse();
  // }

  return studentCopy;
}

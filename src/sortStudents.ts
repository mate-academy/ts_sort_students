
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

interface StudentWithAverage extends Student {
  averageGrades?: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): StudentWithAverage[] {
  let studentsWithAverage: StudentWithAverage[] = [...students];

  studentsWithAverage = studentsWithAverage.map((student) => {
    const obj = { ...student };

    obj.averageGrades = student.grades
      .reduce((sum, grade) => sum + grade, 0) / student.grades.length;

    return obj;
  });

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsWithAverage.sort((student1, student2) => (
        (order === 'asc')
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
    case SortType.AverageGrade:
      return studentsWithAverage.sort((student1, student2) => {
        const st1 = student1[sortBy];
        const st2 = student2[sortBy];

        if (st1 !== undefined && st2 !== undefined) {
          return (order === 'asc')
            ? +st1 - +st2
            : +st2 - +st1;
        }

        return 0;
      });

    default:
      throw new Error('wrong sort type');
  }
}

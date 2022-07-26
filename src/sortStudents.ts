
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
    case 'name':
    case 'surname':
      if (order === 'asc') {
        return studentsWithAverage.sort((student1, student2) => (
          student1[sortBy].localeCompare(student2[sortBy])
        ));
      }

      return studentsWithAverage.sort((student1, student2) => (
        student2[sortBy].localeCompare(student1[sortBy])
      ));

    case 'age':
    case 'married':
    case 'averageGrades':
      if (order === 'asc') {
        return studentsWithAverage.sort((student1, student2) => (
          +student1[sortBy] - +student2[sortBy]
        ));
      }

      return studentsWithAverage.sort((student1, student2) => (
        +student2[sortBy] - +student1[sortBy]
      ));

    default:
      throw new Error('wrong sort type');
  }
}

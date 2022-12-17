
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
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
export type SortOrder = 'asc' | 'desc';

const getAverageGrade = ({ grades }: Student): number => {
  return grades
    .reduce((curr: number, prev: number) => curr + prev, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArray = [...students];

  return studentsArray.sort(
    (currentStudent, previousStudent) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? currentStudent[sortBy].localeCompare(previousStudent[sortBy])
            : previousStudent[sortBy].localeCompare(currentStudent[sortBy]);
        case SortType.Age:
          return order === 'asc'
            ? currentStudent[sortBy] - previousStudent[sortBy]
            : previousStudent[sortBy] - currentStudent[sortBy];
        case SortType.Married:
          return order === 'asc'
            ? Number(currentStudent[sortBy]) - Number(previousStudent[sortBy])
            : Number(previousStudent[sortBy]) - Number(currentStudent[sortBy]);
        case SortType.AverageGrade:
          return order === 'asc'
            ? getAverageGrade(currentStudent) - getAverageGrade(previousStudent)
            // eslint-disable-next-line max-len
            : getAverageGrade(previousStudent) - getAverageGrade(currentStudent);
        default:
          return 0;
      }
    },
  );
}

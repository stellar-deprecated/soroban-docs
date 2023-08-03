import { CourseData, CoursePostData } from "interfaces/course-data";
import React from "react";

export type CoursesContextProps = { 
  coursesData: CourseData[];
  setData: (data: CourseData[]) => void;
  updateProgress: (id: string, item: Partial<CoursePostData>) => void;
};

const CoursesContext = React.createContext<CoursesContextProps>({
  coursesData: [],
  setData: () => {},
  updateProgress: () => {},
});

export default CoursesContext;

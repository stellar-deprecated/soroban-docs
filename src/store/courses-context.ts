import React from "react";
import { CourseData, CoursePostData } from "../interfaces/course-data";

export type CoursesContextProps = { 
  coursesData: CourseData[];
  setData: (data: CourseData[]) => void;
  updateProgress: (item: Partial<CoursePostData>) => void;
};

const CoursesContext = React.createContext<CoursesContextProps>({
  coursesData: [],
  setData: () => {},
  updateProgress: () => {},
});

export default CoursesContext;

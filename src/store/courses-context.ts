import React from "react";
import { CourseData } from "../interfaces/course-data";

export type CoursesContextProps = { 
  coursesData: CourseData[];
  setData: (data: CourseData[]) => void;
  updateProgress: (item: CourseData) => void;
};

const CoursesContext = React.createContext<CoursesContextProps>({
  coursesData: [],
  setData: () => {},
  updateProgress: () => {},
});

export default CoursesContext;

import { CourseData, CoursePostData } from "interfaces/course-data";
import React, { PropsWithChildren, useReducer } from "react";
import CoursesContext, { CoursesContextProps } from "./courses-context";

interface CoursesState {
  coursesData: CourseData[];
}

interface Action {
  type: string;
  data?: CourseData[];
  item?: Partial<CoursePostData>;
  id?: string;
}

const defaultState: CoursesState = {
  coursesData: [],
};

const coursesReducer = (state: CoursesState, action: Action) => {
  if (action.type === "SET_DATA" && action.data) {
    return {
      coursesData: [...action.data],
    };
  }

  if (action.type === "UPDATE_PROGRESS" && action.item) {
    let updatedCourses: CourseData[];
    const publicKey = `${action.item.publickey}:${action.item.course_index}`;
    const existingItemIdx = state.coursesData.findIndex((item: CourseData) => item.publickey === publicKey);
    const existingItem: CourseData | undefined = state.coursesData[existingItemIdx];

    if (existingItem) {
      const updatedItem: CourseData = {
        publickey: publicKey,
        course_data: {
          ...existingItem.course_data,
          course_progress: action.item.course_progress as number,
        }
      };

      updatedCourses = [...state.coursesData];
      updatedCourses[existingItemIdx] = updatedItem;
    } else {
      updatedCourses = state.coursesData.concat({
        publickey: publicKey,
        course_data: {
          course_progress: action.item.course_progress as number,
          url: action.item.url || '',
          completed_at: action.item.completed_at || '',
        }
      });
    }

    return {
      coursesData: updatedCourses,
    };
  }

  return defaultState;
};

const CoursesContextProvider = (props: PropsWithChildren) => {
  const [state, dispatchAction] = useReducer(coursesReducer, defaultState);

  const setDataHandler = (data: CourseData[]) => {
    dispatchAction({
      type: "SET_DATA",
      data,
    });
  };

  const updateProgressHandler = (id: string, item: Partial<CoursePostData>) => {
    dispatchAction({
      type: "UPDATE_PROGRESS",
      item,
      id,
    });
  };

  const coursesCtx: CoursesContextProps = {
    coursesData: state.coursesData,
    setData: setDataHandler,
    updateProgress: updateProgressHandler,
  };

  return (
    <CoursesContext.Provider value={coursesCtx}>
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
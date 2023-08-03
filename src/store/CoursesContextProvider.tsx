import React, { PropsWithChildren, useReducer } from "react";
import CoursesContext, { CoursesContextProps } from "./courses-context";
import { CourseData, CoursePostData } from "../interfaces/course-data";
// import { updateCourseProgress } from "services/courses";

interface CoursesState {
  coursesData: CourseData[];
}

interface Action {
  type: string;
  data?: CourseData[];
  item?: Partial<CoursePostData>;
}

enum ActionType {
  SET_DATA = "SET_DATA",
  UPDATE_PROGRESS = "UPDATE_PROGRESS",
}

const defaultState: CoursesState = {
  coursesData: [],
};

const coursesReducer = (state: CoursesState, action: Action) => {
  if (action.type === ActionType.SET_DATA && action.data) {
    return {
      coursesData: [...action.data],
    };
  }

  if (action.type === ActionType.UPDATE_PROGRESS && action.item) {
    // updateCourseProgress(action.item);
    const {
      publickey,
      url,
      course_id: courseId,
      completed_at: completedAt,
      start_date: startDate,
    } = action.item;
    const publicKey = `${publickey}:${courseId}`;
    const existingItemIdx = state.coursesData.findIndex(
      (item: CourseData) => item.publickey === publicKey,
    );

    const { course_data: existingData } = state.coursesData[existingItemIdx];

    const updatedItem: CourseData = {
      publickey: publicKey,
      course_data: {
        ...existingData,
        course_progress:
          action.item.course_progress || existingData.course_progress,
        url: url || existingData.url,
        start_date: startDate || existingData.start_date,
        completed_at: completedAt || existingData.completed_at,
      },
    };

    const updatedCourses = [...state.coursesData];
    updatedCourses[existingItemIdx] = updatedItem;

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
      type: ActionType.SET_DATA,
      data,
    });
  };

  const updateProgressHandler = (item: Partial<CoursePostData>) => {
    dispatchAction({
      type: ActionType.UPDATE_PROGRESS,
      item,
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

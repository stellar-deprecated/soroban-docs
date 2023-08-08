import React, { PropsWithChildren, useReducer } from "react";
import CoursesContext, { CoursesContextProps } from "./courses-context";
import { CourseData } from "../interfaces/course-data";

interface CoursesState {
  coursesData: CourseData[];
}

interface Action {
  type: string;
  data?: CourseData[];
  item?: CourseData;
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
    const { userId } = action.item;
    const existingItemIdx = state.coursesData.findIndex(
      (item: CourseData) => item.userId === userId,
    );
    const updatedCourses: CourseData[] = [...state.coursesData];

    const existedItem = state.coursesData[existingItemIdx];

    if (existedItem) {
      updatedCourses[existingItemIdx] = action.item;
    } else {
      updatedCourses.push(action.item);
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
      type: ActionType.SET_DATA,
      data,
    });
  };

  const updateProgressHandler = (item: CourseData) => {
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

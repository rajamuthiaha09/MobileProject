// context/LikedCoursesContext.js
import React, { createContext, useState, useContext } from 'react';

const LikedCoursesContext = createContext();

export const useLikedCourses = () => {
  return useContext(LikedCoursesContext);
};

export const LikedCoursesProvider = ({ children }) => {
  const [likedCourses, setLikedCourses] = useState({});

  const toggleLike = (courseId) => {
    setLikedCourses(prevLikedCourses => ({
      ...prevLikedCourses,
      [courseId]: !prevLikedCourses[courseId]
    }));
  };

  return (
    <LikedCoursesContext.Provider value={{ likedCourses, toggleLike }}>
      {children}
    </LikedCoursesContext.Provider>
  );
};

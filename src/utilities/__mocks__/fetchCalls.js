import mockUser from "../../utilities/mockUser";
import mockStudentClass from "../mockStudentClass";
import { mockTeacherClass } from "../mockTeacherClass";

export const login = async body => {
  const mockResponse = { access_token: "test" };
  return Promise.resolve(mockResponse);
};

export const signUp = async body => {
  const mockResponse = { response: {} };

  return Promise.resolve(mockResponse);
};

export const userFetch = async webToken => {
  const mockResponse = mockUser;
  return Promise.resolve(mockResponse);
};

export const postGameUserUpdate = async (update, webToken) => {
  const mockResponse = { response: [] };

  return Promise.resolve(mockResponse);
};

export const forgotMyPasswordCall = async email => {
  const mockResponse = { response: [] };

  return Promise.resolve(mockResponse);
};

export const changeAvatarFetch = async (avatar, id, webToken) => {
  const mockResponse = { reponse: [] };

  return Promise.resolve(mockResponse);
};

export const changeProfileFetch = async (name, id, webToken) => {
  const mockResponse = { response: [] };

  return Promise.resolve(mockResponse);
};

export const changePasswordFetch = async (
  oldPassword,
  newPassword,
  id,
  webToken
) => {
  const mockResponse = { response: [] };

  return Promise.resolve(mockResponse);
};

export const createClassFetch = async (name, webToken) => {
  const mockResponse = { response: [] };

  return Promise.resolve(mockResponse);
};

export const joinClassFetch = async (class_key, id, webToken) => {};

export const leaveClassFetch = async (student_id, class_id, webToken) => {
  const mockResponse = { response: [] };

  return Promise.resolve(mockResponse);
};

export const resetPasswordFetch = async (password, token) => {
  const mockResponse = { response: [] };

  return Promise.resolve(mockResponse);
};

export const studentClassFetch = async webToken => {
  const mockResponse = mockStudentClass;

  return Promise.resolve(mockResponse);
};

export const teacherAllClassesFetch = async webToken => {
  const mockResponse = mockTeacherClass;

  return Promise.resolve(mockResponse);
};

export const teacherSpecificClassFetch = async (id, webToken) => {
  const mockResponse = mockTeacherClass;

  return Promise.resolve(mockResponse);
};

export const deleteClassFetch = async (id, webToken) => {
  const mockResponse = { data: "success" };

  return Promise.resolve(mockResponse);
};

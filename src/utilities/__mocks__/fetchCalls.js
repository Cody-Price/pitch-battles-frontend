import mockUser from "../../utilities/mockUser";
import { mockStudentClass } from "../mockStudentClass";
import { mockTeacherClass } from "../mockTeacherClass";

export const login = jest.fn(async () => {
  const mockResponse = { access_token: "test" };
  return Promise.resolve(mockResponse);
});

export const signUp = jest.fn(async () => {
  const mockResponse = { response: {} };

  return Promise.resolve(mockResponse);
});

export const userFetch = jest.fn(async () => {
  const mockResponse = { data: mockUser };
  return Promise.resolve(mockResponse);
});

export const postGameUserUpdate = jest.fn(async (update, webToken) => {
  const mockResponse = { response: [] };

  return Promise.resolve(mockResponse);
});

export const forgotMyPasswordCall = jest.fn(async email => {
  const mockResponse = { response: [] };

  return Promise.resolve(mockResponse);
});

export const changeAvatarFetch = jest.fn(async (avatar, id, webToken) => {
  const mockResponse = { reponse: [] };

  return Promise.resolve(mockResponse);
});

export const changeProfileFetch = jest.fn(async () => {
  const mockResponse = { response: [] };

  return Promise.resolve(mockResponse);
});

export const changePasswordFetch = jest.fn(
  async (oldPassword, newPassword, id, webToken) => {
    const mockResponse = { response: [] };

    return Promise.resolve(mockResponse);
  }
);

export const createClassFetch = jest.fn(async (name, webToken) => {
  const mockResponse = { response: [] };

  return Promise.resolve(mockResponse);
});

export const joinClassFetch = jest.fn(async (class_key, id, webToken) => {});

export const leaveClassFetch = jest.fn(
  async (student_id, class_id, webToken) => {
    const mockResponse = { response: [] };

    return Promise.resolve(mockResponse);
  }
);

export const resetPasswordFetch = jest.fn(async (password, token) => {
  const mockResponse = { response: [] };

  return Promise.resolve(mockResponse);
});

export const studentClassFetch = jest.fn(async webToken => {
  const mockResponse = mockStudentClass;

  return Promise.resolve(mockResponse);
});

export const teacherAllClassesFetch = jest.fn(async webTokeb => {
  const mockResponse = mockTeacherClass;

  return Promise.resolve(mockResponse);
});

export const teacherSpecificClassFetch = jest.fn(async (id, webToken) => {
  const mockResponse = mockTeacherClass;

  return Promise.resolve(mockResponse);
});

export const deleteClassFetch = jest.fn(async (id, webToken) => {
  const mockResponse = { data: "success" };

  return Promise.resolve(mockResponse);
});

export const login = async body => {
  const url = "https://pitch-battles-api.herokuapp.com/login";

  const options = {
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(url, options);
  return await response.json();
};

export const signUp = async body => {
  const url = "https://pitch-battles-api.herokuapp.com/api/v1/users";

  const options = {
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(url, options);
  return await response.json();
};

export const userFetch = async webToken => {
  const url = "https://pitch-battles-api.herokuapp.com/api/v1/dashboard/";

  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `bearer ${webToken}`,
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(url, options);
  return await response.json();
};

export const postGameUserUpdate = async (update, webToken) => {
  console.log(update, webToken);
  const url = "https://pitch-battles-api.herokuapp.com/api/v1/games/";

  const options = {
    body: JSON.stringify(update),
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${webToken}`
    }
  };

  const response = await fetch(url, options);
  return await response.json();
};

export const forgotMyPasswordCall = async email => {
  // const url
  // return response
  return Promise.resolve(true);
};

export const changeAvatarFetch = async (avatar, id, webToken) => {
  const url = `https://pitch-battles-api.herokuapp.com/api/v1/users/${id}`;

  const body = { avatar: avatar };

  const options = {
    body: JSON.stringify(body),
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${webToken}`
    }
  };

  const response = await fetch(url, options);
  return await response.json();
};

export const changeProfileFetch = async (name, id, webToken) => {
  const url = `https://pitch-battles-api.herokuapp.com/api/v1/users/${id}`;

  const options = {
    body: JSON.stringify(name),
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${webToken}`
    }
  };

  const response = await fetch(url, options);
  return await response.json();
};

export const changePassword = async (
  oldPassword,
  newPassword,
  id,
  webToken
) => {
  const url = `https://pitch-battles-api.herokuapp.com/api/v1/users/${id}`;

  const body = {
    current_password: oldPassword,
    password: newPassword
  };

  const options = {
    body: JSON.stringify(body),
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${webToken}`
    }
  };

  const response = await fetch(url, options);
  return await response.json();
};

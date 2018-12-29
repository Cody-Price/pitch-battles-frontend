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

export const postGameUserUpdate = async (update, user) => {
  const url = "https://pitch-battles-api.herokuapp.com/api/v1/users";

  const body = update;

  const options = {
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  };
  console.log(url, options, user);
  return user;
};

export const forgotMyPasswordCall = async email => {
  // const url
  // return response
  return true;
};

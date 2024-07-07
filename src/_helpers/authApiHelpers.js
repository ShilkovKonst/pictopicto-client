export const signup = async (body) => {
  const csrfToken = await getCsrfToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signUp`,
    {
      method: "POST",
      body: body,
      headers: {
        "X-XSRF-TOKEN": csrfToken,// add CSRF token to headers
      },
      credentials: "include",
    }
  ).catch((e) => {
    throw new Error("Failed to create user: " + e.message);
  });
  return res.json();
};

export const signin = async (body) => {
  const csrfToken = await getCsrfToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signIn`,
    {
      method: "POST",
      body: body,
      headers: {
        "X-XSRF-TOKEN": csrfToken, // добавляем CSRF токен в заголовки
      },
      credentials: "include", // важно для отправки кук
    }
  ).catch((e) => {
    throw new Error("Failed to login user: " + e.message);
  });
  if (res.ok) {
    console.log("user login success");
  }
  return res.json();
};

export const getCsrfToken = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/csrf/token`,
    {
      method: "GET",
      credentials: "include", // важно для получения и отправки кук
    }
  );

  if (res.ok) {
    const data = await res.json();
    return data.token; // assuming the token is in the 'token' field
  } else {
    throw new Error("Failed to fetch CSRF token");
  }
};

const baseUrl = `http://localhost:8080/api`;

export async function fetchAllUsers() {
  const response = await fetch(`${baseUrl}/users`);
  const result = await response.json();
  return result;
}

export async function fetchAllPosts() {
  const response = await fetch(`${baseUrl}/posts`);
  const result = await response.json();
  return result;
}

export async function fetchSingleUser(id) {
  const response = await fetch(`${baseUrl}/users/${id}`);
  const result = await response.json();
  return result;
}

export async function fetchCreateUser(data) {
  try {
    const response = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data), // e.g., { username: "patsy" }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchUpdateUser(item, id, data) {
  try {
    const response = await fetch(`${baseUrl}/${item}/${id}`, {
      method: "PUT", // or 'PATCH' if you prefer
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchRemoveUser(item, id) {
  try {
    const response = await fetch(`${baseUrl}/${item}/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

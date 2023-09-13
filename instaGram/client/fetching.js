const baseUrl =  `http://localhost:8080/api`;

export async function fetchAllUser() {
  try {
    const response = await fetch(`${baseUrl}/users`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function fetchSingleUser(id) {
  try {
    const response = await fetch(`${baseUrl}/users/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

// export async function create(item, data) {
//   try {
//     const response = await fetch(`${baseUrl}/${item}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// export async function update(item, id, data) {
//   try {
//     const response = await fetch(`${baseUrl}/${item}/${id}`, {
//       method: 'PUT', // or 'PATCH' if you prefer
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// export async function remove(item, id) {
//   try {
//     const response = await fetch(`${baseUrl}/${item}/${id}`, {
//       method: 'DELETE',
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

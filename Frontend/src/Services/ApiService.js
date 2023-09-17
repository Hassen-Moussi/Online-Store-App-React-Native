

const BASE_URL = 'http://192.168.1.213:8080'; 

export async function createUser(Username, Email, password) {
    try {
        const response = await fetch(`${BASE_URL}/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Username, Email, password }),
        });
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export async function updateUser(id, Username, Email, password) {
    try {
        const response = await fetch(`${BASE_URL}/updateUser/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Username, Email, password }),
        });
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}


export async function deleteUserById(id) {
    try {
 
        const response = await fetch(`${BASE_URL}/deleteuser/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}


export async function getUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getUserById(id) {
    try {
        const response = await fetch(`${BASE_URL}/user/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}


export async function Login(Username, password) {
    try {
      const response = await fetch(`${BASE_URL}/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Username, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        return { success: true, data };
      } else if (response.status === 401) {
        return { success: false, message: 'Invalid username or password' };
      } else {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  }

export const post = async (endpoint, { payload }) => {
  try {
    // Ensure endpoint starts with a slash
    const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const response = await fetch(`/api${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}; 
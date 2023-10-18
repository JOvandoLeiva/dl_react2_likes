import axios from 'axios';

const API_KEY = 'HpD700vzH2VB8uOdOE9jikLRjdVhZhiix5k8CW4huKZItnmLrMz3AAnY';
const API_URL = 'https://api.pexels.com/v1';

const getPhotosFromJapan = async () => {
  try {
    const response = await axios.get(`${API_URL}/search`, {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        query: 'Japan',
        per_page: 30,
      },
    });

    const photos = response.data.photos;
    return photos;
  } catch (error) {
    console.error('Error al obtener fotos desde Pexels:', error);
    return [];
  }
};

export { getPhotosFromJapan };



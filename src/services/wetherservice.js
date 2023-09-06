import axios from 'axios';

const API_KEY = '****';

const WeatherService = {
  getWeatherByCityCode: async (cityCode) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/group?id=${cityCode}&units=metric&appid=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  },
};

export default WeatherService;

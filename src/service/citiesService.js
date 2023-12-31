import axios from 'axios'

const cities = axios.create({
    baseURL: 'http://localhost:4000',
  });

export const getAllCities = async () => {
    try {
        const { data } = await cities("/api/cities")
        return data.cities
    } catch (error) {
        return []
    }
}

export const getCity = async (id) => {
    try {
        const { data } = await cities('/api/cities/city/' + id)
        return data
    } catch (error) {
        return[]
    }
}
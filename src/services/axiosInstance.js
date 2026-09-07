import axios from 'axios'

// Api for property snapshot fetch

const propertyApi = axios.create({
    baseURL: "http://localhost:3000/properties",
    timeout: 15000,
    headers: {
    'Content-Type': 'application/json',
  }
})

export default propertyApi;
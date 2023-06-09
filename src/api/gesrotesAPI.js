import axios from 'axios'

const gesrotesApi = axios.create(
  {
    baseURL: 'http://localhost:3000'
  }
)

export const getAsignaturas = async () => {
  const res = await gesrotesApi.get('/asignaturas')
  console.log(res.data)
  return res.data;
}
const apiServer = 'http://localhost:3000'

export const getCars = () => apiFetch('cars')
export const getCar = (id: number) => apiFetch(`cars/${is}`)

export const getAvailabilities = () => apiFetch('availability')
export const getCarAvailability = (id: number) => apiFetch(`availability?id=${id}`)

const apiFetch = async (url: string) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  try {
    const response = await fetch(`${apiServer}/${url}`, { headers })
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

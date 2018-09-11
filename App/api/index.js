const apiServer = 'http://localhost:3000'

export const getCars = (page=1) => apiFetch('cars', page)

export const getAvailabilities = (page=1) => apiFetch('availability', page)

const apiFetch = async (link, page=1) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const limit = 20
  const url = `${apiServer}/${link}?_page=${page}&_limit=${limit}`

  try {
    const response = await fetch(url, { headers })
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

const base_url = "http://localhost:8080/api/v1/public/youtube"

export const fetchDatafromApi = async (query) => {
   try {
    const res = await fetch(`${base_url}${query}`)
    const data = await res.json()
    return data
   } catch (error) {
        return error
   }
   
}


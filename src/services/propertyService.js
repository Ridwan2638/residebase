import propertyApi from "./axiosInstance";

// This api will get properties based on the parameters provided or empty object by default

export const getProperty = async (filters = {}) =>{
    try{
        const response = await propertyApi.get("/properties", {params : filters});
        return response.data
    } catch(error){
        console.error("Error fetching properties", eror)
    };
    throw error
    

}


//https://api.nasa.gov/planetary/apod?api_key=rRxPyohPD3XnYawgbZQWtS2cGi9d4wImpy064dpj

import axios from "axios"

export const getPhotos = async() => {
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=rRxPyohPD3XnYawgbZQWtS2cGi9d4wImpy064dpj`)
    .then(res=>{
        return res.data;
    })
    return res;
}


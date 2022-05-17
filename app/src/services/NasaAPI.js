//https://api.nasa.gov/planetary/apod?api_key=rRxPyohPD3XnYawgbZQWtS2cGi9d4wImpy064dpj

import axios from "axios"

const apiKey=process.env.REACT_APP_API_KEY_NASA;

export const getPhotos = async() => {
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(res=>{
        return res.data;
    })
    return res;
}

export const getPhotosByRover = async(type) => {
    const res = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${type}/photos?sol=1000&page=1&api_key=${apiKey}`)
    .then(res=>{
        return res.data;
    })
    return res;
}

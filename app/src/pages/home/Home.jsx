import React from 'react'
import { toast } from 'react-toastify'
import { getPhotos } from '../../services/NasaAPI'

const Home = () => {
    const [data, setData] = React.useState()
    console.log("Info",data)
    React.useEffect(() => {
        getPhotos()
        .then(res=>{
            setData(res)
        })
        .catch(err=>toast.error("No se ha podido recuperar datos"));    
    }, [])
    return (
        <div>
            Home
        </div>
    )
}

export default Home

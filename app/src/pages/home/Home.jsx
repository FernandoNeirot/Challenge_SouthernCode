import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React from 'react'
import { toast } from 'react-toastify'
import CardToPhoto from '../../components/CardToPhoto'
import { getPhotos, getPhotosByRover } from '../../services/NasaAPI'

const Home = () => {
    const [photos, setPhotos] = React.useState([])
    const [rover, setRover] = React.useState()

    const handleChangeRover = (e) => setRover(e.target.value)

    const handleClickSearch =()=>{
        getPhotosByRover(rover).then(res=>{
            setPhotos(res.photos)
        });
    }
    React.useEffect(() => {
        // getPhotos()
        //     .then(res => {
        //         setData(res)
        //     })
        //     .catch(err => toast.error("No se ha podido recuperar datos"));
    }, [])
    return (
        <Box sx={{ width: '80%', marginLeft: '10%', marginTop: '100px' }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={11}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Rover</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rover}
                            label="Select Rover"
                            onChange={handleChangeRover}
                        >
                            <MenuItem value='curiosity'>Curiosity</MenuItem>
                            <MenuItem value='opportunity'>Opportunity </MenuItem>
                            <MenuItem value='spirit'>Spirit</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" onClick={()=>handleClickSearch()}>Search</Button>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                {
                    photos.length>0  && photos.map((item,_)=>{
                        console.log(item)
                        return (
                        <Grid item key={item.id}>
                            <CardToPhoto info={item} />
                        </Grid>)
                        
                    })
                }
            </Grid>
        </Box>
    )
}

export default Home

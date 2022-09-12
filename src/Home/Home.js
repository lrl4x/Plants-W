import { CssBaseline, IconButton, Typography } from '@mui/material';
import React from 'react'
import "./Home.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Button } from '@mui/material';
export default function Home() {
    return (
        <>

            <div className='img1-h'>
                <CssBaseline />
                <small class='small-text'>Welocom to out</small>
                <h1 className='text-h'>Plants World</h1>
                <Button variant="contained" color="success">
                    take a look
                </Button>
            </div>


            <div className='Icon-Div'>
                <IconButton className='IconB' >
                    <ArrowDownwardIcon className='Icon1' />
                </IconButton>
            </div>


            <div className='backgournd-img'>
                <CssBaseline />
                <div className='header-div1'>
                    <Typography className='header1'
                        variant='h2'
                        align='left'
                        paddingLeft={5.6}
                    >
                        PLANTS SUMMER SECTIONS
                    </Typography>
                </div>


                <div className='summer-1'>
                    <Card sx={{ maxWidth: 345 }} className='card1'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE4.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Clivia
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Clivia are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>



                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE1.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cactus
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE2.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Herbs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Herbs are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea >
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE3.jpg"}
                                alt="green iguana"
                            />
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" >
                                    Shrubs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shrubs are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='summer-2'>
                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE3.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shrubs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shrubs are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE3.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shrubs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shrubs are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE3.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shrubs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shrubs are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE3.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shrubs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shrubs are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>


                </div>
                <div className='header-div2'>
                    <Typography className='header2'
                        variant='h2'
                        align='left'
                        paddingLeft={5.6}
                    >
                        PLANTS WINTER SECTIONS
                    </Typography>
                </div>
                <div className='winter-1'>
                    <Card sx={{ maxWidth: 345 }} className='card1'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE4.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Clivia
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Clivia are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE1.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cactus
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE2.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Herbs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Herbs are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE3.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shrubs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shrubs are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='winter-2'>
                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE3.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shrubs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shrubs are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE3.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shrubs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shrubs are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE3.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shrubs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shrubs are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }} className='card2' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={process.env.PUBLIC_URL + "./assets/IMAGE3.jpg"}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shrubs
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shrubs are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
           
        </>
    )
}

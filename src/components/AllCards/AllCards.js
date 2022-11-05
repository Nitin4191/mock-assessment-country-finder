import { Fragment, useState, useEffect } from 'react';

import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import CardSize from '../UI/Card/CardSize';
import classes from './AllCards.module.css';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function AllCards() {

    const [countryList, setCountryList] = useState([]);

    const getAPIdata = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
        console.log(response);
        setCountryList(response);
    }

    useEffect(() => {
        getAPIdata()
    }, [])

    return (
        <Fragment>
            <CardSize className={classes.home}>
                {countryList?.map((list) => {
                    // console.log(list);
                    return (
                        <Card sx={{ minWidth: 255, ml: 2.5, mt: 2.5 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <img src={list.flags.svg} alt='flag_image' loading='lazy' />
                                </Typography>
                                <Typography component="div" className={classes.countryName}>
                                    {list.name.common}
                                </Typography>
                                <Typography color="text.primary" className={classes.population}>
                                    <b>Population: </b>{list.population}
                                </Typography>
                                <Typography component="p" className={classes.region}>
                                    <b>Region: </b>{list.region}
                                </Typography>
                                <Typography component="p" className={classes.capital}>
                                    <b>Captial: </b>{list.capital}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">More Details</Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </CardSize>
        </Fragment>
    );
}
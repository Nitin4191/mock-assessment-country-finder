import { Fragment, useState, useEffect } from 'react';

import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import CardSize from '../UI/Card/CardSize';
import classes from './AllCards.module.css';
import Modal from '../UI/Modal/Modal'; 

export default function AllCards() {

    const [countryList, setCountryList] = useState([]),
        [showModal, setShowModal] = useState(false);

    const getAPIdata = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
        console.log(response);
        setCountryList(response);
    },
        moreDetailsClick = () => {
            setShowModal(true);
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
                        // {showModal && <Modal>
                        //    </Modal>}
                        <Card sx={{ minWidth: 255, ml: 2.5, mt: 2.5 }} className={classes.enclosingCard}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <div className={classes.imgdiv}>
                                        <img src={list.flags.svg} alt='flag_image' loading='lazy' />
                                    </div>
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
                                <Button size="small" onClick={moreDetailsClick}>More Details</Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </CardSize>
        </Fragment>
    );
}
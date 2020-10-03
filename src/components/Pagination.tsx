import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import {setPageNum} from "../store/actions";

interface PaginationProps {
    pageCount: number
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function PaginationRounded(props: PaginationProps) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleChange = (event, value) => {
        dispatch(setPageNum(value));
    };

    return (
        <div className={classes.root}>
            <Pagination count={props.pageCount} variant="outlined" shape="rounded" onChange={handleChange}/>
        </div>
    );
}
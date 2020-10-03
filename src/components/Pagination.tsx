import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Typography from "@material-ui/core/Typography";

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
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className={classes.root}>
            <Typography>Page: {page}</Typography>
            <Pagination count={props.pageCount} variant="outlined" shape="rounded" onChange={handleChange}/>
        </div>
    );
}
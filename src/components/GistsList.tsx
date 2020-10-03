import React from 'react';

import {PublicGists} from "../core/models/PublicGists";
import GistItem from "./GistItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    gitsWrapper: {
        height: '100%',
        overflowY: 'auto',
        paddingRight: 20,
        position: 'relative'
    }
}))

interface Props {
    gistsList: PublicGists[]
}

export default function GistsList(props: Props) {
    const classes = useStyles()

    return (<div className={classes.gitsWrapper}>
        {
            props.gistsList.map((gist, index) => {
                return <GistItem key={index} gist={gist}/>;
            })
        }
    </div>)
}
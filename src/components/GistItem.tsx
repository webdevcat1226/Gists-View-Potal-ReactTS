import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import {PublicGists} from "../core/models/PublicGists";

interface Props {
    gist: PublicGists
}

const useStyles = makeStyles(() => ({
    gistWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '15px 0',
        width: '100%',
        borderBottom: '1px solid lightgray'
    },
    gistAvatar: {
        width: 50,
        marginRight: 10
    },
    gistFileName: {
        fontFamily: 'Roboto, sans-self'
    }
}))

export default function GistItem(props: Props) {
    const classes = useStyles();
    return (<div className={classes.gistWrapper}>
        <img className={classes.gistAvatar} src={props.gist.avatar_url} alt="avatar image"/>
        <div className={classes.gistFileName}>{props.gist.fileName}</div>
    </div>)
}
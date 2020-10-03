import React from 'react';

import {PublicGists} from "../core/models/PublicGists";
import GistItem from "./GistItem";

interface Props {
    gistsList: PublicGists[]
}

export default function GistsList(props: Props) {
    return (<div>
        {
            props.gistsList.map((gist, index) => {
                return <GistItem key={index} gist={gist}/>;
            })
        }
    </div>)
}
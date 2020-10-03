import React, {useEffect, useState} from "react";
import PaginationRounded from "../components/Pagination";
import {PublicGists} from "../core/models/PublicGists";
import {Public_gistsService} from "../core/services/public_gists.service";
import GistsList from "../components/GistsList";

export default function Home() {
    const [gists, setGists] = useState<PublicGists[]>([]);

    useEffect(() => {
        Public_gistsService.instance.getPublicGistsData('2019-12-25', 30, 2)
            .then(data => {
                setGists(data)
            })
            .finally(() => {

            })
    })

    return (<div>
        <GistsList gistsList={gists} />
        <PaginationRounded pageCount={20}/>
    </div>)
}
import React, {useEffect, useState} from "react";
import PaginationRounded from "../components/Pagination";
import {PublicGists} from "../core/models/PublicGists";
import {Public_gistsService} from "../core/services/public_gists.service";
import GistsList from "../components/GistsList";
import {useSelector} from "react-redux";
import {selectPageNum} from "../store/selectors";
import {makeStyles} from "@material-ui/core/styles";
import LinearIndeterminate from "../assets/ui-kit/LinearIndeterminate";

const useStyles = makeStyles(() => ({
    pageContainer: {
        height: '100vh',
    },
    gistsContainer: {
        height: 'calc(100% - 100px)',
        paddingLeft: 20,
        position: 'relative'
    },
    paginationPan: {
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 30
    }
}))

export default function Home() {
    const [gists, setGists] = useState<PublicGists[]>([]);
    const pageNum = useSelector(selectPageNum)
    const classes = useStyles()
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        Public_gistsService.instance.getPublicGistsData('2019-12-25', 30, pageNum)
            .then(data => {
                setGists(data)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [pageNum])

    return (
        <div className={classes.pageContainer}>
            <div className={classes.gistsContainer}>
                {
                    isLoading && <LinearIndeterminate />
                }
                <GistsList gistsList={gists}/>
            </div>
            <div className={classes.paginationPan}>
                <PaginationRounded pageCount={37}/>
            </div>
        </div>)
}
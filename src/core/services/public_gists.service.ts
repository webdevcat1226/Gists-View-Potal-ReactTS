import axios from 'axios';
import {PublicGists} from "../models/PublicGists";
import {environment} from "../../environments/environment";

export class Public_gistsService {
    private static _instance: Public_gistsService;

    static get instance(): Public_gistsService {
        if (!Public_gistsService._instance) {
            Public_gistsService._instance = new Public_gistsService();
        }
        return Public_gistsService._instance;
    }

    getPublicGistsData(since: string, per_page: number, page: number): Promise<PublicGists[]> {
        return new Promise(resolve => {
            return axios.get(`${environment.apiUrl}/gists/public`, {
                params: {
                    since,
                    per_page,
                    page,
                }
            }).then(response => resolve(response.data.map(element => {
                    const fileName = Object.keys(element.files)[0]
                    return {
                        avatar_url: element.owner.avatar_url,
                        fileName
                    }
                },
            )));
        })
    }
}

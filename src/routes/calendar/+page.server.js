
import PocketBase from 'pocketbase';
import {SECRET_EMAIL, SECRET_PASSWORD} from '$env/static/private';

export async function load() {
    const url = 'https://richmondvball.pockethost.io/'
    const client = new PocketBase(url);
    const authData = await client.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
        
    const data = await client.collection('sessions').getFullList({
        sort: '-created',
    });
    const result = data.map((singleData) =>{return {date: singleData.session.date, time: singleData.session.time, cost: singleData.session.cost}})

    client.authStore.clear();
    return {
        data: result    
    }
}



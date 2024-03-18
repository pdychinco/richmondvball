import PocketBase from 'pocketbase';
import {SECRET_EMAIL, SECRET_PASSWORD} from '$env/static/private';

export async function load() {
    const url = 'https://richmondvball.pockethost.io/'
    const client = new PocketBase(url);
    const authData = await client.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    // figure out how to filter based on upcoming events
    const data = await client.collection('sessions_fake').getFullList({
        sort: 'created',
        // filter: 'startDate >= ${currentDate}',
    });
    const result = data.map((singleData) =>{return {startDate: singleData.startDate, endDate: singleData.endDate, cost: singleData.price}})

    client.authStore.clear();
    return {
        data: result    
    }
}



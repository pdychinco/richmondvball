import PocketBase from 'pocketbase';
import {SECRET_EMAIL, SECRET_PASSWORD} from '$env/static/private';

export async function load() {
    const url = 'https://richmondvball.pockethost.io/'
    const client = new PocketBase(url);
    const authData = await client.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
    const date = new Date();
    let month = date.getMonth() + 1;
    let currentDate = "";
    if(month < 10) {
        currentDate = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`
    } else {
        currentDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    }
       
    // figure out how to filter based on upcoming events
    const data = await client.collection('sessions_fake').getFullList({
        sort: 'created',
        filter: `startDate >= "${currentDate} 00:00:00.000Z"`
    });
    console.log(data);
    const result = data.map((singleData) =>{return {startDate: singleData.startDate, endDate: singleData.endDate, cost: singleData.price, attendee: singleData.attendees}})
    client.authStore.clear();
    // console.log(result);
    return {
        data: result    
    }
}



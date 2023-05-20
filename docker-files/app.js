const cron = require('node-cron');
//const { syncDB } = require('./tasks/sync-db');

console.log('Inicio de la app');

//cron.schedule('1-59/5 * * * * *', syncDB );

let times = 0;
cron.schedule('1-59/5 * * * * *', () => {
    times++;
    console.log('Tick cada 5 segundos: ', times);
})
const mysql = require('mysql')

let connection = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'freedomrp',
});

connection.connect(function(err) {
    if(err){
        console.log('Не удалось подключиться к базе данных. Ошибка: ' + err.stack);
        return;
    }
    console.log('Подключено к базе данных!');
});

mp.events.add('serverShutdown', async () =>{
    connection.end();});
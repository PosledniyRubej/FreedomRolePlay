//let sp = require('/spawn_points.json').SpawnPoints;

mp.events.add('playerJoin', (player) =>
{
    player.outputChatBox('Добро пожаловать на тестовый сервер FREEDOM:RP')
});

//mp.events.add('playerDeath', (player) => {
//    player.spawn(sp[Hath.floor(Hath.random() * sp.length)]);
//    player.health = 40;
//})
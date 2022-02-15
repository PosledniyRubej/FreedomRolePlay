mp.events.addCommand("veh", (player, args) => {
    var pos = player.position; // записываем в переменную координаты игрока
    pos.x += 5.0; // к координатам X прибавляем 5, дабы транспорт в нас не был
    player.veh = mp.vehicles.new(args, pos); // создание самого транспорта
    player.veh.dimension = player.dimension; // даем транспорту такое же "измерение" как у нас
});
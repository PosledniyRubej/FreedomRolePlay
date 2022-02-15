// Подключение базы данных
require('./modules/mysql.js');
require('./modules/RealTimeWeather.js');
require('./modules/local-chat/index.js');
require('./modules/indicators/index.js');

// Events (Для работы с player
require('./events/events.js');

// Команды сервера
require('./comm/commands.js');
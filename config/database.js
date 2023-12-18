const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error(err));


mongoose.connection.on('error', (err) => {
    console.error('Erro na conexão com o MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Conexão com o MongoDB perdida. Tentando reconectar...');
    mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true });
});
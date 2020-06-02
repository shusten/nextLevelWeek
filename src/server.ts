import expresse from 'express';

const app = expresse();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.send([ 
        'Diego',
        'Robson',
        'Elias',
        'Matheus',
        'Eliana'
    ])
});

app.listen(3333);
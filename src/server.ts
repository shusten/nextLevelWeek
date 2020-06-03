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

app.post('/users', (request, response) => {
 const user = {
    name: 'shusten',
    email: 'diego@rocketseat.com.br'
 }
});

app.listen(3333);
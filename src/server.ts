import expresse, { request, response } from 'express';

const app = expresse();

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nava informação no back-end
// PUT: Atualizar uma informação existente no back-and
// DELETE: Remover uma informação do back-end

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação...

const  users = [ 
    'Diego',
    'Robson',
    'Elias',
    'Matheus',
    'Eliana'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.send(filteredUsers  )
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});


app.post('/users', (request, response) => {
 const user = {
    name: 'shusten',
    email: 'diego@rocketseat.com.br'
};
    return response.json(user);
});

app.listen(3333);
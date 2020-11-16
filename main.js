// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
    return item + 10;
});

//Arrow Function
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(() => item + 10)



// 3.2
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
    return usuario.idade;
}
mostraIdade(usuario);


//Arrow Function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade

mostraIdade(usuario);

// 3.3
const nome = "Diego"; const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);


//Arrow Function
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = function () {
    return new Promise(function (resolve, reject) {
        return resolve();
    })
}

//Arrow Function

const promise = () => new Promise(resolve,reject => resolve())

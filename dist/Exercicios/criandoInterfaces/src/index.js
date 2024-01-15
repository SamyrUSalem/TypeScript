const users = [];
async function fetchUser(name) {
    const response = await fetch(`https://api.github.com/users/${name}`); //Estou utilizando o await pq o resultado do fetch seria uma promise, e o await ira devolver o resultado dessa Promise
    const user = await response.json();
    if (user.message) {
        console.log("Infelizmente não foi possível encontrar esse usuário");
    }
    else {
        users.push(user);
        console.log(`Encontrei!` +
            `\nUser: ${user.login}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios Públicos: ${user.public_repos}`);
    }
}
async function showUserRepos(username) {
    const user = users.find((u) => u.login === username); //Estou procurando o seguinte usuário dentro do array
    if (typeof user === "undefined") {
        console.log("Infelizmente, não encontrei esse usuário.");
    }
    else {
        const response = await fetch(user.repos_url);
        const repos = await response.json();
        let message = `id: ${user.id}\n` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`;
        repos.forEach(repo => {
            message += `\nNome: ${repo.name}` +
                `\nDescrição: ${repo.description}` +
                `\nEstrelas: ${repo.starsReposCount}` +
                `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`;
        });
        console.log(message);
    }
}
function showAllUsers() {
    let message = "Usuários:\n";
    users.forEach(user => {
        message += `\n- ${user.login}`;
    });
    console.log(message);
}
function showReposTotal() {
    const reposTotal = users.reduce((accum, user) => accum + user.public_repos, 0);
    console.log(`Possui ${reposTotal} repositórios públicos!`);
}
function showTopFive() {
    const theFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5); //Usei o primeiro slice para realizar uma copia do array, depois usei o sorte para odernar de acordo com a quantidade de repos, e utilizei o slice novamente para coletar os 5 primeiros
    let message = "Tops 5 com mais repos:\n";
    theFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`;
    });
    console.log(message);
}

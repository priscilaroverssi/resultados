let Objeto = { 
    Usuario: 'Teste', 
    Fazenda: 'Teste', 
    Bloco: 1, 
    Talhao: 25, 
    Area: 100.45, 
    Avaliacao1: { 
        TocosAvaliados: [63, 42, 15, 78, 91, 34, 26, 55, 10, 97, 61, 88, 7, 20, 50, 84, 19, 72, 3, 67],  
        TocosDoentes: [19, 31, 11, 42, 35, 9, 4, 36, 1, 46, 36, 40, 2, 5, 18, 35, 10, 47, 2, 45],  
        TocosSadios: [44, 11, 4, 36, 55, 25, 22, 19, 9, 51, 25, 47, 5, 16, 32, 49, 9, 26, 1, 22]  
    }, 
    Avaliacao2: { 
        TocosAvaliados: [45, 21, 11, 72, 88, 40, 30, 60, 15, 93, 51, 75, 5, 18, 42, 77, 24, 65, 2, 55],  
        TocosDoentes: [29, 16, 10, 48, 63, 22, 19, 36, 7, 56, 26, 62, 3, 7, 26, 52, 16, 44, 0, 28],  
        TocosSadios: [16, 5, 0, 24, 25, 18, 11, 23, 8, 37, 25, 13, 3, 11, 16, 25, 8, 22, 2, 27]  
    }, 
    Avaliacao3: { 
        TocosAvaliados: [50, 35, 18, 80, 92, 38, 29, 65, 20, 100, 55, 82, 10, 25, 55, 90, 30, 70, 8, 62],  
        TocosDoentes: [25, 11, 5, 33, 50, 16, 10, 36, 9, 67, 31, 61, 5, 12, 30, 53, 9, 44, 2, 31],  
        TocosSadios: [26, 24, 13, 47, 42, 22, 19, 29, 10, 33, 24, 21, 6, 13, 25, 37, 21, 26, 6, 30]  
    } 
};

function verificarCampos(obj) {
    const campos = ['Usuario', 'Fazenda', 'Bloco', 'Talhao', 'Area'];
    
    for (const campo of campos) {
        const valor = obj[campo];
        const preenchido = typeof valor !== 'undefined' && valor !== null;
        const tipo = typeof valor;
    
        console.log(`${campo}:`);
        console.log(`  Preenchido: ${preenchido}`);
        console.log(`  Tipo do campo: "${tipo}"`);
    }
}

verificarCampos(Objeto);

function verificarTamanhoArrays(obj) {
    for (let i = 1; i <= 3; i++) {
        let avaliacao = obj[`Avaliacao${i}`];
        console.log(`Avaliacao${i}:`);
        console.log(`  TocosAvaliados: ${avaliacao.TocosAvaliados.length} posições`);
        console.log(`  TocosDoentes: ${avaliacao.TocosDoentes.length} posições`);
        console.log(`  TocosSadios: ${avaliacao.TocosSadios.length} posições`);
    }
}

verificarTamanhoArrays(Objeto);

function somarArrays(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function calcularSomas(obj) {
    for (let i = 1; i <= 3; i++) {
        let avaliacao = obj[`Avaliacao${i}`];
        let somaTocosAvaliados = somarArrays(avaliacao.TocosAvaliados);
        let somaTocosDoentes = somarArrays(avaliacao.TocosDoentes);
        let somaTocosSadios = somarArrays(avaliacao.TocosSadios);
        
        console.log(`Avaliacao ${i}:`);
        console.log(`  TocosAvaliados: ${somaTocosAvaliados}`);
        console.log(`  TocosDoentes: ${somaTocosDoentes}`);
        console.log(`  TocosSadios: ${somaTocosSadios}`);
    }
}

calcularSomas(Objeto);

function calcularPorcentagens(obj) {
    let resultado = {};
    
    for (let i = 1; i <= 3; i++) {
        let avaliacao = obj[`Avaliacao${i}`];
        let somaTocosAvaliados = somarArrays(avaliacao.TocosAvaliados);
        let somaTocosDoentes = somarArrays(avaliacao.TocosDoentes);
        let somaTocosSadios = somarArrays(avaliacao.TocosSadios);
        
        let porcentagemDoentes = (somaTocosDoentes / somaTocosAvaliados) * 100;
        let porcentagemSadios = (somaTocosSadios / somaTocosAvaliados) * 100;
        
        resultado[`Avaliacao${i}`] = {
            PorcentagemDoentes: porcentagemDoentes.toFixed(2) + "%",
            PorcentagemSadios: porcentagemSadios.toFixed(2) + "%"
        };
    }
    
    return resultado;
}

let porcentagens = calcularPorcentagens(Objeto);
console.log(porcentagens);

function verificarPosicoes(obj) {
    let resultado = {};
    
    for (let i = 1; i <= 3; i++) {
        let avaliacao = obj[`Avaliacao${i}`];
        resultado[`Avaliacao${i}`] = {
            maior: [],
            menor: []
        };
        
        for (let j = 0; j < avaliacao.TocosAvaliados.length; j++) {
            let tocosAvaliados = avaliacao.TocosAvaliados[j];
            let somaDoentesSadios = avaliacao.TocosDoentes[j] + avaliacao.TocosSadios[j];
            
            if (somaDoentesSadios > tocosAvaliados) {
                resultado[`Avaliacao${i}`].maior.push(j);
            } else if (somaDoentesSadios < tocosAvaliados) {
                resultado[`Avaliacao${i}`].menor.push(j);
            }
        }
    }
    
    return resultado;
}

let posicoes = verificarPosicoes(Objeto);
console.log(posicoes);

function calcularPorcentagensEspecificas(obj) {
    let resultado = {};

    for (let i = 1; i <= 3; i++) {
        let avaliacao = obj[`Avaliacao${i}`];
        resultado[`Avaliacao${i}`] = [];

        for (let j = 0; j < avaliacao.TocosAvaliados.length; j++) {
            let tocosAvaliados = avaliacao.TocosAvaliados[j];
            let tocosDoentes = avaliacao.TocosDoentes[j];
            let tocosSadios = avaliacao.TocosSadios[j];
            let somaDoentesSadios = tocosDoentes + tocosSadios;

            if (tocosAvaliados === somaDoentesSadios) {
                let porcentagemSadios = (tocosSadios / tocosAvaliados) * 100;
                let porcentagemDoentes = (tocosDoentes / tocosAvaliados) * 100;

                resultado[`Avaliacao${i}`].push({
                    posicao: j,
                    porcentagemSadios: porcentagemSadios.toFixed(2) + '%',
                    porcentagemDoentes: porcentagemDoentes.toFixed(2) + '%'
                });
            }
        }
    }

    return resultado;
}

let porcentagensEspecificas = calcularPorcentagensEspecificas(Objeto);
console.log(porcentagensEspecificas);

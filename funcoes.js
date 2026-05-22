function MAIOR_MENOR(a, b, c, d, e) {
    let valores = [a, b, c, d, e];
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);
    return `Maior: ${maior}, Menor: ${menor}`;
}

function VOGAL(c) {
    const vogais = "aeiouAEIOU";
    return vogais.includes(c) ? 1 : 0;
}

function LIMITES(li, ls) {
    let pares = [];
    let soma = 0;
    
    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            pares.push(i);
            soma += i;
        }
    }
    return { lista: pares.join(", "), total: soma };
}

function ORDEM(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

function POSITIVO_NEGATIVO(x) {
    return x >= 0;
}

function PAR_IMPAR(x) {
    return x % 2 === 0;
}

function executarMaiorMenor() {
    const vals = document.getElementById('input1').value.split(',').map(Number);
    if(vals.length === 5) {
        document.getElementById('res1').innerText = MAIOR_MENOR(...vals);
    } else {
        alert("Digite exatamente 5 números");
    }
}

function executarVogal() {
    const char = document.getElementById('input2').value;
    const result = VOGAL(char);
    document.getElementById('res2').innerText = result === 1 ? "1 (É vogal)" : "0 (Não é vogal)";
}

function executarLimites() {
    const li = parseInt(document.getElementById('input3_li').value);
    const ls = parseInt(document.getElementById('input3_ls').value);
    const res = LIMITES(li, ls);
    document.getElementById('res3').innerText = `Pares: ${res.lista} | Soma: ${res.total}`;
}

function executarOrdem() {
    const vals = document.getElementById('input4').value.split(',').map(Number);
    const ordenados = ORDEM(...vals);
    document.getElementById('res4').innerText = `Ordenado: ${ordenados.join(', ')}`;
}

function executarBooleano() {
    const n = parseInt(document.getElementById('input56').value);
    const pos = POSITIVO_NEGATIVO(n);
    const par = PAR_IMPAR(n);
    document.getElementById('res56').innerText = `Positivo: ${pos} | Par: ${par}`;
}
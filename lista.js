const lista = ["Um", "Dois", "Três"];

export function getLista() {
    return structuredClone(lista);
}

export function adicionaNaLista(item) {
    lista.push(item);
}

export function removeDaLista(posicao) {
    if (posicao >= 0 && posicao < lista.length) {
        lista.splice(posicao, 1);
    }
}

export function limpaLista() {
    lista.splice(0, lista.length);
}
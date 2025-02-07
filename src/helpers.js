export function getDiffCurrentYears(year) {
    const curentYear = new Date().getFullYear();
    return curentYear - year
}

export function calcularIncrementoMarca(marca) {
    let incremento;

    switch (marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

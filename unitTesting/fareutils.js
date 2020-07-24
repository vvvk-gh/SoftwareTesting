rate  = {
    fixed : 50,
    freeKm:5,
    freeMin:15,
    perMin:2,
    perKm :10
}

function calcfare(km , min){
    let fare = rate.fixed
    fare += (km > rate.freeKm) ? ((km - rate.freeKm)*rate.perKm) : 0
    fare +=  (min > rate.freeMin) ? ((min - rate.freeMin)*rate.freeMin) : 0
    return fare
}


exports = module.exports = {
    rate , calcfare
}
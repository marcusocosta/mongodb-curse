// O operador $lt é utilizado para filtrar registros maiores ou iguais que >

var where = {"age": { $gte: value }};

db.peoples.find(where);



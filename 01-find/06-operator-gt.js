// O operador $lt é utilizado para filtrar registros maiores que >

var where = {"age": { $gt: value }};

db.peoples.find(where);



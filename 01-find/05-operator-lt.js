// O operador $lt é utilizado para filtrar registros menores que <

var where = {"age": { $lt: value }};

db.peoples.find(where);



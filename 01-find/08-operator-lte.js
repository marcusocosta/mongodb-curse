// O operador $lte é utilizado para filtrar registros menores ou iguais que <

var where = {"age": { $lte: value }};

db.peoples.find(where);



// O $lt é utilizado para filtrar registros menor que <

var where = {"age": { $lt: value }};

db.peoples.find(where);



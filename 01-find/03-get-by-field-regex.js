//Busca os registros da coleção people utilizando uma expressão regular

var where = {name : {$regex :/marcus/i}};

db.peoples.find(where);

//http://docs.mongodb.org/manual/reference/operator/query/regex/
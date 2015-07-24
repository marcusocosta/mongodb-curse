//Retorna objetos se o valor foi encontrado.

var where = {phones :{$in : ['(31)3333-3444', '(32)44558595']}};

db.people.find(where);
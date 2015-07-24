//Retorna objetos caso a cláusula OU for verdadeira.

var where = {"name" : "Marcus" , $or : [{age:20 }, {age:29}]}

db.people.find(where)


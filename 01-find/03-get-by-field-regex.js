//Example get by field regex documents in mongodb

var where = {name : {$regex :/marcus/i}};

db.peoples.find(where);

//http://docs.mongodb.org/manual/reference/operator/query/regex/
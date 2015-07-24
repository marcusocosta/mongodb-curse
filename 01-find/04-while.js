//Percorrendo registros utilizando cursor e while

var cursor = db.peoples.find();
while( cursor.hasNext() ) { print(tojson(cursor.next()))};

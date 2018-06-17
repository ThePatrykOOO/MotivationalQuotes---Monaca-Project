var db = window.openDatabase('Quotes', '1.0', 'Test DB', 1000000);

//INIT
db.transaction(function (tx) {
    //quotes
    tx.executeSql('CREATE TABLE IF NOT EXISTS quotes (id UNIQUE, quote text, author text');
    tx.executeSql('INSERT INTO quotes VALUES (1,"Cytat 1", "Autor 1"');
    tx.executeSql('INSERT INTO quotes VALUES (2,"Cytat 2", "Autor 2"');
    tx.executeSql('INSERT INTO quotes VALUES (3,"Cytat 3", "Autor 3"');

});

db.transaction(function (tx) {
    tx.executeSql('SELECT COUNT(id) as count FROM quotes', [], function (tx, results) {
      var count = results.rows[0].count;
      console.log(results)
      alert(count)
    }, null);
  
});

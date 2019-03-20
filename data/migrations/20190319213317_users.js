exports.up = function(knex, Promise) {
    //define our users table
    return knex.schema.createTable('users', tbl => {
     //lets create an ID on users that auto-increments (use on pretty much every table)
       tbl.increments();
       //you can use tbl. <any type that you would use in a database to set up what types of data your columns will be follow it by a comma and your limit to limit the number of characters that column can have
       tbl.string('name', 128)
           .notNullable(); //required

           //now we want to connect this table to our roles table with a foreign key:
           tbl.integer('role_id')
            .unsigned()
            //this says that the reference is a field named id and it is connected to table roles
            .references('id')
            .inTable('roles')
            //these aren't 100% necessary but they allow you to delete things that have id's and it auto-update
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
   });
 };
 
 exports.down = function(knex, Promise) {
     //undo everything we just did and removes it
 
   //this says drop the table, but if it doesn't exist don't crash
   return knex.schema.dropTableIfExists('users');
 };

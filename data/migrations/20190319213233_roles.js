
    exports.up = function(knex, Promise) {
        //define our roles table
        return knex.schema.createTable('roles', tbl => {
          //lets create an ID on roles that auto-increments (use on pretty much every table)
            tbl.increments();
            //you can use tbl. <any type that you would use in a database to set up what types of data your columns will be follow it by a comma and your limit to limit the number of characters that column can have
            tbl.string('name', 128)
                .notNullable() //required
                .unique(); //has to be unique 
        });
      };
      
      //we want a users table
      //with a primary key
      //and a name field (required, not unique)
      //knex migrate:make createUsersTable
      
      
      
      exports.down = function(knex, Promise) {
        //undo everything we just did and removes it
        //this says drop the table, but if it doesn't exist don't crash
        return knex.schema.dropTableIfExists('roles');
      };

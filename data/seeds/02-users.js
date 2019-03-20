
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'steve', role_id: 1 },
        {name: 'austin', role_id: 2 },
        {name: 'tyler', role_id: 1 }
      ]);
    });
};

//CMDS:
//knex migrate:make <name here>
//knex migrate:latest
//knex migrate:rollback
//knex seed:make 01-namehere (order of numbers matters primary keys need to be first then foreign keys)
//knex seed:run
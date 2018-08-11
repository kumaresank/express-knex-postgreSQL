
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Kumaresan', email: 'test@test.com', password: 'test' },
        { id: 2, name: 'Test1', email: 'test@test.com', password: 'test' },
        { id: 3, name: 'Test2', email: 'test@test.com', password: 'test' },
      ]);
    });
};

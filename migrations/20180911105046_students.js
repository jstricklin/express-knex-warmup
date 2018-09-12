
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', (student)=>{
        student.increments('id')
        student.string('first')
        student.string('last')
        student.string('hometown')
        student.string('prevOccupation')
        student.string('faveNum')
        student.string('pastime')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students')
};

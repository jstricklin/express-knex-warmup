
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('students').del()
        .then(function () {
            // Inserts seed entries
            return knex('students').insert([
                {
                    first: 'Jose',
                    last: 'Stricklin',
                    hometown: 'San German',
                    prevOccupation: 'Retail',
                    faveNum: 4,
                    pastime: 'shakespearean elocution'
                },
                {
                    first: 'Maddie',
                    last: 'Kreamer',
                    hometown: 'Des Moines, IA',
                    prevOccupation: 'Server/Bartender',
                    faveNum: 7,
                    pastime: 'Backpacking'
                },
                {
                    first: 'Hunt',
                    last: 'Applegate',
                    hometown: 'Charleston',
                    prevOccupation: 'Benefits Advisor',
                    faveNum: 8,
                    pastime: 'cooking'
                },
                {
                    first: 'Brice',
                    last: 'Sinkule',
                    hometown: 'Crete, NE',
                    prevOccupation: 'Sale Consultant',
                    faveNum: 12,
                    pastime: 'Basketball'
                },
                {
                    first: 'Anhuelita',
                    last: 'LaChica',
                    hometown: 'Kazakhstan',
                    prevOccupation: 'Masseuse',
                    faveNum: 2,
                    pastime: 'sleeping'
                },
                {
                    first: 'Conrad',
                    last: 'Wright',
                    hometown: 'Durango',
                    prevOccupation: 'Rural Development Consultant',
                    faveNum: 9,
                    pastime: 'Bird Watching'
                },
                {
                    first: 'Steve',
                    last: 'Lopez',
                    hometown: 'FrankFort',
                    prevOccupation: 'Bounty Hunter',
                    faveNum: 710,
                    pastime: 'running'
                },
                {
                    first:  'Jed',
                    last:  'Prentup',
                    hometown:  'Boulder',
                    prevOccupation:  'PokerDealer',
                    faveNum: 24,
                    pastime: 'delving'
                },
                {
                    first: 'Kris',
                    last: 'Kamikawa',
                    hometown: 'Mililani, HI',
                    prevOccupation: 'Legislative Aide',
                    faveNum: 11,
                    pastime: 'easy climbing'
                },
                {
                    first: 'Cory',
                    last: 'Pease',
                    hometown: 'Denver',
                    prevOccupation: 'Boss',
                    faveNum: 34,
                    pastime: 'Being Bald'
                }
            ]);
        });
};

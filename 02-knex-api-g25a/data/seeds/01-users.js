/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Para ejecutar el seed se usa el comando:
// knex seed:run
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      user_id: 1,
      name: 'Clark',
      last_name: 'Kent',
      email: 'clarkkent@dc.com',
      phone: '1234567890',
      description: 'The superhero known as Superman',
      password: 'kryptonite'
    },
    {
      user_id: 2,
      name: 'Bruce',
      last_name: 'Wayne',
      email: 'brucewayne@dc.com',
      phone: '2345678901',
      description: 'The billionaire playboy who fights crime as Batman',
      password: 'batsignal'
    },
    {
      user_id: 3,
      name: 'Diana',
      last_name: 'Prince',
      email: 'dianaprince@dc.com',
      phone: '3456789012',
      description: 'The Amazonian princess who is Wonder Woman',
      password: 'lassooftruth'
    },
    {
      user_id: 4,
      name: 'Barry',
      last_name: 'Allen',
      email: 'barryallen@dc.com',
      phone: '4567890123',
      description: 'The fastest man alive, also known as The Flash',
      password: 'speedforce'
    },
    {
      user_id: 5,
      name: 'Arthur',
      last_name: 'Curry',
      email: 'arthurcurry@dc.com',
      phone: '5678901234',
      description: 'The king of Atlantis and superhero Aquaman',
      password: 'trident'
    },
    {
      user_id: 6,
      name: 'Hal',
      last_name: 'Jordan',
      email: 'haljordan@dc.com',
      phone: '6789012345',
      description: 'A member of the Green Lantern Corps',
      password: 'powerring'
    },
    {
      user_id: 7,
      name: 'Peter',
      last_name: 'Parker',
      email: 'peterparker@marvel.com',
      phone: '7890123456',
      description: 'The friendly neighborhood Spider-Man',
      password: 'spiderweb'
    },
    {
      user_id: 8,
      name: 'Steve',
      last_name: 'Rogers',
      email: 'steverogers@marvel.com',
      phone: '8901234567',
      description: 'The patriotic super-soldier Captain America',
      password: 'shield'
    },
    {
      user_id: 9,
      name: 'Tony',
      last_name: 'Stark',
      email: 'tonystark@marvel.com',
      phone: '9012345678',
      description: 'The genius billionaire inventor who becomes Iron Man',
      password: 'arcreactor'
    },
    {
      user_id: 10,
      name: 'Natasha',
      last_name: 'Romanoff',
      email: 'natasharomanoff@marvel.com',
      phone: '0124567590',
      description: 'The highly skilled spy and Avenger Black Widow',
      password: 'redroom'
    },
    {
      user_id: 11,
      name: 'Thor',
      last_name: 'Odinson',
      email: 'thorodinson@marvel.com',
      phone: '6534467890',
      description: 'The Asgardian god of thunder and member of the Avengers',
      password: 'mjolnir'
    },
    {
      user_id: 12,
      name: 'Bruce',
      last_name: 'Banner',
      email: 'brucebanner@marvel.com',
      phone: '7345678901',
      description: 'The brilliant scientist who transforms into the Hulk',
      password: 'smash'
    },
    {
      user_id: 13,
      name: 'Scott',
      last_name: 'Lang',
      email: 'scottlang@marvel.com',
      phone: '5456789012',
      description: 'The thief turned hero who becomes Ant-Man',
      password: 'shrinking'
    },
    {
      user_id: 14,
      name: 'Wade',
      last_name: 'Wilson',
      email: 'wadewilson@marvel.com',
      phone: '4566797123',
      description: 'The mercenary with accelerated healing known as Deadpool',
      password: 'chimichangas'
    },
    {
      user_id: 15,
      name: 'Carol',
      last_name: 'Danvers',
      email: 'caroldanvers@marvel.com',
      phone: '5677901234',
      description: 'The former U.S. Air Force pilot who becomes the powerful Captain Marvel',
      password: 'binary'
    }
  ])
}

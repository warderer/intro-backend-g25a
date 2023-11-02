/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('homes').del()
  await knex('homes').insert([
    {
      house_id: 1,
      title: 'Cozy Cottage',
      description: 'A charming cottage nestled in the countryside',
      guests: 4,
      address: '123 Main Street',
      rental_price: 1500,
      fk_user: 1
    },
    {
      house_id: 2,
      title: 'Luxury Villa',
      description: 'Experience pure luxury in this stunning villa',
      guests: 8,
      address: '456 Elm Avenue',
      rental_price: 3000,
      fk_user: 4
    },
    {
      house_id: 3,
      title: 'Beachfront Bungalow',
      description: 'Relax and unwind in this beachfront bungalow',
      guests: 2,
      address: '789 Ocean Drive',
      rental_price: 2000,
      fk_user: 5
    },
    {
      house_id: 4,
      title: 'Mountain Retreat',
      description: 'Escape to the mountains in this peaceful retreat',
      guests: 6,
      address: '321 Pine Street',
      rental_price: 1800,
      fk_user: 14
    },
    {
      house_id: 5,
      title: 'City Loft',
      description: 'Stay in the heart of the city in this modern loft',
      guests: 2,
      address: '555 Main Boulevard',
      rental_price: 2500,
      fk_user: 15
    },
    {
      house_id: 6,
      title: 'Countryside Farmhouse',
      description: 'Experience country living in this rustic farmhouse',
      guests: 10,
      address: '777 Meadow Lane',
      rental_price: 3500,
      fk_user: 5
    },
    {
      house_id: 7,
      title: 'Lakefront Cabin',
      description: 'Enjoy lake views in this cozy cabin',
      guests: 4,
      address: '999 Lakeview Drive',
      rental_price: 1700,
      fk_user: 2
    },
    {
      house_id: 8,
      title: 'Historic Townhouse',
      description: 'Step back in time in this historic townhouse',
      guests: 6,
      address: '222 Heritage Street',
      rental_price: 2000
    },
    {
      house_id: 9,
      title: 'Secluded Cottage',
      description: 'Get away from it all in this secluded cottage',
      guests: 2,
      address: '444 Quiet Road',
      rental_price: 1600,
      fk_user: 9
    },
    {
      house_id: 10,
      title: 'Modern Apartment',
      description: 'Experience urban living in this sleek apartment',
      guests: 4,
      address: '888 Downtown Avenue',
      rental_price: 2200,
      fk_user: 10
    },
    {
      house_id: 11,
      title: 'Beach House',
      description: 'Enjoy sun, sand, and surf in this beach house',
      guests: 8,
      address: '111 Shoreline Drive',
      rental_price: 2800,
      fk_user: 11
    },
    {
      house_id: 12,
      title: 'Mountain Chalet',
      description: 'Stay in a cozy chalet surrounded by nature',
      guests: 6,
      address: '555 Pine Avenue',
      rental_price: 1900,
      fk_user: 12
    },
    {
      house_id: 13,
      title: 'City Penthouse',
      description: 'Live the high life in this luxurious penthouse',
      guests: 2,
      address: '777 Skyscraper Road',
      rental_price: 3000,
      fk_user: 13
    },
    {
      house_id: 14,
      title: 'Rustic Log Cabin',
      description: 'Experience rustic charm in this log cabin',
      guests: 4,
      address: '999 Forest Lane',
      rental_price: 1500,
      fk_user: 1
    },
    {
      house_id: 15,
      title: 'Elegant Mansion',
      description: 'Indulge in luxury in this grand mansion',
      guests: 12,
      address: '222 Grand Boulevard',
      rental_price: 5000,
      fk_user: 7
    },
    {
      house_id: 16,
      title: 'Lakeside Retreat',
      description: 'Escape to the lake in this tranquil retreat',
      guests: 6,
      address: '444 Lakeview Drive',
      rental_price: 2200,
      fk_user: 4
    },
    {
      house_id: 17,
      title: 'Historic Cottage',
      description: 'Stay in a piece of history in this charming cottage',
      guests: 4,
      address: '888 Heritage Street',
      rental_price: 1800,
      fk_user: 6
    },
    {
      house_id: 18,
      title: 'Modern Townhouse',
      description: 'Experience contemporary living in this stylish townhouse',
      guests: 6,
      address: '111 Urban Lane',
      rental_price: 2500,
      fk_user: 8
    },
    {
      house_id: 19,
      title: 'Mountain View Cabin',
      description: 'Enjoy breathtaking mountain views in this cozy cabin',
      guests: 2,
      address: '555 Vista Avenue',
      rental_price: 1600,
      fk_user: 3
    },
    {
      house_id: 20,
      title: 'Beachfront Condo',
      description: 'Wake up to stunning ocean views in this beachfront condo',
      guests: 4,
      address: '777 Beach Drive',
      rental_price: 2000,
      fk_user: 1
    },
    {
      house_id: 21,
      title: 'Charming Cottage',
      description: 'Experience charm and comfort in this lovely cottage',
      guests: 2,
      address: '999 Cozy Road',
      rental_price: 1400,
      fk_user: 1
    },
    {
      house_id: 22,
      title: 'Luxury Apartment',
      description: 'Indulge in luxury in this high-end apartment',
      guests: 4,
      address: '222 Luxury Avenue',
      rental_price: 2800,
      fk_user: 4
    },
    {
      house_id: 23,
      title: 'Riverside Retreat',
      description: 'Escape to the river in this peaceful retreat',
      guests: 6,
      address: '444 Riverfront Lane',
      rental_price: 2100,
      fk_user: 7
    },
    {
      house_id: 24,
      title: 'Historic Farmhouse',
      description: 'Step back in time in this historic farmhouse',
      guests: 8,
      address: '888 Farm Road',
      rental_price: 3200,
      fk_user: 9
    },
    {
      house_id: 25,
      title: 'City View Loft',
      description: 'Enjoy panoramic city views in this modern loft',
      guests: 2,
      address: '111 Skyline Boulevard',
      rental_price: 2400,
      fk_user: 11
    },
    {
      house_id: 26,
      title: 'Secluded Cabin',
      description: 'Get away from it all in this secluded cabin',
      guests: 4,
      address: '555 Wilderness Drive',
      rental_price: 1700,
      fk_user: 14
    },
    {
      house_id: 27,
      title: 'Mountain Lodge',
      description: 'Stay in a cozy lodge surrounded by nature',
      guests: 10,
      address: '777 Mountain Lane',
      rental_price: 3800,
      fk_user: 14
    },
    {
      house_id: 28,
      title: 'Lake House',
      description: 'Experience lakeside living in this charming house',
      guests: 6,
      address: '999 Lakeview Drive',
      rental_price: 2000,
      fk_user: 15
    },
    {
      house_id: 29,
      title: 'Historic Townhome',
      description: 'Step back in time in this historic townhome',
      guests: 6,
      address: '222 Heritage Street',
      rental_price: 2200,
      fk_user: 12
    },
    {
      house_id: 30,
      title: 'Seaside Cottage',
      description: 'Enjoy the seaside in this cozy cottage',
      guests: 2,
      address: '444 Oceanfront Road',
      rental_price: 1800,
      fk_user: 6
    }
  ])
}

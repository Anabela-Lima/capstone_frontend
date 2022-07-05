export const mockTripData = [
    {
      id: 1,
      name: "Girls' Trip",
      country: "Morocco",
      date: "2022-06-30",
      // imgUrl: "https://www.mickeyshannon.com/photos/moraine-lake-sunrise-brilliance.jpg",
      imgUrl: "https://wallpaperaccess.com/full/344316.jpg",
      attendees: [2,3,4,5,6,17,18,19,20],
      activities: [
        {
          id: 1,
          day: 1,
          name: "Mouton Noir Brunch",
          price: 235.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0f/14/c0/ed/roesti.jpg",
          attendees: [2,3,4,5,18,19,20],
        },
        {
          id: 2,
          day: 1,
          name: "3 Days Desert Tou",
          price: 400.00,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/ec/e0/09.jpg",
          attendees: [2,3,4,5,6,17,18]
        },
        {  
          id: 3,
          day: 1,
          name: "Alas Mountains Hot Air Balloon",
          price: 648.00,
          category: "Physical",
          imgUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/71/ea/a0.jpg",
          attendees: [2,3,4,5,6,17,18,19,20],
        },
        { 
          id: 4,
          day: 1,
          name: "Agadir Day Trip To Legzira ",
          price: 350.00,
          category: "Physical",
          imgUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/d2/54.jpg",
          attendees: [2,3,4,5,6,17,18,19],
        },
        {
          id: 5,
          day: 2,
          name: "Marrakech: Private Guided Half-Day City Tours",
          price: 585.00,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/e8/d3/84.jpg",
          attendees: [2,3,4,5,6,17,18,19,20]
        },
        {
          id: 6,
          day: 2,
          name: "Libzar",
          price: 200.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/07/0a/87/c9/libzar.jpg",
          attendees: [2,3,4,5,6]
        },
        {
          id: 7,
          day: 2,
          name: "Desert Agafay and Atlas Mountains & Camel ride Day",
          price: 900.00,
          category: "Entertainment",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/71/23/18.jpg",
          attendees: [1,2,3,4,5,6,7,9,10]
        }
      ]
    },
    {
      id: 4,
      name: "Lads' Trip",
      country: "Italy",
      date: "2022-07-30",
      imgUrl: "https://www.mickeyshannon.com/photos/maroon-bells-magic.jpg",
      attendees: [0,1,7,8,9,10,11,12,13,14,15],
      activities: [
        {
          id: 8,
          day: 1,
          name: "Pisa, Siena and San Gimignano Day Trip ",
          price: 250.45,
          category: "Physical",
          imgUrl: "https://images.musement.com/default/0001/20/pisa-siena-san-gimignano-and-chianti-day-tour-in-tuscany-with-typical-lunch_header-19719.jpeg?q=50&fit=crop&auto=format&w=1024&h=400",
          attendees: [7,8,9,10,11,12,13,14,15]
        }
        ,{
          id: 9,
          day: 2,
          name: "La Forchetta d´Oro",
          price: 648.00,
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1c/2d/45/81/la-forchetta-d-oro.jpg",
          category: "Food",
          attendees: [0,1,7,8,9,10,11,12,13,14,15],

        }
        ,{
          id: 10,
          day: 2,
          name: "Ambrosia Rooftop Restaurant & Bar",
          price: 350.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/04/02/75/3f/ambrosia.jpg",
          attendees: [1,9,4,7,5,6,10,],

        }
        ,{
          id: 11,
          day: 3,
          name: "VITA NOVA",
          price: 150.50,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/16/ba/3e/e7/esterno.jpg",
          attendees: [1,2,3,4,5,6,7], 
        }
        ,{
          id: 12,
          day: 3,
          name: "Tour Tuscan Hill Towns by Bicycle ",
          price:  599.99,
          category: "Physical",
          imgUrl: "https://cdn.thecrazytourist.com/wp-content/uploads/2017/08/Valley-of-the-Temples.jpg",
          attendees: [1,2,3,4,6,9,10]
        }
        ,{
          id: 13,
          day: 3,
          name: "Tour Tuscan Hill Towns by Bicycle ",
          price: 150,
          category: "Physical",
          imgUrl: "https://www.bikeadventures.co.uk/media/2014/10/tuscany.jpg",
          attendees: [0,1,7,8,9,10,11,12,13,14,15]
        }
        ,{
          id: 14,
          day: 3,
          name: "Tour Tuscan Hill Towns by Bicycle ",
          price: 150,
          category: "Physical",
          imgUrl: "https://www.bikeadventures.co.uk/media/2014/10/tuscany.jpg",
          attendees: [0,1,7,8,9,10,11,12,13]
        }
      ]
    },
    //------------------
    {
      id: 5,
      name: "Work Trip",
      country: "Iceland",
      date: "2022-08-05",
      imgUrl: "https://www.mickeyshannon.com/photos/summit-county-sunrise.jpg",
      attendees: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
      activities: [
        {
          id: 15,
          day: 1,
          name: "Golden Circle & Glacier Snowmobiling Day Trip from Reykjavik",
          price: 1000.00,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/70/1c/17.jpg",
          attendees: [1,2,3,4,5,6,10,21,18,15,13],
        },
        {
          id: 16,
          day: 1,
          name: "Ice Cave by Katla Volcano Super Jeep Tour from Vik",
          price: 1800.00,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/c4/81/53.jpg",
          attendees: [1,2,3,4,6,8,10,12,16,19,20,21]
        },
        {
          id: 17,
          day: 2,
          name: "2hr Midnight Sun ATV Adventure from Reykjavik",
          price: 4000.00,
          category: "",
          imgUrl: "",
          attendees: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20]
        },
        {
          id: 18,
          day: 2,
          name: "Tanginn",
          price: 900.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0f/61/d1/54/tanginn.jpg",
          attendees: [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20]
        },
        {
          id: 19,
          day: 2,
          name: "Pakkhus Restaurant",
          price: 950.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1a/02/37/8c/pakkhus-restaurant.jpg",
          attendees: [1,2,3,4,5,6,10,11,12,13,14,15,16,17,19]
        }

       ,{
          id: 20,
          day: 2,
          name: "Combo: Active Volcano Guided Geldingadalur Hike and the Reykjanes Peninsula",
          price: 3000.00,
          category: "Entertainment",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/e4/38/8c.jpg",
          attendees: [1, 2,3,4,5,6,7,8,10,11,15,17,19,20]
        },
        {
          id: 21,
          day: 3,
          name: "Blue Lagoon & Reykjavík Sightseeing",
          price: 3800.00,
          category: "Entertainment",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/25/01/df.jpg",
          attendees: [1,2,3,6,10,11]
        }
        ,{
          id: 22,
          day: 3,
          name: "Private G tour by jeep",
          price: 800,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/93/7a/f2.jpg",
          attendees: [1,2,3,4,5,6,7]
        },
        {
          id: 23,
          day: 3,
          name: " Ultimate Iceland Ring Road Private Tour",
          price: 9000.00,
          category: "Travel",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/84/f1/ac.jpg",
          attendees: [1,2,3,4,5,6,7,8,9,10,14,17]
        }
      ]   
    },

    //-----------------------------
    {
      id: 6,
      name: "More Trips",
      country: "Japan",
      date: "2022-09-26",
      imgUrl: "https://www.mickeyshannon.com/photos/mount-sneffels-majesty.jpg",
      attendees: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20],
      activities: [
        {
          id: 24,
          day: 1,
          name: "Han no Daidokoro Kadochika",
          price: 730,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/12/cf/f3/47/beef-on-the-bbq.jpg",
          attendees: [1,2,3,4,5,6,10,21,18,15,13],
        },
        {
          id: 25,
          day: 1,
          name: "Tokyo Private Chauffeur Driving Sightseeing Tour - English Speaking Driver",
          price: 1200.00,
          category: "Entertainment",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/0e/b9/79.jpg",
          attendees: [1,2,3,4,6,8,10,12,16,19,20,21]
        },
        {
          id: 26,
          day: 2,
          name: "Geisha Experience at Chaya in Tokyo",
          price: 1000.00,
          category: "Entertainment",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/81/30/0e.jpg",
          attendees: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20]
        },
        {
          id: 27,
          day: 2,
          name: "Gyopao Gyoza Shinjuku",
          price: 780.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1b/e3/b4/a1/caption.jpg",
          attendees: [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        },
        {
          id: 28,
          day: 2,
          name: "Best Food",
          price: 950.00,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/photo-o/0d/53/b6/45/bistro.jpg",
          attendees: [1,2,3,4,5,6,10,11,12,13,14,15,16,17,19]
        }
       ,{
          id: 29,
          day: 2,
          name: "Cherry Blossom Private Tour",
          price: 382.10,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0d/b5/26/25.jpg",
          attendees: [1, 2,3,4,5,6,7,8,10,11,15,17,19,20]
        },
        {
          id: 30,
          day: 3,
          name: "Japanese Whisky Tasting in Tokyo",
          price: 580.90,
          category: "Food",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/0d/8d/44.jpg",
          attendees: [1,2,3,6,10,11,15,19,21]
        }

        ,{
          id: 31,
          day: 3,
          name: "Ebisu Local Food Tour: Shibuya's Most Popular Neighborhood",
          price: 830.00,
          category: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/22/bf/b6.jpg",
          attendees: [1,2,3,4,5,6,7]
        },

        {
          id: 32,
          day: 3,
          name: "Meiji Shrine Imperial Garden",
          price: 1000.00,
          category: "Travel",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/44/05/cd/photo6jpg.jpg?w=1200&h=1200&s=1",
          attendees: [1,2,3,4,5,6,7,8,9,10,14,17]
        }
      ]
    },
    {
      id: 7,
      name: "Yay Trips",
      country: "India",
      date: "2022-12-21",
      imgUrl: "https://www.mickeyshannon.com/photos/light-on-the-cliffs-of-the-napali-coast-kauai.jpg",
      attendees: [1,2,3,4],
      activities: [
        {
          id: 33,
          day: 1,
          name: "Tour of Delhi, Jaipur, Agra & Varanasi",
          price: 1000.00,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/74/9c/e0.jpg",
          attendees: [1,2,3,4,5,6,10,21,18,15,13],
        },
        {
          id: 34,
          day: 1,
          name: "Day Excursion From Gangtok To Tsomgo Lake",
          price: 1800.00,
          category: "Travel",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/ff/bb/ff.jpg",
          attendees: [1,2,3,4,6,8,10,12,16,19,20,21]
        },
        {
          id: 35,
          day: 2,
          name: "Alleppey Backwaters",
          price: 500.00,
          category: "Travel",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/59/d4/alleppey-backwater-tour.jpg?w=800&h=-1&s=1",
          attendees: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20]
        },
        {
          id: 36,
          day: 2,
          name: "Beas River",
          price: 900.00,
          category: "Other",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/46/76/ba/photo2jpg.jpg?w=1200&h=-1&s=1",
          attendees: [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20]
        },
        {
          id: 37,
          day: 2,
          name: "Pakkhus Restaurant",
          price: 950.00,
          category: "Food",
          imgUrl: "https://youimg1.tripcdn.com/target/100h0j000000ao5638F2D_C_750_350_R5.jpg",
          attendees: [1,2,3,4,5,6,10,11,12,13,14,15,16,17,19]
        }
       ,{
          id: 38,
          day: 2,
          name: "Jungle Swing & White Water Rafting Experience",
          price: 3000.00,
          category: "Entertainment",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/6f/70/d7.jpg",
          attendees: [1, 2,3,4,5,6,7,8,10,11,15,17,19,20]
        },
        {
          id: 39,
          day: 3,
          name: "Nainital Lake",
          price: 380.00,
          category: "Other",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2e/b4/5d/nainital-lake.jpg?w=1200&h=-1&s=1",
          attendees: [1,2,3,6,10,11]
        }
        ,{
          id: 40,
          day: 3,
          name: "Private G tour by jeep",
          price: 800,
          category: "Physical",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/93/7a/f2.jpg",
          attendees: [1,2,3,4,5,6,7]
        },
        {
          id: 41,
          day: 3,
          name: " Ultimate Iceland Ring Road Private Tour",
          price: 9000.00,
          category: "Travel",
          imgUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/84/f1/ac.jpg",
          attendees: [1,2,3,4,5,6,7,8,9,10,14,17]
        }
      ]   
    }
  ]
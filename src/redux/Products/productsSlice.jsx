import {createSlice} from "@reduxjs/toolkit"



export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        // api kurmak yerine "İsmail Can Aydın" adlı kişinin github reposundan verileri alıp direkt burada tanımladım
        // kaynak : https://github.com/ismailcanaydin/spend-bill-gates-money-app/blob/master/api/products.json
        products : [
            {
                "product_id": 1,
                "product_name": "Big Mac",
                "product_price": 2,
                "amount": 0,
                "img": "https://neal.fun/spend/images/big-mac.jpg"
            },
            {
                "product_id": 2,
                "product_name": "Flip Flops",
                "product_price": 3,
                "amount": 0,
                "img": "https://neal.fun/spend/images/flip-flops.jpg"
            },
            {
                "product_id": 3,
                "product_name": "Coco-Cola Pack",
                "product_price": 5,
                "amount": 0,
                "img": "https://neal.fun/spend/images/coca-cola-pack.jpg"
            },
            {
                "product_id": 4,
                "product_name": "Movie Ticket",
                "product_price": 12,
                "amount": 0,
                "img": "https://neal.fun/spend/images/movie-ticket.jpg"
            },
            {
                "product_id": 5,
                "product_name": "Book",
                "product_price": 15,
                "amount": 0,
                "img": "https://neal.fun/spend/images/book.jpg"
            },
            {
                "product_id": 6,
                "product_name": "Lobster Dinner",
                "product_price": 45,
                "amount": 0,
                "img": "https://neal.fun/spend/images/lobster-dinner.jpg"
            },
            {
                "product_id": 7,
                "product_name": "Video Game",
                "product_price": 60,
                "amount": 0,
                "img": "https://neal.fun/spend/images/video-game.jpg"
            },
            {
                "product_id": 8,
                "product_name": "Amazon Echo",
                "product_price": 99,
                "amount": 0,
                "img": "https://neal.fun/spend/images/amazon-echo.jpg"
            },
            {
                "product_id": 9,
                "product_name": "Year of Netflix",
                "product_price": 100,
                "amount": 0,
                "img": "https://neal.fun/spend/images/air-jordans.jpg"
            },
            {
                "product_id": 10,
                "product_name": "Air Jordans",
                "product_price": 125,
                "amount": 0,
                "img": "https://neal.fun/spend/images/air-jordans.jpg"
            },
            {
                "product_id": 11,
                "product_name": "Airpods",
                "product_price": 199,
                "amount": 0,
                "img": "https://neal.fun/spend/images/airpods.jpg"
            },
            {
                "product_id": 12,
                "product_name": "Gaming Console",
                "product_price": 299,
                "amount": 0,
                "img": "https://neal.fun/spend/images/gaming-console.jpg"
            },
            {
                "product_id": 13,
                "product_name": "Drone",
                "product_price": 350,
                "amount": 0,
                "img": "https://neal.fun/spend/images/drone.jpg"
            },
            {
                "product_id": 14,
                "product_name": "Smartphone",
                "product_price": 699,
                "amount": 0,
                "img": "https://neal.fun/spend/images/smartphone.jpg"
            },
            {
                "product_id": 15,
                "product_name": "Bike",
                "product_price": 800,
                "amount": 0,
                "img": "https://neal.fun/spend/images/bike.jpg"
            },
            {
                "product_id": 16,
                "product_name": "Kitten",
                "product_price": 1500,
                "amount": 0,
                "img": "https://neal.fun/spend/images/kitten.jpg"
            },
            {
                "product_id": 17,
                "product_name": "Puppy",
                "product_price": 1500,
                "amount": 0,
                "img": "https://neal.fun/spend/images/puppy.jpg"
            },
            {
                "product_id": 18,
                "product_name": "Auto Rickshaw",
                "product_price": 2300,
                "amount": 0,
                "img": "https://neal.fun/spend/images/auto-rickshaw.jpg"
            },
            {
                "product_id": 19,
                "product_name": "Horse",
                "product_price": 2500,
                "amount": 0,
                "img": "https://neal.fun/spend/images/horse.jpg"
            },
            {
                "product_id": 20,
                "product_name": "Acre of Farmland",
                "product_price": 3000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/acre-of-farmland.jpg"
            },
            {
                "product_id": 21,
                "product_name": "Designer Handbag",
                "product_price": 5500,
                "amount": 0,
                "img": "https://neal.fun/spend/images/designer-handbag.jpg"
            },
            {
                "product_id": 22,
                "product_name": "Hot Tub",
                "product_price": 6000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/hot-tub.jpg"
            },
            {
                "product_id": 23,
                "product_name": "Luxury Wine",
                "product_price": 7000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/luxury-wine.jpg"
            },
            {
                "product_id": 24,
                "product_name": "Diamond Ring",
                "product_price": 10000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/diamond-ring.jpg"
            },
            {
                "product_id": 25,
                "product_name": "Jet Ski",
                "product_price": 12000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/jet-ski.jpg"
            },
            {
                "product_id": 26,
                "product_name": "Rolex",
                "product_price": 15000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/rolex.jpg"
            },
            {
                "product_id": 27,
                "product_name": "Ford F-150",
                "product_price": 30000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/ford-f-150.jpg"
            },
            {
                "product_id": 28,
                "product_name": "Tesla",
                "product_price": 75000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/tesla.jpg"
            },
            {
                "product_id": 29,
                "product_name": "Monster Truck",
                "product_price": 150000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/monster-truck.jpg"
            },
            {
                "product_id": 30,
                "product_name": "Ferrari",
                "product_price": 250000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/ferrari.jpg"
            },
            {
                "product_id": 31,
                "product_name": "Single Family Home",
                "product_price": 300000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/single-family-home.jpg"
            },
            {
                "product_id": 32,
                "product_name": "Gold Bar",
                "product_price": 700000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/gold-bar.jpg"
            },
            {
                "product_id": 33,
                "product_name": "McDonalds Franchise",
                "product_price": 1500000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/mcdonalds-franchise.jpg"
            },
            {
                "product_id": 34,
                "product_name": "Superbowl Ad",
                "product_price": 5250000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/superbowl-ad.jpg"
            },
            {
                "product_id": 35,
                "product_name": "Yacht",
                "product_price": 7500000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/yacht.jpg"
            },
            {
                "product_id": 36,
                "product_name": "M1 Abrams",
                "product_price": 8000000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/m1-abrams.jpg"
            },
            {
                "product_id": 37,
                "product_name": "Formula 1 Car",
                "product_price": 15000000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/formula-1-car.jpg"
            },
            {
                "product_id": 38,
                "product_name": "Apache Helicopter",
                "product_price": 31000000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/apache-helicopter.jpg"
            },
            {
                "product_id": 39,
                "product_name": "Mansion",
                "product_price": 45000000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/mansion.jpg"
            },
            {
                "product_id": 40,
                "product_name": "Make a Movie",
                "product_price": 100000000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/make-a-movie.jpg"
            },
            {
                "product_id": 41,
                "product_name": "Boeing 747",
                "product_price": 148000000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/boeing-747.jpg"
            },
            {
                "product_id": 42,
                "product_name": "Mona Lisa",
                "product_price": 780000000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/mona-lisa.jpg"
            },
            {
                "product_id": 43,
                "product_name": "Skyscraper",
                "product_price": 850000000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/skyscraper.jpg"
            },
            {
                "product_id": 44,
                "product_name": "Cruise Ship",
                "product_price": 930000000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/cruise-ship.jpg"
            },
            {
                "product_id": 45,
                "product_name": "NBA Team",
                "product_price": 2120000000,
                "amount": 0,
                "img": "https://neal.fun/spend/images/nba-team.jpg"
            }
        ],
        balance : 100000000000,
        total : 0,
    },
    reducers: {
        buy : (state,action) => {
            const item = state.products.find(element => element.product_id == action.payload)

            item.amount+= 1;
            state.balance -= item.product_price;
            state.total += item.product_price;
        },
        sell : (state,action) => {
            const item = state.products.find(element => element.product_id == action.payload)

            item.amount -= 1;
            state.balance += item.product_price;
            state.total -= item.product_price;
        }
    }
  })
  
  export const { buy,sell} = productsSlice.actions
  
  export default productsSlice.reducer
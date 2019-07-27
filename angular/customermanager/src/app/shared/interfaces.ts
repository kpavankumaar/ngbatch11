export interface ICustomers{
    "id": Number,
    "firstName": String,
    "lastName": string,
    "gender": String,
    "address": String,
    "city": String,
    "state": {
        "abbreviation": string,
        "name": String
    },
    "orders": [
        {
            "productName": String,
            "itemCost": Number
        },
        {
            "productName": String,
            "itemCost": Number
        }
    ],
    "latitude"?: Number,
    "longitude"?: Number
}
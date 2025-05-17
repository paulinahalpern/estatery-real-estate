interface Property {
  img: string;
  price: string;
  title: string;
  address: string;
  bedNum: number;
  bathNum: number;
  squareMeters: number;
}

const properties: Property[] = [
  {
    img: "House_1.png",
    price: "$450,000",
    title: "Modern Family Home",
    address: "123 Maple Street, Springfield",
    bedNum: 4,
    bathNum: 3,
    squareMeters: 220,
  },
  {
    img: "House_2.png",
    price: "$320,000",
    title: "Cozy Cottage",
    address: "45 Oak Avenue, Greenfield",
    bedNum: 3,
    bathNum: 2,
    squareMeters: 150,
  },
  {
    img: "House_3.png",
    price: "$550,000",
    title: "Luxury Villa",
    address: "789 Palm Drive, Rivertown",
    bedNum: 5,
    bathNum: 4,
    squareMeters: 350,
  },
  {
    img: "House_4.png",
    price: "$270,000",
    title: "Charming Bungalow",
    address: "67 Elm Street, Lakeside",
    bedNum: 2,
    bathNum: 1,
    squareMeters: 95,
  },
  {
    img: "House_5.png",
    price: "$400,000",
    title: "Suburban Dream",
    address: "890 Willow Road, Hilltown",
    bedNum: 4,
    bathNum: 2,
    squareMeters: 200,
  },
  {
    img: "House_6.png",
    price: "$625,000",
    title: "Penthouse Apartment",
    address: "12 Central Plaza, Metropolis",
    bedNum: 3,
    bathNum: 3,
    squareMeters: 180,
  },
];

export default properties;

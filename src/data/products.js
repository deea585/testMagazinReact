const produse = [
    {
      name: "beciul domnesc",
      id: 1,
      pret: 1023,
      tara: "Romania",
      soi:"sec",
      culoare:"rosu",
      arome:["cirese","lamaie"]
    },
    {
      name: "beciul domnesc",
      id: 2,
      pret: 12,
      tara: "Franta",
      soi:"demisec",
      culoare:"roze",
      arome:["lemn","stejar"]
    },

    {
      name: "cacao de vin",
      id: 4,
      pret: 24,
      tara: "Spania",
      soi:"dulce",
      culoare:"rosu"
    },
    {
      name: "JP Chanlet",
      id: 6,
      pret: 50,
      tara: "Olanda",
      soi:"demidulce",
      culoare:"alb",
    }
  ]

  const GetAllProducts = () =>{
      return produse;
  }
  export default  GetAllProducts

import { filterData } from "../src/data";
const dataPersonaje = [
  {
    house: "Ravenclaw",
    gender: "Male",
    species: "Human",
  },


  {
    house: "Gryffindor",
    gender: "Male",
    species: "Human",

  },

  {
    house: "Slytherin",
    gender: "Male",
    species: "Human"
  },
]
describe("filterData filtrar la data de los personajes por casa", () => {
  it("is fuction", () => {
    expect(typeof filterData).tobe("fuction");
  })
});
it("debería retornar solo las casas Gryffindor", () => {
  let resultados = filterData(dataPersonaje, "house");
  expect(resultados[0].house).tobe("Gryffindor");
});
describe("filterData filtrar la data de los personajes por genero", () => {
  it("is fuction", () => {
    expect(typeof filterData).tobe("fuction");

  });
});
it("filterData deberia filtrar el genero de las casas", () => {
  it("is function", () => {
    let resultados = filterData(dataPersonaje, "Male")
    expect(resultados[0].gender).tobe("Gryffindor");
    expect(resultados[1].gender).tobe("Slytherin");
    expect(resultados[2].gender).tobe("Ravenclaw");

  })
})

describe("filterData filtrar la data de las casas por especie", () => {
  it("is fuction", () => {
    expect(typeof filterData).tobe("fuction");

  });
});
it("filterData deberia filtrar la especie de las casas", () => {
  it("is function", () => {
    let resultados = filterData(dataPersonaje, "Human")
    expect(resultados[0].species).tobe("Gryffindor");
    expect(resultados[1].species).tobe("Slytherin");
    expect(resultados[2].species).tobe("Ravenclaw");

  })
})
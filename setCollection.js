let cities = new Set();

cities.add("Hyd");
cities.add("delhi");
cities.add("mumbai");
cities.add("bangalore");

console.log(cities.size);

cities.add("Hyd");

console.log(cities.delete("pune"));
console.log(cities.has("mumbai"));

console.log(cities);

console.log("------");

cities.forEach((e)=>{console.log(e)});

cities.clear();
console.log(cities);

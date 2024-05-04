// const avgDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;

// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;

const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;

console.log(avgDolphins, avgKoalas);

if ((avgDolphins > avgKoalas) && (avgDolphins >= 100)) {
    console.log("Team Dolphins is the winner.");
}
else if ((avgKoalas > avgDolphins) && (avgKoalas >= 100)) {
    console.log("Team Koalas is the winner.");
}
else if (avgDolphins === avgKoalas) {
    console.log("Match is draw🥲. So, no one gonna win the trophy!!!");
}
else {
    console.log("Enter the correct data.");
}
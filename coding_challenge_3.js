// Avevage Calculation using difinding variables
const firstScoreDalphins = 96,  secondScoreDalphins = 108, thirdScoreDalphins = 89;
const firstScoreKoalas = 96,  secondScoreKoalas = 91, thirdScoreKoalas = 110;
const firstBunusDalphins = 97, secondBunusDalphins = 112, thirdBunusDalphins = 101;
const firstBunusKoalas = 109, secondBunusKoalas = 95, thirdBunusKoalas = 123;
const firstSecBunusDalphins = 97, secondSecBunusDalphins = 112, thirdSecBunusDalphins = 101;
const firstSecBunusKoalas = 109, secondSecBunusKoalas = 95, thirdSecBunusKoalas = 106;

scoreAvgDalphons = (firstScoreDalphins + secondScoreDalphins + thirdScoreDalphins)/3;
scoreAvgKoalas = (firstScoreKoalas + secondScoreKoalas + thirdScoreKoalas)/3;

bonusAvgDalphons = (firstBunusDalphins + secondBunusDalphins + thirdBunusDalphins)/3;
bonusAvgKoalas = (firstBunusKoalas + secondBunusKoalas + thirdBunusKoalas)/3;

secBonusAvgDalphons = (firstSecBunusDalphins + secondSecBunusDalphins + thirdSecBunusDalphins)/3;
secBonusAvgKoalas = (firstSecBunusKoalas + secondSecBunusKoalas + thirdSecBunusKoalas)/3;


console.log(scoreAvgDalphons);
console.log(scoreAvgKoalas);

console.log(bonusAvgDalphons);
console.log(bonusAvgKoalas);


console.log(secBonusAvgDalphons);
console.log(secBonusAvgKoalas);

if (scoreAvgDalphons > scoreAvgKoalas){
    console.log(`Dolphons win the 🏆`)
}else if (scoreAvgDalphons < scoreAvgKoalas){
    console.log(`Koalas win the 🏆`)
}else{
    console.log(`No team win the 🏆`)
}
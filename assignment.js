// ************* Solution 1: "Seer to  Mon"  ************* //

function seerToMon(seer) {
  if (seer < 0) {
    return "Please enter valid unit ";
  } else {
    // 1 Mon = 40 seer
    mon = seer / 40;
    return mon;
  }
}

let myUnit = seerToMon(10);
console.log(myUnit);

// ************* Solution 2: "Total  Sales"  ************* //

function totalSales(numberOfShirt, numberOfPant, numberOfShoe) {
  // single product price

  let shirtPerPice = 100;
  let pantPerPice = 200;
  let shoePerPice = 500;

  // Total price  count

  let totalShirtPrice = numberOfShirt * shirtPerPice;
  let totalPantPrice = numberOfPant * pantPerPice;
  let totalShoesPrice = numberOfShoe * shoePerPice;

  //invalid parameter checking

  if (totalShirtPrice < 0 || totalPantPrice < 0 || totalShoesPrice < 0) {
    return "Please enter valid product item";
  } else {
    let totalProductPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;

    return totalProductPrice;
  }
}

let myTotalSales = totalSales(2, 3, 1);

console.log(myTotalSales);

// ************* Solution 3: "Delivery Cost"  ************* //

function deliveryCost(totalTshirt) {
  let perCostLessThen100 = 100;
  let perCostBetween101To200 = 80;
  let perCostMoreThan200 = 50;

  // validation

  if (totalTshirt < 0) {
    return "Please give valid number if Tshirt";
  }
  if (totalTshirt <= 100) {
    let totalCostLessThen100 = totalTshirt * perCostLessThen100;
    return totalCostLessThen100;
  } else if (totalTshirt > 100 && totalTshirt <= 200) {
    totalCostLessThen100 = perCostLessThen100 * 100;
    let restTshirt = totalTshirt - 100;
    let totalCostBetween101To200 = perCostBetween101To200 * restTshirt;

    return totalCostLessThen100 + totalCostBetween101To200;
  } else if (totalTshirt > 200) {
    totalCostLessThen100 = perCostLessThen100 * 100;
    totalCostBetween101To200 = perCostBetween101To200 * 100;

    let restTshirts = totalTshirt - 200;
    totalCostMoreThan200 = restTshirts * perCostMoreThan200;

    return (
      totalCostLessThen100 + totalCostBetween101To200 + totalCostMoreThan200
    );
  }
}

let myTotalCost = deliveryCost(220);

console.log(myTotalCost);

// ************* Solution 4: "Perfect Friend"  ************* //

let friends = ["Arif", "Zaman", "Sumaiya", "Aysha", "Nasir"];

function perfectFriend(allFriends) {
  for (let i = 0; i <= allFriends.length; i++) {
    if (allFriends[i].length == 5) {
      return allFriends[i];
    }
  }
}

let myPerfectFriend = perfectFriend(friends);
console.log(myPerfectFriend);

//arrays ແມ່ນຕົວແປຊະນິດໜື່ງທີ່ສາມາດເກັບຂໍ້ມູນພາຍໃຕ້ຕົວແປດຽວຫຼາຍຄ່າ

let products = ["Laptop", "Phone", "Tablet"];
console.log(products[0]); // Laptop
console.log(products[1]); // Phone


// ໂດຍທີ່ method ຂອງ array ສຳຄັນໆຖ້າຢາກເກັ່ງໃນສາຍງານ backend :

// push method ມີໜ້າທີ່ ເພີ່ມຄ່າເຂົ້າໄປທ້າຍ ຊຸດຂໍ້ມູນຂອງ arrays ຄືກັບພາສາ ໄພທອນ

let cart = [];
cart.push("Jo");
cart.push("Phasouk");
console.log(cart);

// pop method ມີໜ້າທີ່ ເອົາຄ່າສຸດທ້າຍອອກຈາກ ຊຸດຂໍ້ມູນຂອງ arrays ຄືກັບພາສາ ໄພທອນ

let cart1 = ["Phasouk", "Jo"];
cart1.pop();
console.log("cart1:" + cart1); // ຊູດຂໍ້ມູນຈະໂຊແຕ່ ພາສຸກ ເພາະໄດ້ນຳເອົາ ໂຈ້ອອກໄປຈາກຊຸດຂໍ້ມູນແລ້ວ ດ້ວຍ pop ມັນຈະເອົາສະເພາະຕົວທີ່ຍັງເຫຼືອມາໂຊ ບໍ່ແມ່ນເອົາໂຕເອົາອອກມາໂຊ ຄືກັບ ພາສາໄພທອນ


// map method ແມ່ນ method ທີ່ເຮັດໜ້າທີ່ສ້າງ array ໃໝ່ຂື້ນຈາກການແປງຄ່າຂອງ array ເກົ່າ ເຊັ່ນ ສົມມຸດວ່າ :

let numbers = [1,2,3];
let doubled = numbers.map(n => n * 2); // n ໃນບ່ອນນີ້ຄື ຕົວແທນຂອງ numbers ທີ່ຈະຕ້ອງວົນລູບມາຄູນ 2 ແຕ່ລະຮອບເປັນພື້ນຖານຕ້ອງກຳນົດ parameter ຂຶ້ນມາອ້າງອີງຂໍ້ມູນ
console.log(doubled);


// filter method  ມີໜ້າທີ່ຄັດກຮອງຂໍ້ມູນ ໃນອາເລ ໂດຍຈະຕ້ອງໃສ່ຂໍ້ມູນເຂົົ້າໄປ
/* 1 ຖ້້າຫາກວ່າ ຄ່າຂອງ element ຜ່ານເງື່ອນໄຂ ຈະຖືກເກັບໄວ້ໃນ ອາເລໃໝ່ ແຕ່ຖ້າ element ບໍ່ຜ່ານເງື່ອນໄຂ ຈະຖືືກຄັດຊຶ່ອອກ */


let numbers1 = [1, 2, 3, 4, 5, 6];
let even = numbers1.filter(n => n % 2 === 0);
console.log(even); // [2, 4, 6]


const add = (a, b) => a + b;
console.log(add(2,3));

// Iteration ແມ່ນ ການວົນລູບຊ້ຳເທື່ອລະຮອບ ເພື່ອເຂົ້າເຖິງຫຼືປະມວນຜົນ element ແຕ່ລະຕົວໃນໂຄງສ້າງຂໍ້ມູນ ເຊັ່ນ arrya , set , string
// ເວົ້າງ່າຍໆເລີຍຄື ຖ້້າຂໍ້ມູນມິຫຼາຍຕົວ ເຮົາຢ່າງຜ່ານມັນເທື່ອລະຕົວ ນັ້ນແລະເອີ້ນວ່າ Iteration

for (let n of numbers) {
  console.log(n);
}

let word = "Hi";
for (let ch of word) {
  console.log(ch);
}
// Output: H, i




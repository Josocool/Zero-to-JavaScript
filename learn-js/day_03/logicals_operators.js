let age = 22;
let isStudent = true;

if (age >= 18 && isStudent ){ // ຄ່າທັ້ງ 2 ຕ້ອງຖືກເຖິງຈະຖືກ

    console.log("You can register right now!");
}
else if(age >= 18 && isStudent == false){

    console.log("You can't register right now!, try again later!");
}

console.log(age <= 18 || isStudent); // ຄ່າຈະເປັນ true ເພາະ or gate ຕ້ອງການແຄ່ຄ່າໃດຄ່າໜື່ງຖືກເທົ່ານັ້ນ
console.log(!isStudent); // not gate ໃຊ້ສຳລັບທ້ວງຄ່າປະຈູບັນ ຖ້າມັນຖືກຢູ່ແລ້ວຈະເຮັດໃຫ້ມັນຜິດ ຖ້າຜິດຈະກັບມາຖືກ

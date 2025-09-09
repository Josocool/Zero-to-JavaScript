/* ຄຳສັ່ງ loops ແມ່ນ ການເຮັດວຽກຊ້ຳໂຄ້ດເກົ່າຫຼາຍໆຮອບ ໂດຍບໍ່ຕ້ອງຂຽນໂຄ້ດຊ້ຳ ມີທັ້ງໝົດ ທີ່ສຳຄັນທີ່ຄວນຮູ້ :
    1. for loop ເຮົາຈະໃຊ້ເມື່ອຮູ້ຈຳນວນຮອບທີ່ຕ້ອງການໃຊ້ແນ່ນອນ
    2. while loop ເຮົາຈະໃຊ້ເມື່ອຍັງບໍ່ຮູ້ຈຳນວນຮອບທີ່ຕ້ອງການ ແຕ່ຕ້ອງມີເງື່ອນໄຂເປັນຈິງ ແລະເມື່ອເປັນເທັຈໂປຮແກຮມຈະຫຍຸດທັນທີ
    3. for of loop ເຮົາສຳລັບຕ້ອງການການວົນ ລູບ ໃນ array or object ທີ່ເປັນ iterable ເພື່ອເຂົ້າເຖິງຄ່າໄດ້ງ່າຍເທື່ອລະຄ່າໃນ array or object ມັນຈະເຮັດວຽກໂດຍບໍ່ສົນຄ່າ index ຂອງຂໍ້ມູນ ມັນສົນແຄ່ ຄ່າຂອງຂໍ້ມູນເທົ່ານັ້ນ ນອກນັ້ນເຮັດຄືກັນກັບ for loop normal */

    // for loop 
     for (let i = 10; i > -1; i--) {

        console.log("count:"+ i);
     }


     // while loop ເຊັກຂໍ້ມູນກ່ອນຄ່ອຍວົນຊ້ຳ 
     // do while ເຮັດວຽກກ່ອນ ຢ່າງນ້ອຍ 1 ຮອບສະເໝີ ແລ້ວຄ່ອຍເຊັກຂໍ້ມູນ

     let count = 0;
     while (count < 5 ){
        console.log("Count: ",count);
        count++;
     }

    // for of loop

let fruits = ["apple", "banana", "mango"];
for(let fruit of fruits) {
    console.log(fruit);
}

// for in loop ແມ່ນຄຳສັ່ງສົນລູບເອົາໄວ້ດືງຊື່ property ຄຸນສົມບັດດ້ານໃນຂອງ entity (key) ຂອງ ຊະນິດຂໍ້ມູນແບບ object ອອກມາໃຊ້ງານ ພ້ອມຕົວຢ່າງ :

const person = {
  name: "Alice",
  age: 21,
  city: "Bangkok"
};

for (const key in person){

    console.log("Key :",key ,"| Value:",person[key]);
}

for (const key in person){

    console.log("Key :", key, "| Value: ", person[key]);
}

const headers = {

    "content-type": "application/json ",
    "authorization": "Bearer Token123 ",
    "user-agent": "Mozilla/5.0 "

};
 for (const key in headers){
    console.log(key, "=>", headers[key]);
 }
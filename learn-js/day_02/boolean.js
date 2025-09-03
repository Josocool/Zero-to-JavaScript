/* 
boolean ແມ່ນຕົວແປທີ່ເກັບຄ່າຕົວຈິງ ແບບ Logical ມີການເກັບຄ່າແຕ່ 2 ຄ່າເທົ່ານັ້ນ : true or false
    ເຮົາຈະໃຊ້ boolean ໃນກໍລະນີ້ທີ່ຕ້ອງການຮູ້
    1. ການຕັດສິນໃຈ
    2. ການກວດສອບເງື່ອນໄຂ
    3. ການເກັບສະຖານະ ເປີດ / ປິດ
    4. ການກວດຈັບຫາສິ່ງຜິດປົກກະຕິ
    5. ກວດສອບສະຕ໊ອກສິນຄ້າ


*/


let isStudent = true;
if (isStudent){

    console.log("Welcome to class");
}else {
    console.log("No entry");
}

let age = 20;
console.log(age >= 18);
console.log(age < 18);

let hasTicket = true;
let isVIP = false;
console.log(hasTicket && isVIP); 
console.log(hasTicket || isVIP);

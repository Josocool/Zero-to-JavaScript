/*  object ໃນ javascript ແມ່ນການເກັບຂໍ້ມູນແບບໂຄງສ້າງຂໍ້ມູນທີ່ ຄ່າເປັນຄູ່ ແບບພາສາໄພທອນ dictionary data types ມີ  key-value ເປັນຕົວເກັບຄ່າ
    ໃຊ້ເວລາທີ່ເຮົາຕ້ອງການເກັບຂໍ້ມູນທີ່ມີຄຸນສົມບັດ (properties) ທີ່ມີລາຍລະອຽດຫຼາຍຢ່າງ ແລະ ຄ່າທີ່ກ່ຽວຂ້ອງກັນເຊັ່ນ :

    let user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

*/

/* ເຮົາຈະໃຊ້ object ໃນກໍລະນີ : 
    1. ລະບົບຈັດການຜູ້ໃຊ້ງານ ( User Management ) ເຊັ່ນລະບົບສະມັກສະມາຊິກ ຫຼື ລະບົບລ໊ອກອິນ
    2. ລະບົບສິນຄ້າ / ສະຕ໊ອກ (E-commerce / Inventory)
    3. ການຈັດການອໍເດີ (Order Management)
    4. ການຕັ້ງຄ່າ (Configuration)
    5. ເຊື່ອມຕໍ່ API/ Backend
*/
let user = {

    id: 101,
    username: "Phasouk",
    email: "rouangchalern.phasouk11@gmail,com",
    isActive: true
}; // 👉 ໃຊ້ object ເກັບຂໍ້ມູນແຕ່ລະ user ເພື່ອສົ່ງໄປຍັງ database ຫຼື API ຕໍ່

let product = {

    id: "P001",
    name:"Laptop",
    price: 20.000,
    stock: 25
}; //👉 ໃຊ້ເກັບຂໍ້ມູນສິນຄ້າສຳຫຼັບຮ້ານຄ້າອອນລາຍ ເຊັ່ນ : Lazada, Shoppe

let order = {
    orderId: "ORD12345",
    customerName:"Phasouk",
    item:["Laptop", "Mouse"],
    total: 26000,
    status: "Pending"
}; // 👉 ໃຊ້ object  ແທນໃບສັ່ງຊື້ (order) ໃນລະບົບຂາຍ

let config = {
  theme: "dark",
  language: "th",
  notifications: true
}; // 👉 ໃຊ້ເກັບຄ່າການຕັ້ງຄ່າແອັບພິເຄຊັ່ນຫຼື ສະເພາະໂປຮຟາຍຜູ້ໃຊ້ສ່ວນຕົວໄດ້

let requestBody = {
    username: "Jo",
    password: "123456"
}; // 👉 ສົ່ງໄປຍັງ backend ຜ່ານ API ເພື່ອ login ຫຼື ທຳທຸລະກຳ
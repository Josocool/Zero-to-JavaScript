/*

ການລວມ array ເຂົ້າກັບ object ຈະເຮັດໃຫ້ຕອບໂຈດທາງການໃຊ້ງານໄດ້ຈິງຫຼາຍທີ່ສຸດເພາະ ເປັນຫຍັງເຖິງຕ້ອງລວມ :
    1.  Array ນັ້ນສາມາດເກັບຄ່າໄດ້ຫຼາຍຄ່າ / ຫຼາຍລາຍການ
    2. object ນັ້ນເກັບຄຸນສົມບັດຂອງແຕ່ລະລາຍການແບບ key-value
    =>> ເມື່ອເອົາ array ລວມກັນກັບ object ເຮົາຈະສາມາດເກັບຫຼາຍ Entity ໄດ້ ແລ້ວແຕ່ລະ Entity ກໍມີຫຼາຍ Property
    ໄປເບິ່ງຕົວຢ່າງກັນ :

*/

let users = [
    {id: 1 , name:"Phasouk", surname: "LOUAGNCHALERN", email: "rouangchalern.phasouk11@gmail.com", position:"Backend Developer"},
    {id: 2 , name:"Lattikone", surname: "SITTHIPHONE", email: "rouangchalern.phasouk11@gmail.com", position:"Backend Developer"},
    {id: 3 , name:"Chanmala", surname: "KEOXAISY", email: "rouangchalern.phasouk11@gmail.com", position:"Frontend Developer"}
];

console.log(users[0].position) // users → Array ຂອງຜູ້ໃຊ້ຫຼາຍຄົນ, ແຕ່ລະ user ຈະແມ່ນ → Object ເກັບ id, name, email


let cart = [
    {productId: "P012", name:"Laptop", price:25000},
    {productId:"P013",name:"PC", price:30000},
    {productId:"P013",name:"Macbook", price:35000}
];
console.log(cart[1].name); // cart ຈະແມ່ນ Array ຂອງສິນຄ້າ , ແຕ່ລະສິນຄ້າຈະແມ່ນ Object ເກັບ id, name, price


let dailySales = [ //  ສ້າງບົດລາຍງານຍອດຂາຍປະຈຳວັນ
  { date: "2025-09-01", total: 5000 },
  { date: "2025-09-02", total: 7000 },
  { date: "2025-09-03", total: 6500 }
];

console.log(dailySales[2].total); // 6500

/* ສະຫຼຸບ

ການລວມ Array + Object ເປັນ Pattern ພື້ນຖານທີ່ສຸດໃນວຽກຈິງທີເດບ backend ຕ້ອງຮູ້ເລີຍ

Array → ໃຊ້ເກັບ ຫຼາຍລາຍການ

Object → ໃຊ້ເກັບຄຸນສົມບັດຂອງແຕ່ລະລາຍການ

ມັນຈະເກີດປະໂຫຍດຢ່າງຫຼາຍກັບ ລະບົບທຸລະກິດ  / e-commerce / CRM / Database / API 


*/
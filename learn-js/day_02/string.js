let age = 22; // ຖ້າປະກາດດ້ວຍ let ເຮົາຈະສາມາດແປງຄ່າໄດ້ຕາມຫຼາຍ ດັ່ງຕົວຢ່າງນີ້
age = 23; // Answer it.

console.log(age);

const pi = 3.14; // ຖ້າປະກາດດ້ວຍ const ເຮົາຈະບໍ່ສາມາດແປງຄ່າໄດ້ຕາມຫຼາຍ ດັ່ງຕົວຢ່າງນີ້
//pi = 3.14159; // False to Answer.
console.log(pi);



/* ຊະນິດຂໍ້ມູນ String => "ຂໍ້ຄວາມ", 'ສະບາຍດີ'
    ເຮົາຈະໃຊ້ String Data types ໃນກໍລະນີ້ທີ່ຕ້ອງການເກັບ ຂໍ້ມູນທີ່ເປັນແບບຂໍ້ຄວາມ ຫຼື ຕົວອັກສອນ ເຊັ່ນ :
    1. ການເກັບຂໍ້ມູນ ຊື່, ທີ່ຢູ່ , ອີເມລ 
    2. ເກັບລະຫັດຜ່ານລ໋ອກອິນ
    3. ໃຊ້ເປັນຂໍ້ຄວາມຕໍ່ກັບຕົວແປອື່ນໆ
*/

let name = "Phasouk";
let surname = 'LOUANGCHALERN';
let address = 'Bangkok';        // ທີຢູ່
let message = `${name} ${surname}`; // ໃຊ້ template literal

console.log(message);

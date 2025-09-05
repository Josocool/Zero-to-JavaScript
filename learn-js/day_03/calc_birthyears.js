

const readline = require('readline'); // ເອີ້ນໃຊ້ Module ທີ່ມີຢູ່ແລ້ວຂອງ  nodejs  ທີ່ຊື່ readline ເປັນຕົວຮັບຂໍ້ມູນຈາກຄີບອດ ຫຼຶ ຜູ້ໃຊ້
// readline ມີໄວ້ເພື່ອອ່ານຂໍ້ມູນຈາກ input (ແປ້ນພີມ/command line) ແລະຂຽນໄປຍັງ output (console)

function ask(question) { // ສ້າງຟັງຊັນທີ່ຊື່ ask ເປັນແບບຮັບ ຄ່າ argument ຊື່ question
  const rl = readline.createInterface({ // ສ້າງ interface ສຳຫຼັບເຊື່ອມຕໍ່ກັບ standard input/output ຂອງຄອມພິວເຕີ
    input: process.stdin, // ຄຳສັ່ງຮັບຂໍ້ມູນຈາກຄີບອດ 
    output: process.stdout // ສະແດງຂໍ້ຄວາມໃນ console
  });
  return new Promise(resolve => rl.question(question, ans => {  // ໂຊຄຳຖາມໃນ (question) ໃນ console ແລະ ຖ້າຜູ້ໃຊ້ພີມ ແລ້ວກົດຍືນຍັນ ຂໍ້ມູນທີ່ພີມຈະເກັບໃນ ans
    rl.close(); // ເພາະ rl.question() ໃຊ້ callback → ເຮົາຫໍ່ມັນໃນ Promise ເພື່ອຈະໃຊ້ async/await ໄດ້
    resolve(ans); // resolve = ຟັງຊັນນີ້ຈະບອກ Promise ວ່າວຽກແລ້ວແລ່ວ ແລະ ສົ່ງຄ່າກັບ
  })); /* ຄຳວ່າ process ຄືການກຳນົດໃຫ້ເປັນຕົວເເທນຂອງໂປຮແກຮມທີກຳລັງຮັນໂຄ້ດໃນ nodejs
            stdin ແມ່ນຮູບແບບການຂຽນເພື່ອກຳນົດ ຊ່ອງທາງຂໍ້ມູນເຂົ້າມາໃນໂປຮແກຮມ
            stdout ແມ່ນຮູບແບບການຂຽນເພື່ອກຳນົດ ຊ່ອງທາງການສົ່ງຂໍ້ມູນອອກ 
            Promise ແມ່ນ ກ່ອງ object ທີ່ເອົາໄວ້ເກັບຄ່າ ທີ່ຈະໄດ້ໃນອານາຄົດ ໃຊ້ກັບວຽກທີ່ຕ້ອງໃຊ້ເວລາ ເຊັ່ນ ອ່ານໄຟລ , ຖ້າ Input ເຂົ້າ ຫຼື ດືງຂໍ້ມູນຈາກ API
            ມີ 3 ສະຖານະ : 
            pending → ກຳລັງເຮັດວຽກ
            fulfilled → ເຮັດວຽກແລ້ວ ແລະ ມີຄ່າ (resolve)
            rejected → ເຮັດວຽກລົ້ມເລວ (error)
  */
}

(async () => { // async ແມ່ນ ຄິເວີດ ທີ່ໃຊ້ປະກາດວ່າເປັນ ຟັງຊັນ asynchronous function ທີ່ແມ່ນຟັງຊັນທີ່ບໍ່ຕ້ອງຖ້າຜົນລັັບທັນທີແລ້ວຈື່ງ ເຮັດວຽກຕໍ່ໄປບັນທັດອື່ນໄດ້ ແລະ ຟັງຊັນທີ່ເປັນ async ຈະຄືນຄ່າເປັນ Promise 
  const ageStr = await ask('ປ້ອນອາຍຸ: '); // await ຈະໃຊ້ສະເພາະໃນຟັງຊັນ asynchronous ໃຊ້ບອກໃຫ້ເຮົາຖ້າຜົນລັບຂອງ  Promise ກ່ອນ ເຖິງຈະເຮັດວຽກບັນທັດຕໍ່ໄປ
  const age = Number(ageStr.trim());

  if (Number.isNaN(age) || age <= 0) { // isNan ໃຊ້ເພື່ອກວດສອບວ່າຄຳນີ້ເປັນ ຄ່າ NaN ຫຼືບໍ
    console.log('⚠️ ກະລຸນາປ້ອນອາຍຸເປັນຕົວເລກທີ່ຖືກຕ້ອງ');
    return;
  }

  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;

  console.log(`ເຈົ້າເກີດປີ ${birthYear}`);
})();

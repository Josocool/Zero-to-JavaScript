const readline = require("readline"); // ເອີ້ນໃຊ້ module readline ເພື່ອຮັບຄ່າຈາກຜູ້ໃຊ້

const rl =  readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter your score: ", function(input) {

    let score = parseInt(input); // parseInt ໃຊ້ແປງຄ່າທີ່ຮັບມາເປັນ Number

    if (score >= 80) {
    console.log("You got grade A!");
  } else if (score >= 70) {
    console.log("You got grade B");
  } else if (score >= 60) {
    console.log("You got grade C");
  } else {
    console.log("You got grade F");
  }
  rl.close(); // ຄຳສັ່ງປິດການເຮັດວຽກຂອງ Input
});
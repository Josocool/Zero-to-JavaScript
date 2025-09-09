const { Client } = require("pg");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// PostgreSQL connection
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "school",
  password: "Jops2003",
  port: 5432
});

async function saveStudent(name, age, grade) {
  try {
    await client.connect();

    let status = "APPROVED";
    let reason = "ເງື່ອນໄຂຜ່ານ ສະມັກໄດ້";

    // 
    if (age <= 18) {
      status = "REJECTED";
      reason = "ອາຍຸຕ່ຳກວ່າ 18";
    }

    const validGrades = ["A", "B", "C"];
    if (!validGrades.includes(grade.toUpperCase())) {
      status = "REJECTED";
      reason = "ເກດບໍ່ຖືກຕ້ອງ (ຕ້ອງເປັນ A,B,C)";
    }

    // ບັນທືກຂໍ້ມູນພ້ອມ status & reason
    const query = `
      INSERT INTO students (name, age, grade, status, reason)
      VALUES ($1, $2, $3, $4, $5)
    `;
    await client.query(query, [name, age, grade, status, reason]);

    // ສະແດງຜົນລັບ
    if (status === "APPROVED") {
      console.log("✅", reason);
    } else {
      console.log("❌", reason, "ຂໍ້ມູນຖືກບັນທືກເປັນ REJECTED ແລ້ວ");
    }

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.end();
    rl.close();
  }
}

// ຮັບ input ຈາກ user
rl.question("Enter student name: ", (name) => {
  rl.question("Enter student age: ", (age) => {
    rl.question("Enter student grade (A,B,C,F): ", (grade) => {
      saveStudent(name, parseInt(age), grade);
    });
  });
});

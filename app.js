// Import package
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';

// 1. Tampilkan Nama dan NIM dengan warna pink muda
const nama = "Sucitasari Rahmadani";
const nim = "F1D02310138";

// Warna khusus
const lightPink = chalk.hex('#ffb6c1');  // pink muda
const lightBlue = chalk.hex('#87cefa'); // biru muda
const hotPink = chalk.hex('#ff69b4');   // untuk label

console.log(hotPink.bold("Nama: ") + lightPink("Sucitasari") + " " + lightBlue("Rahmadani"));
console.log(hotPink.bold("NIM : ") + lightPink(nim));
console.log("\n");

// 2. Tampilkan pesan motivasi dengan cowsay
const orange = chalk.hex('#ffa500');
console.log(
  orange(
    cowsay.say({
      text: "Live in the present day! 😸",
      e: "^^",
      T: "U ",
      f: "kitty"
    })
  )
);

// 3. Tampilkan Nama dalam ASCII art dengan figlet (dibagi dua warna)
figlet.text("Sucitasari", function (err, data1) {
  if (err) {
    console.log("Terjadi error:", err);
    return;
  }

  figlet.text("Rahmadani", function (err, data2) {
    if (err) {
      console.log("Terjadi error:", err);
      return;
    }

    console.log(lightPink(data1));
    console.log(lightBlue(data2));
  });
});

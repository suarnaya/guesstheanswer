const formQuestion = document.querySelector('form');

window.addEventListener('load', () => {
  formQuestion.addEventListener('submit', e => {
    e.preventDefault();

    const numberInput = e.target.elements[0];
    const userAnswer = e.target.elements[0].value;

    // if no value, do nothing
    if (userAnswer === '') {
      return;
    }
    // console.log(userAnswer);
    e.target.reset();
    kalkulasi(userAnswer, numberInput);
  });

  kalkulasi();
});

const storeJawaban = [];
let skor = 0;

function kalkulasi(userAnswer, numberInput) {
  const [angka1, angka2] = randomDuaAngka();
  const jawaban = kalikanDuaAngka(angka1, angka2);

  storeJawaban.unshift(jawaban);
  // console.log(storeJawaban);
  // ambil jawaban sebelumnya
  const currentJawaban = storeJawaban[1];

  // +userAnswer = ubah type menjadi Number
  if (+userAnswer === currentJawaban) {
    skor++;
  }
  displayDOM(angka1, angka2, skor);

  // add focus
  numberInput.focus();
}

// random value ke1 dan value ke2
const randomDuaAngka = () => {
  const angka1 = Math.floor(Math.random() * 20);
  const angka2 = Math.floor(Math.random() * 15);
  return [angka1, angka2];
};

// kalikan
const kalikanDuaAngka = (angka1, angka2) => {
  const hasilKali = angka1 * angka2;
  return hasilKali;
};

// tampilkan ke dom
const displayDOM = (angka1, angka2, skor) => {
  const displaySkor = document.querySelector('#score');
  const angkaKe1 = document.querySelector('#nilai-awal');
  const angkaKe2 = document.querySelector('#nilai-akhir');

  displaySkor.textContent = skor;
  angkaKe1.textContent = angka1;
  angkaKe2.textContent = angka2;
};

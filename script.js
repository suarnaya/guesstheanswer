window.addEventListener('load', () => {
  const formQuestion = document.querySelector('form');
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
  const [jawaban, operasi] = kalkulasiDuaAngka(angka1, angka2);

  // add to hash table
  storeJawaban.unshift(jawaban);

  // ambil jawaban sebelumnya
  const currentJawaban = storeJawaban[1];

  // +userAnswer = ubah type menjadi Number
  if (+userAnswer === currentJawaban) {
    skor++;
  }

  // print ke layar
  displayDOM(angka1, operasi, angka2, skor);

  // add focus
  numberInput.focus();
}

// random value ke1 dan value ke2
const randomDuaAngka = () => {
  const angka1 = Math.floor(Math.random() * 25); // change value for the level
  const angka2 = Math.floor(Math.random() * 13); // change value for the level
  return [angka1, angka2];
};

// kalkulasikan
const kalkulasiDuaAngka = (angka1, angka2) => {
  let hasil = 0;
  let operasi = '';
  const kondisi = Math.random();

  if (kondisi < 0.334) {
    hasil = angka1 + angka2;
    operasi = 'ditambah';
  } else if (kondisi > 0.667) {
    hasil = angka1 * angka2;
    operasi = 'dikali';
  } else {
    hasil = angka1 - angka2;
    operasi = 'dikurang';
  }

  return [hasil, operasi];
};

// tampilkan ke dom
const displayDOM = (angka1, operasi, angka2, skor) => {
  const displayQuestion = document.querySelector('.question');
  const displaySkor = document.querySelector('#score');

  const question = `<span>
                      berapa hasil <br>
                      ${angka1} ${operasi} ${angka2}?
                    </span>`;

  displaySkor.textContent = skor;
  displayQuestion.innerHTML = question;
};

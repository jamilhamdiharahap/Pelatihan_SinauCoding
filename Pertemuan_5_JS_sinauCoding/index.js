var cek = 1;
while (cek <= 10) {
  if (cek == 8) {
    console.log(`Bus transbandung ${cek} sedang lembur`);
  } else {
    if (cek >= 7 && cek != 8) {
      console.log(`Bus transbandung ${cek} sedang tidak beroperasi`);
    } else {
      console.log(`Bus transbandung ${cek} beroperasi dengan baik`);
    }
  }
  cek++;
}

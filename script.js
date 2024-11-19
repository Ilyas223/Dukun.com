document.getElementById("submitSantet").addEventListener("click", function () {
  // Ambil data dari input
  const pengirim = document.getElementById("pengirim").value;
  const penerima = document.getElementById("penerima").value;
  const jenisSantet = document.getElementById("jenisSantet").value;

  // Validasi input
  if (pengirim.trim() === "" || penerima.trim() === "") {
    alert("Nama pengirim dan penerima harus diisi!");
    return;
  }

  // Tampilkan hasil
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p><strong>${pengirim}</strong> telah mengirimkan <strong>${jenisSantet}</strong> kepada <strong>${penerima}</strong>!</p>`;
});

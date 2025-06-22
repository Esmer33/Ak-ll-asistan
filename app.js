// Asistan yüklendiğinde yükleniyor animasyonunu kapat
window.addEventListener("load", function () {
  document.getElementById("yukleniyor").style.display = "none";
});

function tahminEt() {
  const input = document.getElementById("soru").value.toLowerCase().trim();
  const cevapAlani = document.getElementById("cevap");

  // Veritabanında eşleşme ara (yakın eşleşme için includes kullanılabilir)
  let eslesen = veriHavuzu.find(obj => input.includes(obj.soru.toLowerCase()));

  if (eslesen) {
    cevapAlani.innerText = "Asistan: " + eslesen.cevap;
  } else {
    cevapAlani.innerText = "Asistan: Bu soruya henüz bir yanıtım yok ama öğrenebilirim!";
  }
}
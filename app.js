// Sayfa yüklendiğinde yükleniyor ekranını gizle
window.addEventListener("load", function () {
  document.getElementById("yukleniyor").style.display = "none";
});

// Tahmin ve eşleştirme fonksiyonu
function tahminEt() {
  const input = document.getElementById("soru").value.toLowerCase().trim();
  const cevapAlani = document.getElementById("cevap");

  // Bilgi havuzunda eşleşme arar
  let eslesen = veriHavuzu.find(obj => input.includes(obj.soru.toLowerCase()));

  // Yanıtı gösterir
  if (eslesen) {
    cevapAlani.innerText = "Asistan: " + eslesen.cevap;
  } else {
    cevapAlani.innerText = "Asistan: Bu soruya henüz bir cevabım yok ama öğrenebilirim!";
  }
}

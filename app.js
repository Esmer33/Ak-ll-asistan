// Sayfa yüklendiğinde yükleme animasyonunu gizle
window.addEventListener("load", function () {
  document.getElementById("yukleniyor").style.display = "none";
});

// Tahmin fonksiyonu (NLP eşleşmeli)
function tahminEt() {
  const input = document.getElementById("soru").value.toLowerCase().trim();
  const cevapAlani = document.getElementById("cevap");

  const eslesen = enBenzerSoruyuBul(input);
  const skor = benzerlikSkoru(input, eslesen?.soru || "");

  if (eslesen && skor >= 0.3) {
    cevapAlani.innerText = "Asistan: " + eslesen.cevap;
  } else {
    cevapAlani.innerText = "Asistan: Bu soruya henüz bir cevabım yok ama öğrenebilirim!";
  }
}

// En benzer soruyu bulan basit NLP algoritması
function enBenzerSoruyuBul(soru) {
  let enYuksekSkor = 0;
  let enIyiEslesen = null;

  for (let i = 0; i < veriHavuzu.length; i++) {
    const skor = benzerlikSkoru(soru, veriHavuzu[i].soru);
    if (skor > enYuksekSkor) {
      enYuksekSkor = skor;
      enIyiEslesen = veriHavuzu[i];
    }
  }

  return enIyiEslesen;
}

// Basit kelime bazlı benzerlik algoritması
function benzerlikSkoru(a, b) {
  const kelimelerA = a.toLowerCase().split(" ");
  const kelimelerB = b.toLowerCase().split(" ");

  let ortak = 0;
  kelimelerA.forEach(kelime => {
    if (kelimelerB.includes(kelime)) ortak++;
  });



// Global Variable for Zoom
let zoomLevel = 1.0;

// DOM Elements
const menu = document.getElementById("menu");
const content = document.getElementById("content");
const area = document.getElementById("area");

// Navigation Functions
function backMenu() {
  content.classList.remove('active');
  menu.classList.add('active');
}

function openPage(type) {
  menu.classList.remove('active');
  content.classList.add('active');
  
// Render Material Page
// Render Material Page
if (type === 'materi') {

  area.innerHTML = `

  <div class="materi-wrapper">

    <!-- TITLE -->
    <h1 class="materi-title">
      Materi Fire Detector
    </h1>

    <p class="materi-intro">
      <b>Fire Detector</b> adalah perangkat sistem proteksi kebakaran 
      yang berfungsi mendeteksi gejala awal kebakaran seperti 
      <b>panas dan asap</b> kemudian mengirimkan sinyal ke 
      <b>Fire Alarm Control Panel (FACP)</b>.
    </p>

    <!-- FUNGSI -->
    <div class="accordion">

      <button class="accordion-btn">
        🔥 Fungsi Fire Detector
      </button>

      <div class="accordion-content">

        <div class="materi-card">

          <div class="materi-header">

            <img src="img/fire-alarm.png" 
                 class="materi-icon"
                 onerror="this.style.display='none'">

            <div>
              <h2>Fungsi Fire Detector</h2>

              <div class="materi-sub">
                Sistem Proteksi Kebakaran
              </div>
            </div>

          </div>

          <ul>
            <li>Mendeteksi kebakaran sejak dini</li>
            <li>Memberikan peringatan kepada penghuni gedung</li>
            <li>Mengaktifkan sistem alarm kebakaran</li>
            <li>Mendukung sistem pemadam otomatis</li>
            <li>Mengurangi korban jiwa dan kerugian material</li>
          </ul>

        </div>

      </div>

    </div>

    <!-- HEAT DETECTOR -->
    <div class="accordion">

      <button class="accordion-btn">
        🔥 Heat Detector
      </button>

      <div class="accordion-content">

        <div class="materi-card">

          <div class="materi-header">

            <img src="heat-detector.png"
                 class="materi-icon"
                 onerror="this.style.display='none'">

            <div>
              <h2>Heat Detector</h2>

              <div class="materi-sub">
                Detektor Panas
              </div>
            </div>

          </div>

          <p>
            Heat Detector adalah detektor yang bekerja berdasarkan 
            suhu (temperatur) tertentu. Detector ini digunakan 
            pada area yang memiliki potensi panas tinggi seperti 
            dapur, ruang genset, dan gudang.
          </p>

          <ul>
            <li>Fixed Temperature</li>
            <li>Rate of Rise</li>
            <li>Rate Compensation</li>
          </ul>

          <div class="aplikasi-box">
            Aplikasi: dapur, ruang genset, gudang
          </div>

        </div>

      </div>

    </div>

    <!-- SMOKE DETECTOR -->
    <div class="accordion">

      <button class="accordion-btn">
        💨 Smoke Detector
      </button>

      <div class="accordion-content">

        <div class="materi-card">

          <div class="materi-header">

            <img src="smoke-detector.png"
                 class="materi-icon"
                 onerror="this.style.display='none'">

            <div>
              <h2>Smoke Detector</h2>

              <div class="materi-sub">
                Detektor Asap
              </div>
            </div>

          </div>

          <p>
            Smoke Detector adalah detektor yang bekerja 
            mendeteksi partikel asap di udara akibat proses 
            pembakaran. Detector ini umum digunakan pada 
            area perkantoran, hotel, dan rumah sakit.
          </p>

          <ul>
            <li>Ionization Smoke Detector</li>
            <li>Photoelectric Smoke Detector</li>
            <li>Beam Smoke Detector</li>
          </ul>

          <div class="aplikasi-box">
            Aplikasi: kantor, hotel, rumah sakit
          </div>

        </div>

      </div>

    </div>

    <!-- PRINSIP KERJA -->
    <div class="accordion">

      <button class="accordion-btn">
        ⚙️ Prinsip Kerja Sistem
      </button>

      <div class="accordion-content">

        <div class="materi-card">

          <div class="materi-header">

            <img src="img/system.png"
                 class="materi-icon"
                 onerror="this.style.display='none'">

            <div>
              <h2>Prinsip Kerja Sistem</h2>

              <div class="materi-sub">
                Fire Alarm System
              </div>
            </div>

          </div>

          <ol class="materi-list">
            <li>Sensor mendeteksi gejala kebakaran</li>
            <li>Sinyal dikirim ke Fire Alarm Control Panel</li>
            <li>Panel mengaktifkan alarm suara & lampu</li>
            <li>Sistem lanjutan bekerja (sprinkler, damper, dll)</li>
          </ol>

        </div>

      </div>

    </div>

    <!-- RUMUS -->
    <div class="accordion">

      <button class="accordion-btn">
        📐 Rumus Perhitungan
      </button>

      <div class="accordion-content">

        <div class="materi-card">

          <div class="materi-header">

            <img src="img/calculator.png"
                 class="materi-icon"
                 onerror="this.style.display='none'">

            <div>
              <h2>Rumus Perhitungan</h2>

              <div class="materi-sub">
                SNI 03-3985-2000
              </div>
            </div>

          </div>

          <p>
            Perhitungan jumlah fire detector mengacu pada 
            jarak maksimum pemasangan detector yang telah dikoreksi.
          </p>

          <div class="calc-step">

            <h4>Rumus Dasar</h4>

            <code>S = S₀ × F<sub>h</sub></code><br>
            <code>JDP = ⌈ P / S ⌉</code><br>
            <code>JDL = ⌈ L / S ⌉</code><br>
            <code>TJD = JDP × JDL</code><br>

          </div>

          <h4>Keterangan</h4>

          <ul>
            <li><b>P</b> = Panjang ruangan</li>
            <li><b>L</b> = Lebar ruangan</li>
            <li><b>S</b> = Jarak antar detector</li>
            <li><b>F<sub>h</sub></b> = Faktor tinggi langit-langit</li>
            <li><b>TJD</b> = Total jumlah detector</li>
          </ul>

        </div>

      </div>

    </div>

    <!-- TABEL -->
    <div class="accordion">

      <button class="accordion-btn">
        📊 Faktor Koreksi
      </button>

      <div class="accordion-content">

        <div class="materi-card">

          <div class="materi-header">

            <img src="img/table.png"
                 class="materi-icon"
                 onerror="this.style.display='none'">

            <div>
              <h2>Faktor Koreksi</h2>

              <div class="materi-sub">
                Tinggi Langit-langit
              </div>
            </div>

          </div>

          <table>
            <tr>
              <th>Tinggi (m)</th>
              <th>Faktor (%)</th>
              <th>Fh</th>
            </tr>

            <tr><td>0 – 3,0</td><td>100%</td><td>1,00</td></tr>
            <tr><td>3,0 – 3,6</td><td>91%</td><td>0,91</td></tr>
            <tr><td>3,6 – 4,2</td><td>84%</td><td>0,84</td></tr>
            <tr><td>4,2 – 4,8</td><td>77%</td><td>0,77</td></tr>
            <tr><td>4,8 – 5,4</td><td>71%</td><td>0,71</td></tr>
            <tr><td>5,4 – 6,0</td><td>64%</td><td>0,64</td></tr>
            <tr><td>6,0 – 6,7</td><td>58%</td><td>0,58</td></tr>
          </table>

        </div>

      </div>

    </div>

    <!-- CATATAN -->
    <div class="accordion">

      <button class="accordion-btn">
        📝 Catatan Penting
      </button>

      <div class="accordion-content">

        <div class="materi-card">

          <div class="materi-header">

            <img src="img/note.png"
                 class="materi-icon"
                 onerror="this.style.display='none'">

            <div>
              <h2>Catatan Penting</h2>

              <div class="materi-sub">
                Perhitungan Detector
              </div>
            </div>

          </div>

          <ul>
            <li>Pembulatan jumlah detector dilakukan ke atas</li>
            <li>Setiap ruangan minimal memiliki 1 detector</li>
            <li>Detector dapat ditempatkan di titik tengah ruangan</li>
            <li>Acuan sesuai SNI 03-3985-2000</li>
          </ul>

        </div>

      </div>

    </div>

  </div>

  `;

  // ACCORDION FUNCTION
  const accordionBtn =
  document.querySelectorAll('.accordion-btn');

  accordionBtn.forEach(btn => {

    btn.addEventListener('click', () => {

      const content =
      btn.nextElementSibling;

      if(content.style.maxHeight){

        content.style.maxHeight = null;

      } else {

        content.style.maxHeight =
        content.scrollHeight + "px";

      }

    });

  });

}

  // Render Regulation Page
 // REGULASI
if (type === 'regulasi') {

  area.innerHTML = `

  <div class="materi-wrapper">

    <!-- TITLE -->
    <h1 class="materi-title">
      Regulasi Fire Detector
    </h1>

    <p class="materi-intro">
      Regulasi berikut digunakan sebagai acuan dalam 
      perencanaan, pemasangan, dan pengujian sistem 
      deteksi serta alarm kebakaran.
    </p>

    <!-- SNI -->
    <div class="accordion">

      <button class="accordion-btn">
        📘 SNI 03-3985-2000
      </button>

      <div class="accordion-content">

        <div class="materi-card">

          <div class="materi-header">

            <img src="img/regulation.png"
                 class="materi-icon"
                 onerror="this.style.display='none'">

            <div>

              <h2>SNI 03-3985-2000</h2>

              <div class="materi-sub">
                Sistem Deteksi dan Alarm Kebakaran
              </div>

            </div>

          </div>

          <p>
            Tata cara perencanaan, pemasangan, dan pengujian 
            sistem deteksi dan alarm kebakaran sesuai standar nasional Indonesia.
          </p>

          <div style="margin:25px 0; text-align:center;">

            <a href="SNI 03-3985-2000, Fire Alarm.pdf"
               target="_blank"
               class="back"
               style="
               display:inline-block;
               margin-right:10px;
               text-decoration:none;
               ">

               📄 Buka PDF

            </a>

            <a href="SNI 03-3985-2000, Fire Alarm.pdf"
               download
               class="reset"
               style="
               display:inline-block;
               padding:12px 24px;
               border-radius:12px;
               text-decoration:none;
               ">

               ⬇ Download PDF

            </a>

          </div>

          <iframe 
            src="SNI 03-3985-2000, Fire Alarm.pdf"
            width="100%"
            height="600px"
            style="
            border:1px solid #ccc;
            border-radius:18px;
            background:white;
            ">
          </iframe>

        </div>

      </div>

    </div>

    <!-- NFPA -->
    <div class="accordion">

      <button class="accordion-btn">
        📙 NFPA 72-2019
      </button>

      <div class="accordion-content">

        <div class="materi-card">

          <div class="materi-header">

            <img src="img/regulation.png"
                 class="materi-icon"
                 onerror="this.style.display='none'">

            <div>

              <h2>NFPA 72-2019</h2>

              <div class="materi-sub">
                National Fire Alarm and Signaling Code
              </div>

            </div>

          </div>

          <p>
            Standar internasional mengenai sistem alarm kebakaran 
            dan sistem signaling untuk perlindungan bangunan.
          </p>

          <div style="margin:25px 0; text-align:center;">

            <a href="NFPA 72-2019.pdf"
               target="_blank"
               class="back"
               style="
               display:inline-block;
               margin-right:10px;
               text-decoration:none;
               ">

               📄 Buka PDF

            </a>

            <a href="NFPA 72-2019.pdf"
               download
               class="reset"
               style="
               display:inline-block;
               padding:12px 24px;
               border-radius:12px;
               text-decoration:none;
               ">

               ⬇ Download PDF

            </a>

          </div>

          <iframe 
            src="NFPA 72-2019.pdf"
            width="100%"
            height="600px"
            style="
            border:1px solid #ccc;
            border-radius:18px;
            background:white;
            ">
          </iframe>

        </div>

      </div>

    </div>

  </div>

  `;

  // ACCORDION FUNCTION
  const accordionBtn =
  document.querySelectorAll('.accordion-btn');

  accordionBtn.forEach(btn => {

    btn.addEventListener('click', () => {

      const content =
      btn.nextElementSibling;

      if(content.style.maxHeight){

        content.style.maxHeight = null;

      } else {

        content.style.maxHeight =
        content.scrollHeight + "px";

      }

    });

  });

}

  // Render Calculator Page
  if (type === 'kalkulator') {
    area.innerHTML = `
      <h2>Kalkulator Perhitungan Fire Detector</h2>

      <div class="form-group">
        <label for="p">Panjang Ruangan (M)</label>
        <input id="p" type="number" min="0" step="0.01">
      </div>

      <div class="form-group">
        <label for="l">Lebar Ruangan (M)</label>
        <input id="l" type="number" min="0" step="0.01">
      </div>

      <div class="form-group">
        <label for="t">Tinggi Langit-langit (M)</label>
        <input id="t" type="number" min="0" step="0.01">
      </div>

      <button class="calc" onclick="hitung()">Hitung</button>
      <button class="reset" onclick="resetForm()">Reset</button>

      <div id="hasil" class="result" style="display:none;"></div>

      <hr style="margin:40px 0">

      <h2>Rumus & Dasar Perhitungan (SNI 03-3985-2000)</h2>
      <div class="calc-layout">
        <div class="calc-left">
          <p>
            S = S₀ × Fₕ<br>
            JDP = ⌈P / S⌉<br>
            JDL = ⌈L / S⌉<br>
            TJD = JDP × JDL<br>
            D = 0,7 × S
          </p>
          <h3>Keterangan</h3>
          <ul style="text-align:left; line-height:1.6">
            <li><b>P</b> = Panjang ruangan (m)</li>
            <li><b>L</b> = Lebar ruangan (m)</li>
            <li><b>S</b> = Jarak maksimum antar detektor</li>
            <li><b>F<sub>h</sub></b> = Faktor tinggi langit-langit</li>
            <li><b>D</b> = Jarak maksimum Penempatan detektor ke dinding</li>
            <li><b>S₀</b> = Jarak standar SNI</li>
          </ul>
        </div>
        <div class="calc-right">
          <table>
            <tr><th>Tinggi (m)</th><th>Faktor (%)</th></tr>
            <tr><td>0 – 3,0</td><td>100</td></tr>
            <tr><td>3,0 – 3,6</td><td>91</td></tr>
            <tr><td>3,6 – 4,2</td><td>84</td></tr>
            <tr><td>4,2 – 4,8</td><td>77</td></tr>
            <tr><td>4,8 – 5,4</td><td>71</td></tr>
            <tr><td>5,4 – 6,0</td><td>64</td></tr>
            <tr><td>6,0 – 6,7</td><td>58</td></tr>
            <tr><td>6,7 – 7,3</td><td>52</td></tr>
            <tr><td>7,3 – 7,9</td><td>46</td></tr>
            <tr><td>7,9 – 8,5</td><td>40</td></tr>
            <tr><td>8,5 – 9,1</td><td>34</td></tr>
          </table>
        </div>
      </div>
    `;
  }
}

// Logic Function for Calculator
function hitung(isZooming) {
  const P = Number(document.getElementById("p").value);
  const L = Number(document.getElementById("l").value);
  const T = Number(document.getElementById("t").value);
  const hasil = document.getElementById("hasil");

  if (!P || !L || !T) {
    alert("Input tidak valid. Harap isi semua kolom.");
    return;
  }

  // Reset zoom to 1.0 only if this is a fresh calculation (not a zoom action)
  if (typeof isZooming !== 'boolean' || isZooming === false) {
    zoomLevel = 1.0;
  }

  /* === Faktor tinggi (SNI) === */
  let f =
    T <= 3 ? 1 :
    T <= 3.6 ? 0.91 :
    T <= 4.2 ? 0.84 :
    T <= 4.8 ? 0.77 :
    T <= 5.4 ? 0.71 :
    T <= 6 ? 0.64 :
    T <= 6.7 ? 0.58 :
    T <= 7.3 ? 0.52 :
    T <= 7.9 ? 0.46 :
    T <= 8.5 ? 0.40 : 0.34;

  /* === Jarak maksimum === */
  const Ss = 12 * f; // smoke
  const Sh = 7 * f; // heat

  const Ds = 0.7 * Ss;
  const Dh = 0.7 * Sh;

  /* === Proses pembagian === */
  const pSs = P / Ss;
  const lSs = L / Ss;

  const pSh = P / Sh;
  const lSh = L / Sh;

  /* === Pembulatan ke atas === */
  const jdpS = Math.ceil(pSs);
  const jdlS = Math.ceil(lSs);
  const totalSmoke = jdpS * jdlS;

  const jdpH = Math.ceil(pSh);
  const jdlH = Math.ceil(lSh);
  const totalHeat = jdpH * jdlH;

  /* === JARAK AKTUAL & OFFSET (UNIFORM LOGIC) === */
  const jarakAktualPs = P / (jdpS + 1);
  const jarakAktualLs = L / (jdlS + 1);
  const offsetPs = jarakAktualPs;
  const offsetLs = jarakAktualLs;

  const jarakAktualPh = P / (jdpH + 1);
  const jarakAktualLh = L / (jdlH + 1);
  const offsetPh = jarakAktualPh; 
  const offsetLh = jarakAktualLh;

  hasil.style.display = "block";
  hasil.innerHTML = `
  <h2>📊 Hasil Perhitungan</h2>

  <div class="calc-step">
    <h3>1️⃣ Faktor Tinggi Langit-langit</h3>
    <code>T = ${T} m → Fh = ${f}</code>
  </div>

  <div class="calc-step">
    <h3>2️⃣ Perhitungan Smoke Detector</h3>
    <code>P / S = ${P} / ${Ss.toFixed(2)} = ${pSs.toFixed(2)} → ⌈${pSs.toFixed(2)}⌉ = ${jdpS}</code><br>
    <code>L / S = ${L} / ${Ss.toFixed(2)} = ${lSs.toFixed(2)} → ⌈${lSs.toFixed(2)}⌉ = ${jdlS}</code><br>
    <b>Total Smoke Detector = ${jdpS} × ${jdlS} = ${totalSmoke} unit</b>
  </div>

  <div class="calc-step">
    <h3>3️⃣ Perhitungan Heat Detector</h3>
    <code>P / S = ${P} / ${Sh.toFixed(2)} = ${pSh.toFixed(2)} → ⌈${pSh.toFixed(2)}⌉ = ${jdpH}</code><br>
    <code>L / S = ${L} / ${Sh.toFixed(2)} = ${lSh.toFixed(2)} → ⌈${lSh.toFixed(2)}⌉ = ${jdlH}</code><br>
    <b>Total Heat Detector = ${jdpH} × ${jdlH} = ${totalHeat} unit</b>
  </div>

  <div class="calc-step">
    <h3>📐 Jarak Maksimum Antar Detektor</h3>
    <code>Smoke = 12 × ${f} = ${Ss.toFixed(2)} m</code><br>
    <code>Heat = 7 × ${f} = ${Sh.toFixed(2)} m</code>
  </div>

  <div class="calc-step">
    <h3>📐 Jarak Maksimum Penempatan Detektor ke Dinding</h3>
    <code>Smoke = 0,7 × ${Ss.toFixed(2)} = ${Ds.toFixed(2)} m</code><br>
    <code>Heat = 0,7 × ${Sh.toFixed(2)} = ${Dh.toFixed(2)} m</code>
  </div>

  <div class="calc-step">
    <h3>📏 Evaluasi Jarak Aktual Antar Detektor (Uniform)</h3>

    <p><b>Smoke Detector</b></p>
    <code>Jarak aktual arah Panjang = ${P} / (${jdpS}+1) = ${jarakAktualPs.toFixed(2)} m</code><br>
    <code>Jarak aktual arah Lebar = ${L} / (${jdlS}+1) = ${jarakAktualLs.toFixed(2)} m</code><br>
    <code>Offset ke dinding = ${offsetPs.toFixed(2)} m & ${offsetLs.toFixed(2)} m</code>

    <p style="margin-top:12px"><b>Heat Detector</b></p>
    <code>Jarak aktual arah Panjang = ${P} / (${jdpH}+1) = ${jarakAktualPh.toFixed(2)} m</code><br>
    <code>Jarak aktual arah Lebar = ${L} / (${jdlH}+1) = ${jarakAktualLh.toFixed(2)} m</code><br>
    <code>Offset ke dinding = ${offsetPh.toFixed(2)} m & ${offsetLh.toFixed(2)} m</code>
  </div>

  <div style="text-align:center; margin:20px 0;">
    <button onclick="updateZoom(0.2)" style="padding:5px 15px; margin:0 5px; cursor:pointer;">➕ Zoom In</button>
    <button onclick="updateZoom(-0.2)" style="padding:5px 15px; margin:0 5px; cursor:pointer;">➖ Zoom Out</button>
    <span style="font-size:12px; color:#666; margin-left:10px;">Zoom: ${(zoomLevel * 100).toFixed(0)}%</span>
  </div>

  <p> 🔴 Smoke Detector - 🔵 Heat Detector </p>
  <h3>Visual Grid Berdasarkan Jarak Maksimum (SNI)</h3>
  <canvas id="canvasSNI" width="600" height="400" style="border:1px solid #ccc;border-radius:12px;background:#fafafa;margin-bottom:30px"></canvas>

  <h3>Visual Pengambilan Titik Tengah Ruangan (Uniform)</h3>
  <canvas id="canvasTengah" width="600" height="400" style="border:1px solid #ccc;border-radius:12px;background:#fdfdfd"></canvas>
  `;

  // Draw Visualizations
  drawCanvasSNI(P, L, jdpS, jdlS, jdpH, jdlH, Ss, Sh);
  drawCanvasTengah(P, L, jdpS, jdlS, jdpH, jdlH);
}

// Function to handle Zoom clicks
function updateZoom(change) {
  zoomLevel += change;
  if (zoomLevel < 0.2) zoomLevel = 0.2;
  if (zoomLevel > 5.0) zoomLevel = 5.0;
  hitung(true);
}

// Helper: Draw SNI Visual
function drawCanvasSNI(P, L, jdpS, jdlS, jdpH, jdlH, Ss, Sh) {
  const canvasSNI = document.getElementById("canvasSNI");
  if (!canvasSNI) return;

  const ctx = canvasSNI.getContext("2d");
  const cw = canvasSNI.width;
  const ch = canvasSNI.height;
  ctx.clearRect(0, 0, cw, ch);

  const pad = 50;

  // Scaling
  const availW = cw - 2 * pad;
  const availH = ch - 2 * pad;
  const scaleX = availW / P;
  const scaleY = availH / L;
  const scale = Math.min(scaleX, scaleY) * zoomLevel;

  const rw = P * scale;
  const rh = L * scale;
  const startX = (cw - rw) / 2;
  const startY = (ch - rh) / 2;

  // Ruangan (Black Box Outline)
  ctx.strokeStyle = "#111";
  ctx.lineWidth = 2;
  ctx.strokeRect(startX, startY, rw, rh);

  // === NEW: Room Outer Labels (Panjang & Lebar) ===
  ctx.fillStyle = "#111";
  ctx.font = "bold 13px Arial";
  
  // Label Atas (Panjang)
  ctx.textAlign = "center";
  ctx.fillText(`${P} m`, startX + rw / 2, startY - 10);

  // Label Kiri (Lebar) - Rotated 90 degrees
  ctx.save();
  ctx.translate(startX - 15, startY + rh / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = "center";
  ctx.fillText(`${L} m`, 0, 0);
  ctx.restore();
  // ===============================================

  // Grid Points
  // 1. Smoke
  const startPs = (0.7 * Ss) * scale;
  const spacePs = Ss * scale;

  ctx.fillStyle = "#e63946";
  for (let i = 0; i < jdpS; i++) {
    for (let j = 0; j < jdlS; j++) {
      const x = startX + startPs + (i * spacePs);
      const y = startY + startPs + (j * spacePs);
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 2. Heat
  const startPh = (0.7 * Sh) * scale;
  const spacePh = Sh * scale;

  ctx.fillStyle = "#2563eb";
  for (let i = 0; i < jdpH; i++) {
    for (let j = 0; j < jdlH; j++) {
      const x = startX + startPh + (i * spacePh);
      const y = startY + startPh + (j * spacePh);
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Dimension Lines (Internal)
  // Smoke (Red)
  if (jdpS > 0 && jdlS > 0) {
    const dVal = (0.7 * Ss).toFixed(2);
    const fx = startX + startPs;
    const fy = startY + startPs;

    ctx.strokeStyle = "#e63946";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(startX, fy); ctx.lineTo(fx, fy); // Horz
    ctx.moveTo(fx, startY); ctx.lineTo(fx, fy); // Vert
    ctx.stroke();

    ctx.fillStyle = "#e63946";
    ctx.font = "bold 11px Arial";
    ctx.textAlign = "left";
    ctx.fillText(dVal + "m", startX + 5, fy - 4);
    ctx.fillText(dVal + "m", fx + 4, startY + 15);
  }

  // Heat (Blue)
  if (jdpH > 0 && jdlH > 0) {
    const dVal = (0.7 * Sh).toFixed(2);
    const fx = startX + startPh;
    const fy = startY + startPh;

    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(startX, fy); ctx.lineTo(fx, fy); 
    ctx.moveTo(fx, startY); ctx.lineTo(fx, fy); 
    ctx.stroke();

    ctx.fillStyle = "#2563eb";
    ctx.font = "bold 11px Arial";
    ctx.textAlign = "left";
    ctx.fillText(dVal + "m", startX + 5, fy + 12);
    ctx.fillText(dVal + "m", fx + 4, startY + 28); 
  }

  // Legend
  ctx.textAlign = "left";
  ctx.fillStyle = "#333";
  ctx.font = "12px Arial";
  //ctx.fillText("🔴 Smoke ", 20, 30);
  //ctx.fillText("🔵 Heat Detector", 220, 30);
}

// Helper: Draw Center Visual
function drawCanvasTengah(P, L, jdpS, jdlS, jdpH, jdlH) {
  const canvasT = document.getElementById("canvasTengah");
  if (!canvasT) return;

  const ctx = canvasT.getContext("2d");
  const cw = canvasT.width;
  const ch = canvasT.height;
  ctx.clearRect(0, 0, cw, ch);

  const pad = 50;

  // Scaling
  const availW = cw - 2 * pad;
  const availH = ch - 2 * pad;
  const scaleX = availW / P;
  const scaleY = availH / L;
  const scale = Math.min(scaleX, scaleY) * zoomLevel;

  const rw = P * scale;
  const rh = L * scale;
  const startX = (cw - rw) / 2;
  const startY = (ch - rh) / 2;

  // Ruangan
  ctx.strokeStyle = "#111";
  ctx.lineWidth = 2;
  ctx.strokeRect(startX, startY, rw, rh);

  // === NEW: Room Outer Labels (Panjang & Lebar) ===
  ctx.fillStyle = "#111";
  ctx.font = "bold 13px Arial";
  
  // Label Atas (Panjang)
  ctx.textAlign = "center";
  ctx.fillText(`${P} m`, startX + rw / 2, startY - 10);

  // Label Kiri (Lebar) - Rotated 90 degrees
  ctx.save();
  ctx.translate(startX - 15, startY + rh / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = "center";
  ctx.fillText(`${L} m`, 0, 0);
  ctx.restore();
  // ===============================================

  // Garis tengah
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = "#9ca3af";
  ctx.beginPath();
  ctx.moveTo(startX + rw / 2, startY);
  ctx.lineTo(startX + rw / 2, startY + rh);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(startX, startY + rh / 2);
  ctx.lineTo(startX + rw, startY + rh / 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Titik tengah
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(startX + rw / 2, startY + rh / 2, 4, 0, Math.PI * 2);
  ctx.fill();

  // Draw Uniform Points
  const gapPs = rw / (jdpS + 1);
  const gapLs = rh / (jdlS + 1);

  ctx.fillStyle = "#e63946";
  for (let i = 1; i <= jdpS; i++) {
    for (let j = 1; j <= jdlS; j++) {
      const x = startX + (gapPs * i);
      const y = startY + (gapLs * j);
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const gapPh = rw / (jdpH + 1);
  const gapLh = rh / (jdlH + 1);

  ctx.fillStyle = "#2563eb";
  for (let i = 1; i <= jdpH; i++) {
    for (let j = 1; j <= jdlH; j++) {
      const x = startX + (gapPh * i);
      const y = startY + (gapLh * j);
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Internal Dimension Lines
  // 1. Smoke (Red)
  if (jdpS > 0 && jdlS > 0) {
    const firstX = startX + gapPs;
    const firstY = startY + gapLs;
    const meterP = (P / (jdpS + 1)).toFixed(2);
    const meterL = (L / (jdlS + 1)).toFixed(2);

    ctx.strokeStyle = "#d63031"; 
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, firstY); ctx.lineTo(firstX, firstY);
    ctx.moveTo(firstX, startY); ctx.lineTo(firstX, firstY);
    ctx.stroke();

    ctx.fillStyle = "#d63031";
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "left";
    ctx.fillText(meterP + "m", startX + (gapPs / 2) - 10, firstY - 5);
    ctx.fillText(meterL + "m", firstX + 5, startY + (gapLs / 2));
  }

  // 2. Heat (Blue)
  if (jdpH > 0 && jdlH > 0) {
    const firstX = startX + gapPh;
    const firstY = startY + gapLh;
    const meterP = (P / (jdpH + 1)).toFixed(2);
    const meterL = (L / (jdlH + 1)).toFixed(2);

    ctx.strokeStyle = "#2563eb"; 
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, firstY); ctx.lineTo(firstX, firstY);
    ctx.moveTo(firstX, startY); ctx.lineTo(firstX, firstY);
    ctx.stroke();

    ctx.fillStyle = "#2563eb";
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "left";
    ctx.fillText(meterP + "m", startX + (gapPh / 2) - 10, firstY + 15);
    ctx.fillText(meterL + "m", firstX + 5, startY + (gapLh / 2) + 15);
  }

  ctx.textAlign = "left";
  ctx.fillStyle = "#333";
  ctx.font = "12px Arial";
  ctx.fillText(" ", 20, 30);
}

function resetForm() {
  document.getElementById("p").value = "";
  document.getElementById("l").value = "";
  document.getElementById("t").value = "";
  document.getElementById("hasil").style.display = "none";
  zoomLevel = 1.0;
}

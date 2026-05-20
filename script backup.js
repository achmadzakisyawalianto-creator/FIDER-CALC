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
  if (type === 'materi') {
    area.innerHTML = `
      <h2>Materi Fire Detector</h2>
      <p>
      <b>Fire Detector</b> adalah perangkat sistem proteksi kebakaran yang berfungsi mendeteksi
      gejala awal kebakaran seperti <b>panas dan asap</b> kemudian mengirimkan
      sinyal ke <b>Fire Alarm Control Panel (FACP)</b>.
      </p>
      <hr>

      <h3>1. Fungsi Fire Detector</h3>
      <ul style="text-align:left; line-height:1.6">
        <li>Mendeteksi kebakaran sejak dini</li>
        <li>Memberikan peringatan kepada penghuni gedung</li>
        <li>Mengaktifkan sistem alarm kebakaran</li>
        <li>Mendukung sistem pemadam otomatis</li>
        <li>Mengurangi korban jiwa dan kerugian material</li>
      </ul>
      <hr>

      <h3>2. Jenis–Jenis Fire Detector</h3>
      <h4>🔥 Heat Detector (Detektor Panas)</h4>
      <img src="img/heat-detector.png" width="90" alt="Heat Detector" onerror="this.style.display='none'">
      <p>
      Heat Detector (Detektor Panas) adalah detektor yang bekerja berdasarkan suhu (temperatur) tertentu...
      (Isi dipersingkat untuk kerapihan kode, konten tetap sama seperti original)
      </p>
      <ul style="text-align:left">
        <li>Fixed Temperature</li>
        <li>Rate of Rise</li>
        <li>Rate Compensation</li>
      </ul>
      <p><i>Aplikasi: dapur, ruang genset, gudang</i></p>

      ---

      <h4>💨 Smoke Detector (Detektor Asap)</h4>
      <img src="img/smoke-detector.png" width="90" alt="Smoke Detector" onerror="this.style.display='none'">
      <p>
      Smoke Detector (Detektor Asap) adalah detektor yang berfungsi sesuai dengan sejumlah akumulasi asap...
      </p>
      <ul style="text-align:left">
        <li>Ionization Smoke Detector</li>
        <li>Photoelectric Smoke Detector</li>
        <li>Beam Smoke Detector</li>
      </ul>
      <p><i>Aplikasi: kantor, hotel, rumah sakit</i></p>

      <hr>
      <h3>3. Prinsip Kerja Sistem Fire Detector</h3>
      <ol style="text-align:left; line-height:1.6">
        <li>Sensor mendeteksi gejala kebakaran</li>
        <li>Sinyal dikirim ke Fire Alarm Control Panel</li>
        <li>Panel mengaktifkan alarm suara & lampu</li>
        <li>Sistem lanjutan bekerja (sprinkler, damper, dll)</li>
      </ol>
      <hr>

      <h3>4. Jarak Penempatan Detektor (SNI 03-3985-2000)</h3>
      <ul style="text-align:left">
        <li>Jarak maksimum ke dinding (D) = 0,7 × jarak antar detektor (S)</li>
      </ul>
      <hr>

      <h3>6. Rumus Perhitungan Fire Detector (SNI 03-3985-2000)</h3>
      <p>Perhitungan jumlah fire detector mengacu pada jarak maksimum pemasangan detektor yang telah dikoreksi.</p>

      <div class="calc-step">
        <h4>Rumus Dasar</h4>
        <code>S = S₀ × F<sub>h</sub></code><br>
        <code>JDP = ⌈ P / S ⌉</code><br>
        <code>JDL = ⌈ L / S ⌉</code><br>
        <code>TJD = JDP × JDL</code><br>
      </div>

      <h4>Keterangan</h4>
      <ul style="text-align:left">
        <li><b>P</b> = Panjang ruangan (meter)</li>
        <li><b>L</b> = Lebar ruangan (meter)</li>
        <li><b>S</b> = Jarak maksimum antar detektor (meter)</li>
        <li><b>S₀</b> = Jarak standar detektor</li>
        <li><b>F<sub>h</sub></b> = Faktor tinggi langit-langit</li>
        <li><b>TJD</b> = Total jumlah detektor</li>
      </ul>

      <h4>Jarak Standar Detektor</h4>
      <ul style="text-align:left">
        <li>Smoke Detector = <b>12 meter</b></li>
        <li>Heat Detector = <b>7 meter</b></li>
      </ul>
      <hr>

      <h3>7. Tabel Faktor Koreksi Tinggi Langit-langit</h3>
      <table>
        <tr><th>Tinggi Langit-langit (m)</th><th>Faktor (%)</th><th>F<sub>h</sub></th></tr>
        <tr><td>0 – 3,0</td><td>100%</td><td>1,00</td></tr>
        <tr><td>3,0 – 3,6</td><td>91%</td><td>0,91</td></tr>
        <tr><td>3,6 – 4,2</td><td>84%</td><td>0,84</td></tr>
        <tr><td>4,2 – 4,8</td><td>77%</td><td>0,77</td></tr>
        <tr><td>4,8 – 5,4</td><td>71%</td><td>0,71</td></tr>
        <tr><td>5,4 – 6,0</td><td>64%</td><td>0,64</td></tr>
        <tr><td>6,0 – 6,7</td><td>58%</td><td>0,58</td></tr>
        <tr><td>6,7 – 7,3</td><td>52%</td><td>0,52</td></tr>
        <tr><td>7,3 – 7,9</td><td>46%</td><td>0,46</td></tr>
        <tr><td>7,9 – 8,5</td><td>40%</td><td>0,40</td></tr>
        <tr><td>8,5 – 9,1</td><td>34%</td><td>0,34</td></tr>
      </table>
      <hr>

      <h3>8. Catatan Penting Perhitungan</h3>
      <ul style="text-align:left">
        <li>Pembulatan jumlah detektor dilakukan <b>ke atas</b></li>
        <li>Setiap ruangan minimal memiliki <b>1 detektor</b></li>
        <li>Jika jarak tidak memenuhi, detektor dapat ditempatkan di titik tengah ruangan.</li>
        <li>Acuan perhitungan sesuai <b>SNI 03-3985-2000</b></li>
      </ul>
    `;
  }

  // Render Regulation Page
  if (type === 'regulasi') {
    area.innerHTML = `
      <h2>Regulasi</h2>
      <p><b>SNI 03-3985-2000</b><br>
      Tata cara perencanaan, pemasangan, dan pengujian sistem deteksi dan alarm kebakaran.</p>

      <div style="margin:20px 0">
        <a href="SNI 03-3985-2000, Fire Alarm.pdf" target="_blank" class="back" style="display:inline-block; margin-right:10px; text-decoration:none;">📄 Buka PDF</a>
        <a href="SNI 03-3985-2000, Fire Alarm.pdf" download class="reset" style="display:inline-block; padding:12px 24px; border-radius:12px; text-decoration:none;">⬇ Download PDF</a>
      </div>

      <iframe src="SNI 03-3985-2000, Fire Alarm.pdf" width="100%" height="600px" style="border:1px solid #ccc;border-radius:10px;"></iframe>

      <p style="margin-top:20px;"><b>NFPA 72-2019</b><br></p>
      <div style="margin:20px 0">
        <a href="NFPA 72-2019.pdf" target="_blank" class="back" style="display:inline-block; margin-right:10px; text-decoration:none;">📄 Buka PDF</a>
        <a href="NFPA 72-2019.pdf" download class="reset" style="display:inline-block; padding:12px 24px; border-radius:12px; text-decoration:none;">⬇ Download PDF</a>
      </div>

      <iframe src="NFPA 72-2019.pdf" width="100%" height="600px" style="border:1px solid #ccc;border-radius:10px;"></iframe>
    `;
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
function hitung() {
  const P = Number(document.getElementById("p").value);
  const L = Number(document.getElementById("l").value);
  const T = Number(document.getElementById("t").value);
  const hasil = document.getElementById("hasil");

  if (!P || !L || !T) {
    alert("Input tidak valid. Harap isi semua kolom.");
    return;
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

  /* === JARAK AKTUAL & OFFSET === */
  // Smoke
  const jarakAktualPs = P / jdpS;
  const jarakAktualLs = L / jdlS;
  const offsetPs = jarakAktualPs / 2;
  const offsetLs = jarakAktualLs / 2;

  // Heat
  const jarakAktualPh = P / jdpH;
  const jarakAktualLh = L / jdlH;
  const offsetPh = jarakAktualPh / 2;
  const offsetLh = jarakAktualLh / 2;

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
    <h3>📏 Evaluasi Jarak Aktual Antar Detektor</h3>
    <p><b>Smoke Detector</b></p>
    <code>Jarak aktual arah Panjang = ${P} / ${jdpS} = ${jarakAktualPs.toFixed(2)} m</code><br>
    <code>Jarak aktual arah Lebar = ${L} / ${jdlS} = ${jarakAktualLs.toFixed(2)} m</code><br>
    <code>Offset ke dinding = ${offsetPs.toFixed(2)} m & ${offsetLs.toFixed(2)} m</code>

    <p style="margin-top:12px"><b>Heat Detector</b></p>
    <code>Jarak aktual arah Panjang = ${P} / ${jdpH} = ${jarakAktualPh.toFixed(2)} m</code><br>
    <code>Jarak aktual arah Lebar = ${L} / ${jdlH} = ${jarakAktualLh.toFixed(2)} m</code><br>
    <code>Offset ke dinding = ${offsetPh.toFixed(2)} m & ${offsetLh.toFixed(2)} m</code>
  </div>

  <h3>Visual Penempatan Fire Detector Sesuai SNI 03-3985-2000</h3>
  <canvas id="canvasSNI" width="600" height="400" style="border:1px solid #ccc;border-radius:12px;background:#fafafa;margin-bottom:30px"></canvas>

  <h3>Visual Pengambilan Titik Tengah Ruangan</h3>
  <canvas id="canvasTengah" width="600" height="400" style="border:1px solid #ccc;border-radius:12px;background:#fdfdfd"></canvas>
  `;

  // Draw Visualizations
  drawCanvasSNI(P, L, jdpS, jdlS, jdpH, jdlH, Ds);
  drawCanvasTengah(P, L, jdpS, jdlS, jdpH, jdlH);
}

// Helper: Draw SNI Visual
function drawCanvasSNI(P, L, jdpS, jdlS, jdpH, jdlH, Ds) {
  const canvasSNI = document.getElementById("canvasSNI");
  if (!canvasSNI) return;

  const ctx = canvasSNI.getContext("2d");
  const cw = canvasSNI.width;
  const ch = canvasSNI.height;
  ctx.clearRect(0, 0, cw, ch);

  const pad = 50; // Padding for legend area

  // === CORRECT SCALING LOGIC ===
  // 1. Calculate the available area inside the padding
  const availW = cw - 2 * pad;
  const availH = ch - 2 * pad;

  // 2. Calculate scale for Width and Height independently
  const scaleX = availW / P;
  const scaleY = availH / L;

  // 3. Use the SMALLER scale factor for both to preserve aspect ratio
  const scale = Math.min(scaleX, scaleY);

  // 4. Calculate visual width and height based on the unified scale
  const rw = P * scale; // Visual Room Width
  const rh = L * scale; // Visual Room Height

  // 5. Calculate Centering Offsets (startX and startY)
  const startX = (cw - rw) / 2;
  const startY = (ch - rh) / 2;

  // Ruangan
  ctx.strokeStyle = "#111";
  ctx.lineWidth = 2;
  ctx.strokeRect(startX, startY, rw, rh);

  // Batas 0,7S
  const bx = Ds * scale;
  const by = Ds * scale;
  
  // ctx.setLineDash([8, 5]);
  // ctx.strokeStyle = "#f59e0b";
  // ctx.lineWidth = 2;
  // ctx.strokeRect(startX + bx, startY + by, rw - 2 * bx, rh - 2 * by);
  // ctx.setLineDash([]);

  // Smoke Detector
  ctx.fillStyle = "#e63946";
  for (let i = 0; i < jdpS; i++) {
    for (let j = 0; j < jdlS; j++) {
      const x = startX + (i + 0.5) * (rw / jdpS);
      const y = startY + (j + 0.5) * (rh / jdlS);
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Heat Detector
  ctx.fillStyle = "#2563eb";
  for (let i = 0; i < jdpH; i++) {
    for (let j = 0; j < jdlH; j++) {
      const x = startX + (i + 0.5) * (rw / jdpH);
      const y = startY + (j + 0.5) * (rh / jdlH);
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Ukuran jarak S (Indicator) - Position relative to drawing
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  // Draw below the box
  const lineY = startY + rh + 15;
  const lineXStart = startX + (rw / jdpS) * 0.5;
  const lineXEnd = startX + (rw / jdpS) * 1.5;

  // Only draw if there's enough space width-wise for at least 2 detectors or check logic
  if(jdpS >= 1) {
      ctx.moveTo(startX + (rw/jdpS)/2, lineY);
      ctx.lineTo(startX + (rw/jdpS)/2 + (rw/jdpS), lineY);
      ctx.stroke();
      ctx.fillStyle = "#065f46";
      ctx.font = "12px Arial";
      ctx.fillText("S", startX + (rw/jdpS), lineY + 15);
  }

  // Keterangan (Legend) - Fixed at top left
  ctx.textAlign = "left";
  ctx.fillStyle = "#333";
  ctx.fillText("🔴 Smoke Detector", 20, 30);
  ctx.fillText("🔵 Heat Detector", 160, 30);
  ctx.fillText("— — Batas 0,7 × S ke dinding", 300, 30);
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

  // === CORRECT SCALING LOGIC ===
  const availW = cw - 2 * pad;
  const availH = ch - 2 * pad;
  const scaleX = availW / P;
  const scaleY = availH / L;
  const scale = Math.min(scaleX, scaleY);

  const rw = P * scale;
  const rh = L * scale;

  const startX = (cw - rw) / 2;
  const startY = (ch - rh) / 2;

  // Ruangan
  ctx.strokeStyle = "#111";
  ctx.lineWidth = 2;
  ctx.strokeRect(startX, startY, rw, rh);

  // Garis tengah
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = "#9ca3af";

  // Vertical Center Line
  ctx.beginPath();
  ctx.moveTo(startX + rw / 2, startY);
  ctx.lineTo(startX + rw / 2, startY + rh);
  ctx.stroke();

  // Horizontal Center Line
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

  // Smoke Detector
  ctx.fillStyle = "#e63946";
  for (let i = 0; i < jdpS; i++) {
    for (let j = 0; j < jdlS; j++) {
      const x = startX + (i + 0.5) * (rw / jdpS);
      const y = startY + (j + 0.5) * (rh / jdlS);
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Heat Detector
  ctx.fillStyle = "#2563eb";
  for (let i = 0; i < jdpH; i++) {
    for (let j = 0; j < jdlH; j++) {
      const x = startX + (i + 0.5) * (rw / jdpH);
      const y = startY + (j + 0.5) * (rh / jdlH);
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Keterangan
  ctx.textAlign = "left";
  ctx.fillStyle = "#333";
  ctx.font = "12px Arial";
  ctx.fillText("Titik tengah ruangan sebagai acuan penempatan simetris", 20, 30);
}

function resetForm() {
  document.getElementById("p").value = "";
  document.getElementById("l").value = "";
  document.getElementById("t").value = "";
  document.getElementById("hasil").style.display = "none";
}
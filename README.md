# 🌱 Atlas Karbon Kelas - CO₂ Calculator

Aplikasi web modern untuk menghitung emisi CO₂ yang diserap oleh pohon, terinspirasi dari program Atlas Karbon Kelas X1 SMAN 4 Mataram.

## 📋 Fitur Utama

✨ **Fitur-Fitur:**
- 📊 Kalkulator CO₂ interaktif berdasarkan lingkar pohon
- 🌳 Data 8 pohon asli dengan detail lengkap (Manggga, Mahoni, Sengon, Pucuk Merah, Sawo, Palem, Manggis, Cemara)
- 📈 Visualisasi data dengan grafik Chart.js
- 🎨 Design modern dan menarik dengan tema hijau
- 📱 Responsive design untuk semua perangkat
- 🔄 Kalkulasi real-time dengan formula dendrometri
- 🎯 Perbandingan dengan emisi mobil (km perjalanan)

## 🚀 Teknologi

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Chart Library:** Chart.js 4.x
- **Icons:** Font Awesome 6.4
- **Design:** Modern CSS Grid & Flexbox
- **Formula:** Standar Dendrometri (D = Lingkar ÷ 3,14; CO₂ = Diameter × 2,2)

## 📦 Struktur File

```
CO2/
├── index.html       # File HTML utama
├── styles.css       # Styling CSS modern
├── script.js        # Logika JavaScript
└── README.md        # File dokumentasi (ini)
```

## 🔧 Cara Menggunakan

### 1. **Setup Lokal**
```bash
# Clone atau download repository
cd CO2

# Buka di browser
# Buka file index.html langsung di browser atau gunakan live server
```

### 2. **Cara Kerja Aplikasi**

#### Menggunakan Kalkulator:
1. Pilih jenis pohon dari dropdown (opsional)
2. Masukkan lingkar pohon dalam cm
3. Masukkan jumlah pohon (default: 1)
4. Klik tombol "Hitung CO₂"
5. Lihat hasil perhitungan dan perbandingan emisi

#### Melihat Data Pohon:
- Scroll ke bawah untuk melihat kartu 8 pohon asli
- Klik pada kartu pohon untuk memilih di kalkulator
- Lihat detail lengkap setiap pohon

#### Visualisasi Statistik:
- Lihat grafik bar chart perbandingan CO₂ 8 pohon
- Stat card menampilkan total, rata-rata, dan pohon terbesar

## 📐 Rumus Perhitungan

### Diameter Pohon
```
Diameter = Lingkar ÷ 3,14
```
*Lingkar dalam cm, Diameter dalam cm*

### Serapan CO₂
```
Serapan CO₂ = Diameter × 2,2
```
*Serapan dalam kg CO₂ per tahun*

## 🌳 Data 8 Pohon Asli

| No. | Pohon | Lingkar | Diameter | Serapan CO₂ | Lokasi |
|-----|-------|---------|----------|-------------|--------|
| 1 | 🥭 Manggga | 95 cm | 30,3 cm | 66,5 kg | Pohon Buah - Lokal |
| 2 | 🌳 Mahoni | 120 cm | 38,2 cm | 84,0 kg | Pohon Keras - Kayu |
| 3 | 🌲 Sengon | 150 cm | 47,8 cm | **105,1 kg** ⭐ | Tanaman Hias - Merah |
| 4 | 🌱 Pucuk Merah | 65 cm | 20,7 cm | 45,5 kg | Tanaman Hias - Merah |
| 5 | 🥝 Sawo | 85 cm | 27,1 cm | 59,5 kg | Pohon Buah - Lokal |
| 6 | 🌴 Palem | 70 cm | 22,3 cm | 49,1 kg | Pohon Hias - Pekarangan |
| 7 | 🍇 Manggis | 80 cm | 25,5 cm | 56,1 kg | Pohon Buah - Lokal |
| 8 | 🎄 Cemara | 110 cm | 35,0 cm | 77,0 kg | Pohon Konifer - Pelindung |

**TOTAL SERAPAN CO₂: 542,8 kg CO₂/tahun** 🌍

## 🎨 Fitur Design

### Warna Tema
- **Primary:** #2d6a4f (Hijau Tua)
- **Secondary:** #40916c (Hijau Sedang)
- **Accent:** #52b788 (Hijau Terang)
- **Light Background:** #d8f3dc

### Komponen UI
- Gradient backgrounds untuk visual menarik
- Smooth animations dan transitions
- Hover effects yang responsif
- Icons dari Font Awesome
- Responsive grid layout

### Responsive Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Extra Small: < 480px

## 📊 Kalkulasi Real-Time

Aplikasi menghitung secara real-time:
- ✅ Diameter berdasarkan lingkar input
- ✅ Serapan CO₂ per pohon
- ✅ Total serapan CO₂ (berdasarkan jumlah pohon)
- ✅ Perbandingan dengan emisi mobil (~227g CO₂ per km)

## 🌍 Konversi Emisi Mobil

```
Total CO₂ (kg) × 1000 ÷ 227 = km perjalanan mobil bensin
```
Contoh: Pohon yang menyerap 66,5 kg CO₂ setara dengan menyerap polusi dari ~292 km perjalanan mobil

## 🔗 Deployment

### Deploy ke GitHub Pages
```bash
# 1. Buat repository baru di GitHub
# 2. Clone ke lokal
# 3. Copy file project ke folder
# 4. Push ke GitHub
git add .
git commit -m "Initial commit: CO2 Calculator aplikasi"
git push origin main

# 5. Enable GitHub Pages di Settings > Pages
# Pilih "Deploy from a branch" dan master/main branch
```

### Deploy ke Hosting Lain
- **Netlify:** Drag & drop folder
- **Vercel:** Connect GitHub repository
- **Heroku:** Push via Git
- **Apache/Nginx:** Upload files ke public_html

## 📱 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🔐 Privacy & Security

- ✅ Tidak ada data yang dikirim ke server
- ✅ Semua perhitungan dilakukan di browser client
- ✅ Tidak perlu login atau registrasi
- ✅ 100% offline compatible

## 📚 Referensi

### Sumber Data
- **Program:** Atlas Karbon Kelas X1 - SMAN 4 Mataram
- **Inventor:** Emiliyati, S.Pd., M.Si.
- **Tahun:** 2024 (Data Inventarisasi Oktober 2024)
- **Standard:** Dendrometri (pengukuran pohon)

### Rumus Referensi
- Lingkar pohon → Diameter: Lingkar ÷ π (3,14)
- Diameter → Serapan CO₂: Diameter × 2,2 kg/tahun

## 🎓 Edukasi

Aplikasi ini mendukung program:
- 📚 **Adiwiyata** SMAN 4 Mataram
- 🌱 **Go Green** - Peduli Lingkungan
- ⚡ **Hemat Energi** - Sustainability
- 🔄 **Penghijauan** - Program Sekolah

## 🤝 Kontribusi

Untuk berkontribusi:
1. Fork repository
2. Buat branch fitur (`git checkout -b feature/improvement`)
3. Commit perubahan (`git commit -m 'Add improvement'`)
4. Push ke branch (`git push origin feature/improvement`)
5. Buat Pull Request

## 📝 Lisensi

MIT License - Bebas digunakan untuk keperluan komersial maupun non-komersial

## 👥 Kredit

- **Desain & Development:** Kiro AI
- **Konsep & Data:** Program Atlas Karbon Kelas X1 SMAN 4 Mataram
- **Inventor:** Emiliyati, S.Pd., M.Si.
- **Sekolah:** SMAN 4 Mataram

## 📞 Kontak & Support

Untuk pertanyaan atau saran:
- 🐛 Report bug via GitHub Issues
- 💡 Saran fitur via GitHub Discussions
- 📧 Email untuk kontribusi lebih lanjut

---

**Terakhir diupdate:** September 2024  
**Versi:** 1.0.0  
**Status:** Production Ready ✅

🌍 **Mari bersama menjaga Bumi dengan program penghijauan!** 🌱

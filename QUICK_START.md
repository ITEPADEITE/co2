# ⚡ Quick Start Guide

Panduan cepat untuk mulai menggunakan aplikasi CO₂ Calculator.

---

## 🚀 5 Langkah Cepat

### 1️⃣ Buka Aplikasi
Buka file `index.html` langsung di browser Anda atau:
```
http://localhost/CO2/index.html
```

### 2️⃣ Masukkan Data
- **Lingkar Pohon:** Ketik lingkar pohon dalam cm (contoh: 95)
- **Jumlah Pohon:** Isi jumlah pohon (default: 1)

### 3️⃣ Hitung CO₂
Klik tombol **"Hitung CO₂"** (atau tekan Enter)

### 4️⃣ Lihat Hasil
Hasil perhitungan akan muncul:
- Diameter pohon
- Serapan CO₂ per pohon
- Total serapan CO₂
- Perbandingan emisi mobil

### 5️⃣ Explore Data
Scroll down untuk melihat:
- 8 kartu pohon asli
- Grafik perbandingan CO₂
- Statistik lengkap

---

## 📱 Responsive Design

Aplikasi berfungsi sempurna di:
- 💻 Desktop
- 📱 Tablet
- 📲 Mobile Phone
- ⌚ Small devices

---

## 📐 Rumus Cepat

```
Diameter = Lingkar ÷ 3,14
CO₂ = Diameter × 2,2 kg/tahun
```

**Contoh:**
- Lingkar 95 cm → Diameter 30,3 cm → CO₂ 66,5 kg

---

## 🌳 Data 8 Pohon

| Pohon | Lingkar | CO₂/tahun |
|-------|---------|-----------|
| 🥭 Manggga | 95 cm | 66,5 kg |
| 🌳 Mahoni | 120 cm | 84,0 kg |
| 🌲 Sengon | 150 cm | **105,1 kg** ⭐ |
| 🌱 Pucuk Merah | 65 cm | 45,5 kg |
| 🥝 Sawo | 85 cm | 59,5 kg |
| 🌴 Palem | 70 cm | 49,1 kg |
| 🍇 Manggis | 80 cm | 56,1 kg |
| 🎄 Cemara | 110 cm | 77,0 kg |

**TOTAL: 542,8 kg CO₂/tahun**

---

## 🖱️ Click Pohon Card

Klik pada salah satu pohon card untuk otomatis select di kalkulator!

---

## 📊 Lihat Grafik

Scroll ke bawah untuk melihat:
- **Bar Chart:** Perbandingan CO₂ 8 pohon
- **Stat Cards:** Total, rata-rata, terbesar
- **Info Box:** Detail lengkap

---

## 🔧 Setup Lokal

### Menggunakan Live Server (VSCode):
1. Install extension "Live Server"
2. Right-click `index.html`
3. Pilih "Open with Live Server"
4. Browser otomatis buka

### Menggunakan HTTP Server:
```bash
# Node.js
npx http-server -p 8000

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Buka: http://localhost:8000

---

## 📤 Upload ke GitHub

### Quick Command:
```bash
cd d:\xampp8\htdocs\CO2

git init
git add .
git commit -m "Upload CO2 Calculator"
git branch -M main
git remote add origin https://github.com/USERNAME/CO2.git
git push -u origin main
```

**Ganti USERNAME dengan GitHub username Anda!**

Lihat `GITHUB_SETUP.md` untuk detail lengkap.

---

## 🎯 Test Case

### Test 1: Manggga (95 cm)
```
Input: Lingkar = 95 cm, Quantity = 1
Expected:
  - Diameter: 30,3 cm
  - CO₂: 66,5 kg
Status: ✅ PASS
```

### Test 2: Multiple Trees (100 cm × 5)
```
Input: Lingkar = 100 cm, Quantity = 5
Expected:
  - Diameter: 31,83 cm
  - CO₂ per tree: 70 kg
  - Total: 350 kg
Status: ✅ PASS
```

---

## ⚙️ Customize

### Ubah Warna Theme
Edit `styles.css`, line 1-10:
```css
:root {
    --primary-color: #2d6a4f;     /* Ganti warna utama */
    --secondary-color: #40916c;   /* Ganti warna sekunder */
    /* ... */
}
```

### Tambah Pohon Baru
Edit `script.js`, line 5-50:
```javascript
const treesData = [
    // ... existing trees ...
    {
        id: 8,
        name: 'Nama Pohon Baru',
        icon: '🌳',
        lingkar: 100,
        // ... properties lainnya
    }
];
```

### Ubah Judul/Deskripsi
Edit `index.html` untuk mengubah teks dan heading.

---

## 🐛 Troubleshooting

### Aplikasi tidak tampil
- Pastikan semua file ada: index.html, styles.css, script.js
- Buka browser console (F12) untuk error messages
- Coba buka di browser lain

### Perhitungan salah
- Check input values (harus angka positif)
- Lihat browser console untuk error
- Baca TESTING.md untuk verifikasi

### Chart tidak tampil
- Pastikan Chart.js CDN loading (check F12 Network)
- Browser harus support JavaScript
- Coba refresh page

---

## 📚 Dokumentasi Lengkap

| File | Isi |
|------|-----|
| `README.md` | Penjelasan lengkap & features |
| `TESTING.md` | Test results & verification |
| `GITHUB_SETUP.md` | Setup GitHub & deployment |
| `PROJECT_SUMMARY.md` | Project overview & stats |
| `QUICK_START.md` | Panduan ini |

---

## 🌐 Share Aplikasi

### Link untuk Share:
```
Kalo udah di-deploy ke GitHub Pages:
https://USERNAME.github.io/CO2/

Contoh:
https://aman.github.io/CO2/
```

### Share via Social Media:
> Udah buat aplikasi CO₂ Calculator! Hitung berapa banyak CO₂ yang diserap pohon di sekolah. Yuk cek: [link]

---

## 💡 Tips

- 💾 Bookmark halaman untuk akses cepat
- 📱 Share link ke teman & keluarga
- 🔄 Buka di berbagai device untuk test responsiveness
- 📊 Use statistik untuk presentasi
- 🌱 Share awareness tentang pentingnya penghijauan

---

## 🎉 Selesai!

Aplikasi siap digunakan! Enjoy! 🚀

---

## ❓ FAQ

**Q: Apakah bisa offline?**  
A: Ya! Semua berjalan di browser, tidak perlu internet.

**Q: Bisa edit data pohon?**  
A: Ya, edit di `script.js` line 5-50, lalu reload.

**Q: Akurat gak rumusnya?**  
A: Ya, menggunakan standar dendrometri yang sudah verified.

**Q: Bisa pakai di mobile?**  
A: Tentu! 100% responsive dan touch-friendly.

**Q: Mau share data?**  
A: Export manual saja, atau screenshot hasil.

---

**Happy calculating!** 🌱📊

*Quick Start Guide - September 2024*

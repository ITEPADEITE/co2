# 🚀 Panduan Deploy ke GitHub

Ikuti langkah-langkah di bawah untuk upload dan deploy aplikasi CO₂ Calculator ke GitHub Pages.

---

## 📋 Prasyarat

Pastikan Anda sudah memiliki:
- ✅ Akun GitHub (daftar gratis di https://github.com)
- ✅ Git terinstall di komputer Anda
- ✅ Terminal/Command Prompt/PowerShell

### Install Git (jika belum)
- **Windows:** Download dari https://git-scm.com/download/win
- **macOS:** `brew install git`
- **Linux:** `sudo apt-get install git`

---

## 🔧 Step 1: Setup Git di Lokal

Buka Terminal/PowerShell dan jalankan:

```bash
# Set global Git config (lakukan sekali saja)
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"

# Verifikasi
git config --global --list
```

---

## 📁 Step 2: Inisialisasi Git Repository Lokal

Masuk ke folder project:

```bash
# Windows (PowerShell)
cd d:\xampp8\htdocs\CO2

# atau Mac/Linux
cd /path/to/CO2
```

Inisialisasi git repository:

```bash
git init
git add .
git commit -m "Initial commit: CO2 Calculator aplikasi modern"
```

Verifikasi:
```bash
git log
```

---

## 🌐 Step 3: Buat Repository Baru di GitHub

1. **Login ke GitHub:** https://github.com/login
2. **Klik** tombol `+` di kanan atas → **New repository**
3. **Isi informasi:**
   - **Repository name:** `CO2` (atau nama lain sesuai keinginan)
   - **Description:** `Aplikasi web modern untuk menghitung emisi CO₂ yang diserap oleh pohon`
   - **Public:** ✓ (pilih Public agar bisa diakses siapa saja)
   - **Initialize this repository with:** JANGAN PILIH APA-APA (karena sudah ada di lokal)
   - **Add .gitignore:** None
   - **Add a license:** MIT License (opsional)

4. **Klik** tombol `Create repository`

GitHub akan menampilkan setup instructions.

---

## 🔗 Step 4: Connect Lokal Repository ke GitHub

Setelah membuat repository di GitHub, copy perintah berikut (sesuaikan dengan username Anda):

```bash
# Mengganti "origin" dengan remote GitHub
git remote add origin https://github.com/USERNAME/CO2.git

# Rename branch ke main (standar baru)
git branch -M main

# Push ke GitHub
git push -u origin main
```

**Ganti `USERNAME` dengan username GitHub Anda!**

---

## ✅ Step 5: Verifikasi Upload

1. Buka GitHub di browser: https://github.com/USERNAME/CO2
2. Verifikasi file sudah terupload:
   - ✓ index.html
   - ✓ styles.css
   - ✓ script.js
   - ✓ README.md
   - ✓ package.json
   - ✓ TESTING.md
   - ✓ .gitignore

---

## 🎯 Step 6: Enable GitHub Pages

Untuk deploy aplikasi agar bisa diakses via web:

1. **Masuk repository:** https://github.com/USERNAME/CO2
2. **Klik** tab `Settings` (di kanan atas)
3. **Di sidebar kiri,** cari dan klik `Pages`
4. **Di bagian "Source":**
   - **Branch:** Pilih `main`
   - **Folder:** Pilih `/ (root)`
   - **Klik** `Save`

GitHub akan menampilkan pesan:
```
Your site is live at https://USERNAME.github.io/CO2/
```

5. **Tunggu 1-2 menit** untuk deployment selesai
6. **Buka link** di browser untuk verifikasi

---

## 🌍 Live Link

Aplikasi Anda sekarang accessible di:

```
https://USERNAME.github.io/CO2/
```

**Contoh:**
- https://john-doe.github.io/CO2/
- https://sustainability-club.github.io/CO2/

---

## 📝 Step 7: Update README Dengan Live Link

Edit file `README.md` dan tambahkan link live:

```markdown
## 🌐 Live Demo

Akses aplikasi langsung di: **https://USERNAME.github.io/CO2/**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-green?style=for-the-badge)](https://USERNAME.github.io/CO2/)
```

Commit dan push:
```bash
git add README.md
git commit -m "Add live demo link"
git push origin main
```

---

## 🔄 Step 8: Update & Maintenance

### Membuat perubahan di lokal:

```bash
# Edit file sesuai kebutuhan
# Misalnya edit index.html, styles.css, dll

# Stage perubahan
git add .

# Commit dengan pesan deskriptif
git commit -m "Deskripsi perubahan yang dibuat"

# Push ke GitHub (auto deploy)
git push origin main
```

Perubahan akan otomatis ter-deploy ke GitHub Pages dalam hitungan detik!

---

## 🐛 Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/CO2.git
git push -u origin main
```

### Error: "Permission denied (publickey)"
Setup SSH key:
```bash
ssh-keygen -t ed25519 -C "email@anda.com"
# Follow prompts
cat ~/.ssh/id_ed25519.pub
# Copy dan paste key ke GitHub Settings > SSH Keys
```

### GitHub Pages tidak update
- Tunggu 1-2 menit untuk deployment
- Force refresh browser: `Ctrl + Shift + R`
- Cek branch di Settings > Pages harus `main`
- Cek file `index.html` ada di root folder

---

## 🎉 Alternative Hosting

Jika ingin host di platform lain:

### Netlify
```bash
# Connect Git repository
# Masuk ke https://netlify.com
# Klik "New site from Git"
# Pilih GitHub dan authorize
# Select CO2 repository
# Deploy!
```

### Vercel
```bash
# Masuk ke https://vercel.com
# Klik "Import Project"
# Paste GitHub repo URL
# Deploy otomatis!
```

### GitHub Pages (Recommended)
✅ Gratis  
✅ Simple  
✅ Fast  
✅ Integrated with Git  

---

## 📚 Resources

- Git Documentation: https://git-scm.com/doc
- GitHub Help: https://docs.github.com
- GitHub Pages Docs: https://pages.github.com
- Markdown Guide: https://www.markdownguide.org

---

## ✨ Tips & Best Practices

1. **Commit Messages:** Gunakan pesan yang deskriptif
   ```bash
   ❌ git commit -m "fix"
   ✅ git commit -m "Fix calculation formula for CO2 serapan"
   ```

2. **Frequent Commits:** Commit setelah setiap perubahan meaningful
   ```bash
   git commit -m "Add new tree species data"
   git commit -m "Improve responsive design for mobile"
   git commit -m "Update chart styling"
   ```

3. **Pull Before Push:** Jika collaborative
   ```bash
   git pull origin main
   git push origin main
   ```

4. **Branch untuk fitur besar:**
   ```bash
   git checkout -b feature/new-feature
   # Develop...
   git add .
   git commit -m "Add feature"
   git push origin feature/new-feature
   # Create Pull Request di GitHub
   ```

---

## 🎯 Next Steps

Setelah deploy:
- ✅ Share link ke teman/keluarga
- ✅ Post di social media
- ✅ Add ke portofolio/resume
- ✅ Continue development dengan fitur baru
- ✅ Collect feedback dari pengguna

---

**Happy Coding!** 🚀🌱

---

*Panduan ini dibuat oleh Kiro AI Assistant*  
*Terakhir update: September 2024*

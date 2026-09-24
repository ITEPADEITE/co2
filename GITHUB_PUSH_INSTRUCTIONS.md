# 📤 Upload ke GitHub - Panduan Lengkap

## ✅ Status Commit
- Commit sudah siap: `Fix: Kelompok 7 & 8 history not displaying`
- File yang di-update: `script.js`
- Perubahan: Error handling + logging untuk debug Kelompok 7 & 8

## 🔑 Langkah 1: Buat Personal Access Token di GitHub

1. **Buka GitHub Settings**
   - Pergi ke https://github.com/settings/personal-access-tokens/new
   - Atau: GitHub → Settings → Developer settings → Personal access tokens

2. **Isi form Token**
   - Token name: `CO2_PUSH_TOKEN` (atau nama apapun)
   - Expiration: 90 days (atau sesuai kebutuhan)

3. **Select scopes** - centang:
   - ✅ `repo` (full control of private repositories)
   - ✅ `workflow` (update GitHub Action workflows)

4. **Click "Generate token"**
   - Salin token yang muncul (format: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
   - **PENTING**: Jangan bagikan token ini ke siapapun!

## 🚀 Langkah 2: Push ke GitHub

### Opsi A: Menggunakan Terminal (Recommended)
```powershell
cd d:\xampp8\htdocs\CO2

# Ganti PERSONAL_ACCESS_TOKEN dengan token yang Anda copy
git push -u origin main --verbose
# Akan prompt untuk username: `YOUR_GITHUB_USERNAME`
# Dan password: paste token yang di-copy
```

### Opsi B: Menggunakan GitHub Desktop
1. Buka GitHub Desktop
2. Klik "File" → "Clone Repository..."
3. Pilih: `ITEPADEITE/co2`
4. Klik "Fetch origin"
5. Klik "Push to origin"

### Opsi C: Setup Git Credential Manager (Lebih Aman)
```powershell
git config --global credential.helper manager
git push -u origin main
# Akan pop-up dialog untuk login GitHub
# Pilih "Personal Access Token" dan paste token
```

## ⚠️ Troubleshooting

### Error: "fatal: 'origin' already configured"
```powershell
git remote set-url origin https://github.com/ITEPADEITE/co2.git
git push -u origin main
```

### Error: "HTTP 401 Unauthorized"
- Token sudah expire → buat token baru
- Token tidak memiliki scope `repo` → regenerate dengan scope `repo` ✅
- Token di-copy tidak lengkap → copy ulang dari GitHub

### Error: "LF will be replaced by CRLF"
Ini normal dan aman di Windows. Biarkan git melakukan auto-conversion.

## ✨ Setelah Push Berhasil

1. Cek di GitHub: https://github.com/ITEPADEITE/co2/commits/main
2. Verifikasi commit muncul dengan pesan: "Fix: Kelompok 7 & 8 history not displaying..."
3. **Test aplikasi di GitHub Pages** (jika sudah setup):
   - https://itepadeite.github.io/co2/

## 📝 Pesan Commit yang Dipush
```
Fix: Kelompok 7 & 8 history not displaying - Add error handling & better logging

- Fixed .toFixed() error when latitude/longitude are stored as strings
- Added try-catch blocks in calculateCO2, addRecord, and renderHistory
- Added console logging for debugging
- Changed imageData from storing base64 to always null (localStorage quota)
- Fixed parseFloat() for coordinate display

This should resolve the issue where Kelompok 7 & 8 data doesn't appear in riwayat.
```

---

## 🎯 Next Steps After Push

1. **Clear localStorage & Test Aplikasi**
   - Buka http://localhost:8000
   - Tekan F12 → Application → localStorage → Delete All
   - Input Kelompok 7 & 8 data
   - Lihat apakah muncul di riwayat

2. **Enable GitHub Pages** (untuk deploy live)
   - GitHub → Settings → Pages
   - Source: `main branch / root`
   - Klik Save
   - App akan tersedia di: https://itepadeite.github.io/co2/

3. **Monitoring Issues**
   - Buka https://github.com/ITEPADEITE/co2/issues
   - Create issue jika ada bug baru

---

**Butuh bantuan?** Cek error message di step push dan lapor hasilnya! 🚀

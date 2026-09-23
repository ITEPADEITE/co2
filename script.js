// ===== Data 8 Pohon Asli =====
const treesData = [
    {
        id: 0,
        name: 'Manggga',
        icon: '🥭',
        lingkar: 95,
        diameter: 30.3,
        co2: 66.5,
        location: 'Pohon Buah - Lokal',
        notes: 'Pohon Buah',
        color: '#FF6B6B'
    },
    {
        id: 1,
        name: 'Mahoni',
        icon: '🌳',
        lingkar: 120,
        diameter: 38.2,
        co2: 84.0,
        location: 'Pohon Keras - Kayu',
        notes: 'Pohon Keras',
        color: '#4ECDC4'
    },
    {
        id: 2,
        name: 'Sengon',
        icon: '🌲',
        lingkar: 150,
        diameter: 47.8,
        co2: 105.1,
        location: 'Tanaman Hias - Merah',
        notes: '⭐ TERBESAR ⭐',
        isBiggest: true,
        color: '#FFD93D'
    },
    {
        id: 3,
        name: 'Pucuk Merah',
        icon: '🌱',
        lingkar: 65,
        diameter: 20.7,
        co2: 45.5,
        location: 'Tanaman Hias - Merah',
        notes: 'Tanaman Hias',
        color: '#FF6B9D'
    },
    {
        id: 4,
        name: 'Sawo',
        icon: '🥝',
        lingkar: 85,
        diameter: 27.1,
        co2: 59.5,
        location: 'Pohon Buah - Lokal',
        notes: 'Pohon Buah',
        color: '#8B7355'
    },
    {
        id: 5,
        name: 'Palem',
        icon: '🌴',
        lingkar: 70,
        diameter: 22.3,
        co2: 49.1,
        location: 'Pohon Hias - Pekarangan',
        notes: 'Pohon Hias',
        color: '#95E1D3'
    },
    {
        id: 6,
        name: 'Manggis',
        icon: '🍇',
        lingkar: 80,
        diameter: 25.5,
        co2: 56.1,
        location: 'Pohon Buah - Lokal',
        notes: 'Pohon Buah',
        color: '#C7B3E5'
    },
    {
        id: 7,
        name: 'Cemara',
        icon: '🎄',
        lingkar: 110,
        diameter: 35.0,
        co2: 77.0,
        location: 'Pohon Konifer - Pelindung',
        notes: 'Pohon Konifer',
        color: '#52B788'
    }
];

// ===== History Management =====
class HistoryManager {
    constructor() {
        this.storageKey = 'co2_history';
        this.loadHistory();
    }

    loadHistory() {
        const stored = localStorage.getItem(this.storageKey);
        this.history = stored ? JSON.parse(stored) : [];
    }

    saveHistory() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.history));
    }

    addRecord(groupName, treeName, diameter, co2PerTree, totalCO2, quantity, latitude, longitude, imageData) {
        const record = {
            id: Date.now(),
            groupName: groupName || 'Tidak Ada Nama',
            treeName: treeName,
            lingkar: (diameter * 3.14).toFixed(1),
            diameter: diameter.toFixed(1),
            co2PerTree: co2PerTree.toFixed(2),
            totalCO2: totalCO2.toFixed(2),
            quantity: quantity,
            latitude: latitude || '-',
            longitude: longitude || '-',
            imageData: imageData || null,
            timestamp: new Date().toLocaleString('id-ID')
        };
        this.history.unshift(record);
        this.saveHistory();
        return record;
    }

    getHistory() {
        return this.history;
    }

    deleteRecord(id) {
        this.history = this.history.filter(record => record.id !== id);
        this.saveHistory();
    }

    clearAll() {
        this.history = [];
        this.saveHistory();
    }
}

const historyManager = new HistoryManager();

// ===== Constants =====
const DIAMETER_FACTOR = 3.14;
const CO2_FACTOR = 2.2;

// ===== Inisialisasi aplikasi =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderTreesCards();
    setupEventListeners();
    setupChart();
    animateNumbers();
    renderHistory();
}

// ===== Setup Event Listeners =====
function setupEventListeners() {
    const calculateBtn = document.getElementById('calculate-btn');
    const lingkarInput = document.getElementById('lingkar-input');
    const quantityInput = document.getElementById('quantity-input');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const downloadExcelBtn = document.getElementById('download-excel-btn');
    const imageInput = document.getElementById('image-input');
    const removeImageBtn = document.getElementById('remove-image-btn');

    calculateBtn.addEventListener('click', calculateCO2);
    lingkarInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateCO2();
    });
    quantityInput.addEventListener('change', function() {
        if (this.value < 1) this.value = 1;
    });
    clearHistoryBtn.addEventListener('click', clearAllHistory);
    downloadExcelBtn.addEventListener('click', downloadHistoryExcel);
    imageInput.addEventListener('change', handleImageUpload);
    removeImageBtn.addEventListener('click', removeImage);
}

// ===== Render Tree Cards =====
function renderTreesCards() {
    const treesGrid = document.getElementById('trees-grid');
    treesGrid.innerHTML = '';

    treesData.forEach((tree) => {
        const card = createTreeCard(tree);
        treesGrid.appendChild(card);
    });
}

function createTreeCard(tree) {
    const card = document.createElement('div');
    card.className = 'tree-card';

    // Buat gambar pohon manggis untuk card manggis
    let treeImageHtml = tree.icon;
    if (tree.name === 'Manggis') {
        treeImageHtml = `
            <div style="
                background: linear-gradient(135deg, #7fb069 0%, #5a8a4a 100%);
                width: 80px;
                height: 80px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                font-size: 40px;
                font-weight: bold;
                color: #663399;
                text-shadow: 0 2px 4px rgba(0,0,0,0.1);
            ">
                🍇
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="tree-card-header">
            <div class="tree-card-icon">${treeImageHtml}</div>
            <div class="tree-card-name">${tree.name}</div>
        </div>
        <div class="tree-card-body">
            <div class="tree-info-row">
                <span class="tree-info-label">Lingkar:</span>
                <span class="tree-info-value">${tree.lingkar} cm</span>
            </div>
            <div class="tree-info-row">
                <span class="tree-info-label">Diameter:</span>
                <span class="tree-info-value">${tree.diameter.toFixed(1)} cm</span>
            </div>
            <div class="tree-info-row">
                <span class="tree-info-label">Serapan CO₂:</span>
                <span class="tree-info-value">${tree.co2.toFixed(1)} kg/tahun</span>
            </div>
            ${tree.isBiggest ? `<div class="tree-badge">⭐ TERBESAR ⭐</div>` : ''}
            <div class="tree-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${tree.location}</span>
            </div>
        </div>
    `;

    // Add click event untuk select pohon
    card.addEventListener('click', function() {
        document.getElementById('tree-select').value = tree.id;
    });

    return card;
}

// ===== Calculate CO2 =====
function calculateCO2() {
    const groupNameInput = document.getElementById('group-name-input');
    const lingkarInput = document.getElementById('lingkar-input');
    const quantityInput = document.getElementById('quantity-input');
    const treeSelectInput = document.getElementById('tree-select');
    const treeManualInput = document.getElementById('tree-manual-input');
    const latitudeInput = document.getElementById('latitude-input');
    const longitudeInput = document.getElementById('longitude-input');
    const resultDisplay = document.getElementById('result-display');

    const groupName = groupNameInput.value;
    const lingkar = parseFloat(lingkarInput.value);
    const quantity = parseInt(quantityInput.value) || 1;
    const selectedTreeId = treeSelectInput.value;
    const manualTreeName = treeManualInput.value.trim();
    const latitude = latitudeInput.value ? parseFloat(latitudeInput.value) : null;
    const longitude = longitudeInput.value ? parseFloat(longitudeInput.value) : null;
    const imageData = window.currentImageData || null;

    // Validasi input
    if (!lingkar || lingkar <= 0) {
        alert('Masukkan lingkar pohon yang valid (> 0 cm)');
        return;
    }

    // Get tree name - prioritas: manual input > select dropdown > default
    let treeName = 'Pohon Custom';
    if (manualTreeName) {
        treeName = manualTreeName;
    } else if (selectedTreeId !== '') {
        treeName = treesData[selectedTreeId].name;
    } else {
        alert('Pilih jenis pohon atau masukkan nama pohon manual');
        return;
    }

    // Hitung diameter
    const diameter = lingkar / DIAMETER_FACTOR;

    // Hitung serapan CO2 per pohon
    const co2PerTree = diameter * CO2_FACTOR;

    // Total serapan
    const totalCO2 = co2PerTree * quantity;

    // Konversi ke mobil km
    const mobilKm = (totalCO2 * 1000 / 0.227).toFixed(0);

    // Update tampilan hasil
    document.getElementById('diameter-result').textContent = diameter.toFixed(1) + ' cm';
    document.getElementById('co2-single-result').textContent = co2PerTree.toFixed(2) + ' kg/tahun';
    document.getElementById('co2-total-result').textContent = totalCO2.toFixed(2) + ' kg CO₂/tahun';
    document.getElementById('comparison-text').innerHTML = `
        <strong>Setara dengan menyerap polusi dari ~${mobilKm} km perjalanan mobil bensin per tahun</strong>
    `;

    // Tambah ke history
    historyManager.addRecord(groupName, treeName, diameter, co2PerTree, totalCO2, quantity, latitude, longitude, imageData);
    renderHistory();

    // Clear form & image
    lingkarInput.value = '';
    quantityInput.value = '1';
    removeImage();

    // Tampilkan hasil
    resultDisplay.style.display = 'block';
    resultDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== Setup Chart =====
function setupChart() {
    const ctx = document.getElementById('co2-chart').getContext('2d');

    const treeNames = treesData.map(t => t.name);
    const co2Values = treesData.map(t => t.co2);
    const colors = treesData.map(t => t.color);

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: treeNames,
            datasets: [{
                label: 'Serapan CO₂ (kg/tahun)',
                data: co2Values,
                backgroundColor: colors,
                borderColor: colors.map(c => c + 'DD'),
                borderWidth: 2,
                borderRadius: 10,
                hoverBackgroundColor: colors.map(c => c + 'CC'),
                hoverBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: { size: 12, weight: 'bold' },
                        color: '#1b4332',
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(45, 106, 79, 0.9)',
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: { size: 14, weight: 'bold' },
                    bodyFont: { size: 13 },
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y.toFixed(1) + ' kg CO₂/tahun';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#555',
                        font: { size: 12, weight: 'bold' },
                        callback: function(value) {
                            return value + ' kg';
                        }
                    },
                    grid: {
                        color: 'rgba(45, 106, 79, 0.1)',
                        drawBorder: true
                    }
                },
                x: {
                    ticks: {
                        color: '#555',
                        font: { size: 12, weight: 'bold' }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// ===== Animate Numbers =====
function animateNumbers() {
    const animateCounter = (element, target, duration = 1000) => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toFixed(1);
                clearInterval(timer);
            } else {
                element.textContent = start.toFixed(1);
            }
        }, 16);
    };

    const totalCO2 = document.getElementById('total-co2');
    const avgCO2 = document.getElementById('avg-co2');
    const maxCO2 = document.getElementById('max-co2');

    if (totalCO2.textContent === '542.8') {
        animateCounter(totalCO2, 542.8);
        animateCounter(avgCO2, 67.9);
        animateCounter(maxCO2, 105.1);
    }
}

// ===== Utility: Format Number =====
function formatNumber(num) {
    return new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num);
}

// ===== Render History =====
function renderHistory() {
    const historyList = document.getElementById('history-list');
    const clearBtn = document.getElementById('clear-history-btn');
    const downloadExcelBtn = document.getElementById('download-excel-btn');
    const history = historyManager.getHistory();

    if (history.length === 0) {
        historyList.innerHTML = '<div class="history-empty"><p><i class="fas fa-inbox"></i> Belum ada data. Mulai hitung CO₂ untuk melihat riwayat!</p></div>';
        clearBtn.style.display = 'none';
        downloadExcelBtn.style.display = 'none';
        return;
    }

    clearBtn.style.display = 'block';
    downloadExcelBtn.style.display = 'block';
    historyList.innerHTML = '';

    history.forEach((record, index) => {
        const card = document.createElement('div');
        card.className = 'history-card';
        
        let imageHtml = '';
        if (record.imageData) {
            imageHtml = `<div style="margin-top: 10px;"><img src="${record.imageData}" style="max-width: 100%; max-height: 150px; border-radius: 8px; border: 1px solid var(--border-color);"></div>`;
        }

        card.innerHTML = `
            <div class="history-card-header">
                <div class="history-card-group">
                    <div class="history-card-group-name">📊 ${record.groupName}</div>
                    <div class="history-card-tree">🌳 ${record.treeName}</div>
                </div>
                <button class="history-delete-btn" onclick="deleteHistoryRecord(${record.id})" title="Hapus">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="history-card-body">
                <div class="history-item">
                    <span class="history-item-label">Lingkar:</span>
                    <span class="history-item-value">${record.lingkar} cm</span>
                </div>
                <div class="history-item">
                    <span class="history-item-label">Diameter:</span>
                    <span class="history-item-value">${record.diameter} cm</span>
                </div>
                <div class="history-item">
                    <span class="history-item-label">Jumlah:</span>
                    <span class="history-item-value">${record.quantity} pohon</span>
                </div>
                <div class="history-item">
                    <span class="history-item-label">CO₂/pohon:</span>
                    <span class="history-item-value">${record.co2PerTree} kg</span>
                </div>
                ${record.latitude !== '-' ? `<div class="history-item">
                    <span class="history-item-label">📍 Koordinat:</span>
                    <span class="history-item-value">${record.latitude.toFixed(6)}, ${record.longitude.toFixed(6)}</span>
                </div>` : ''}
                <div class="history-co2-total">
                    <span class="history-co2-value">${record.totalCO2} kg</span>
                    <span class="history-co2-label">Total CO₂/tahun</span>
                </div>
                ${imageHtml}
                <div class="history-timestamp">
                    ⏰ ${record.timestamp}
                </div>
            </div>
        `;

        historyList.appendChild(card);
    });
}

// ===== Delete History Record =====
function deleteHistoryRecord(id) {
    if (confirm('Hapus data ini dari riwayat?')) {
        historyManager.deleteRecord(id);
        renderHistory();
    }
}

// ===== Clear All History =====
function clearAllHistory() {
    if (confirm('Hapus semua riwayat? Tindakan ini tidak dapat dibatalkan!')) {
        historyManager.clearAll();
        renderHistory();
    }
}

// ===== Download History as Excel =====
function downloadHistoryExcel() {
    const history = historyManager.getHistory();
    
    if (history.length === 0) {
        alert('Tidak ada riwayat untuk didownload');
        return;
    }

    try {
        // Persiapkan data untuk Excel
        const wsData = [
            ['No', 'Nama Kelompok', 'Jenis Pohon', 'Lingkar (cm)', 'Diameter (cm)', 'Jumlah Pohon', 'CO₂/Pohon (kg)', 'Total CO₂ (kg)', 'Lintang', 'Bujur', 'Waktu']
        ];

        history.forEach((record, index) => {
            wsData.push([
                index + 1,
                record.groupName,
                record.treeName,
                parseFloat(record.lingkar),
                parseFloat(record.diameter),
                record.quantity,
                parseFloat(record.co2PerTree),
                parseFloat(record.totalCO2),
                record.latitude === '-' ? '' : parseFloat(record.latitude),
                record.longitude === '-' ? '' : parseFloat(record.longitude),
                record.timestamp
            ]);
        });

        // Buat workbook dengan XLSX
        const ws = XLSX.utils.aoa_to_sheet(wsData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'CO2 Data');

        // Set column widths
        ws['!cols'] = [
            {wch: 5}, {wch: 20}, {wch: 20}, {wch: 13}, 
            {wch: 13}, {wch: 13}, {wch: 13}, {wch: 13}, 
            {wch: 13}, {wch: 13}, {wch: 18}
        ];

        // Download file
        const fileName = `co2_riwayat_${getCurrentDate()}.xlsx`;
        XLSX.writeFile(wb, fileName);
        
        alert('✅ File Excel berhasil didownload!');
        console.log('Excel downloaded:', fileName);
        
    } catch (error) {
        console.error('Excel Download Error:', error);
        alert('❌ Gagal download Excel: ' + error.message);
    }
}

// ===== Get Current Date Format =====
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}${month}${day}_${hours}${minutes}`;
}

// ===== Handle Image Upload =====
function handleImageUpload(event) {
    const file = event.target.files[0];
    
    if (!file) return;

    // Validasi ukuran (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        alert('Ukuran foto terlalu besar! Max 2MB');
        document.getElementById('image-input').value = '';
        return;
    }

    // Validasi tipe file
    if (!file.type.startsWith('image/')) {
        alert('File harus berupa gambar!');
        document.getElementById('image-input').value = '';
        return;
    }

    // Baca file sebagai base64
    const reader = new FileReader();
    reader.onload = function(e) {
        const imageData = e.target.result;
        window.currentImageData = imageData;
        
        // Tampilkan preview
        const previewDiv = document.getElementById('image-preview');
        const previewImg = document.getElementById('preview-img');
        previewImg.src = imageData;
        previewDiv.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

// ===== Remove Image =====
function removeImage() {
    document.getElementById('image-input').value = '';
    document.getElementById('image-preview').style.display = 'none';
    window.currentImageData = null;
}

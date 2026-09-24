// Script untuk debug masalah Kelompok 7 & 8

console.log('=== DEBUG: Check localStorage Issue ===');

// 1. Check localStorage availability
console.log('localStorage tersedia:', typeof localStorage !== 'undefined');

// 2. Check existing data
const storageKey = 'co2_history';
const existingData = localStorage.getItem(storageKey);
console.log('Existing data di key "' + storageKey + '":', !!existingData);

if (existingData) {
    try {
        const parsed = JSON.parse(existingData);
        console.log('Jumlah records:', parsed.length);
        console.log('Data records:');
        parsed.forEach((record, i) => {
            console.log(`  [${i}] Kelompok: ${record.groupName}, Pohon: ${record.treeName}, CO2: ${record.totalCO2}`);
        });
    } catch(e) {
        console.error('Error parsing JSON:', e);
    }
}

// 3. Test add new record
console.log('\n=== TEST: Add New Record ===');
try {
    let history = [];
    const existing = localStorage.getItem(storageKey);
    if (existing) {
        history = JSON.parse(existing);
    }
    
    const newRecord = {
        id: Date.now(),
        groupName: 'TEST_KELOMPOK_' + Math.random().toString(36).substr(2, 5),
        treeName: 'Mahoni',
        lingkar: '100',
        diameter: '31.8',
        co2PerTree: '69.96',
        totalCO2: '69.96',
        quantity: 1,
        latitude: '-',
        longitude: '-',
        imageData: null,
        timestamp: new Date().toLocaleString('id-ID')
    };
    
    console.log('Menambah record:', newRecord.groupName);
    history.unshift(newRecord);
    
    const jsonStr = JSON.stringify(history);
    console.log('JSON size:', (new Blob([jsonStr]).size / 1024).toFixed(2), 'KB');
    
    localStorage.setItem(storageKey, jsonStr);
    console.log('✅ Record ditambah ke localStorage');
    
    // Verify
    const verify = JSON.parse(localStorage.getItem(storageKey));
    console.log('✅ Verified: Total records sekarang =', verify.length);
    
} catch(e) {
    console.error('❌ Error:', e.message);
}

// 4. Check localStorage quota
console.log('\n=== Storage Quota ===');
if (navigator.storage && navigator.storage.estimate) {
    navigator.storage.estimate().then(estimate => {
        console.log('Quota:', (estimate.quota / 1024 / 1024).toFixed(2), 'MB');
        console.log('Usage:', (estimate.usage / 1024 / 1024).toFixed(2), 'MB');
        console.log('Available:', ((estimate.quota - estimate.usage) / 1024 / 1024).toFixed(2), 'MB');
    });
}

console.log('=== END DEBUG ===');

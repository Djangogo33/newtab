// Newtab Popup Settings Handler (Firefox)

console.log('[Newtab Popup] Initialized');

const newtabPreset = document.getElementById('newtabUrlPreset');
const newtabCustom = document.getElementById('newtabUrlCustom');

// Load saved settings
browser.storage.local.get(['newtabUrlPreset', 'newtabUrlCustom']).then((data) => {
  const preset = data.newtabUrlPreset || 'google';
  newtabPreset.value = preset;

  if (preset === 'custom') {
    newtabCustom.classList.add('show');
    if (data.newtabUrlCustom) {
      newtabCustom.value = data.newtabUrlCustom;
    }
  }
});

// Preset changed
newtabPreset.addEventListener('change', (e) => {
  const preset = e.target.value;
  browser.storage.local.set({ newtabUrlPreset: preset });

  if (preset === 'custom') {
    newtabCustom.classList.add('show');
    newtabCustom.focus();
  } else {
    newtabCustom.classList.remove('show');
    document.getElementById('feedback').textContent = '✅ Modifié: ' + preset;
  }
});

// Custom URL changed
newtabCustom.addEventListener('input', (e) => {
  const url = e.target.value;
  if (url) {
    browser.storage.local.set({ newtabUrlCustom: url });
    document.getElementById('feedback').textContent = '✅ URL enregistrée';
  }
});

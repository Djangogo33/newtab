// Newtab - Instant Redirect Handler (Firefox)

console.log('[Newtab] Redirecting...');

const urls = {
  'google': 'https://www.google.com/',
  'bing': 'https://www.bing.com/',
  'qwant': 'https://www.qwant.com/',
  'duckduckgo': 'https://www.duckduckgo.com/',
  'startpage': 'https://www.startpage.com/',
  'yahoo': 'https://search.yahoo.com/',
  'ecosia': 'https://www.ecosia.org/',
  'github': 'https://github.com/',
  'brave': 'https://search.brave.com/'
};

// Get stored preference and redirect immediately
browser.storage.local.get(['newtabUrlPreset', 'newtabUrlCustom']).then((data) => {
  const preset = data.newtabUrlPreset || 'google';
  const customUrl = data.newtabUrlCustom;

  let targetUrl = urls[preset] || urls['google'];

  if (preset === 'custom' && customUrl) {
    targetUrl = customUrl;
  }

  console.log('[Newtab] Redirecting to:', targetUrl);
  window.location.replace(targetUrl);
});

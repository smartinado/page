const COUNTER_NAMESPACE = 'tasmagic-app';
const COUNTER_KEY = 'downloads';
const COUNTER_URL = `https://api.countapi.xyz`;

async function recordDownload(event) {
  try {
    await fetch(`${COUNTER_URL}/hit/${COUNTER_NAMESPACE}/${COUNTER_KEY}`);
    updateDownloadDisplay();
  } catch (error) {
    console.warn('Download counter unavailable', error);
  }

  if (event && event.target && event.target.href) {
    // continue with default download behaviour after slight delay so the fetch can fire
    setTimeout(() => {
      window.location.href = event.target.href;
    }, 100);
    event.preventDefault();
  }
}

async function updateDownloadDisplay() {
  try {
    const response = await fetch(`${COUNTER_URL}/get/${COUNTER_NAMESPACE}/${COUNTER_KEY}`);
    const data = await response.json();
    const totalEl = document.getElementById('download-total');
    if (totalEl && data && typeof data.value === 'number') {
      totalEl.textContent = data.value.toLocaleString();
      const lastEl = document.getElementById('download-last');
      if (lastEl) {
        lastEl.textContent = new Date().toLocaleString();
      }
    }
  } catch (error) {
    console.warn('Could not fetch download stats', error);
  }
}

function refreshDownloadStats() {
  updateDownloadDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
  updateDownloadDisplay();
});

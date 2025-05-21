function loadTemplate(selector, url, callback) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.querySelector(selector).innerHTML = html;
      if (typeof callback === 'function') callback();
    });
}

// Panggil di setiap halaman (lihat contoh di bawah)

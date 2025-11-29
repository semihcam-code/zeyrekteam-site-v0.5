# ZeyrekTeam CS2 Sunucu – v0.5

Profesyonel Counter‑Strike 2 topluluğu için modern, performans odaklı ve oyuncuları içine çeken bir tanıtım sitesi.

## Tanıtım
- Yüksek tick ve düşük gecikme odaklı sunucu deneyimi
- Canlı oyuncu istatistikleri, sunucu durum göstergesi ve Steam/Discord bağlantıları
- Dark/Light tema, responsive tasarım, animasyonlu geçişler
- Harita rotasyonu, turnuva duyuruları ve galeri (özelleştirilebilir)

## Öne Çıkan Özellikler
- Modern UI: glassmorphism, neon aksanlar, minimal tipografi
- Performans: küçük CSS/JS, hızlı yükleme, ölçeklenebilir
- UX: net CTA’lar (Sunucuya Bağlan, IP kopyala, Discord), düzgün mobil deneyim
- SEO: semantic HTML5 ve meta etiketleri
- Uyumluluk: Chrome, Firefox, Edge ve Safari

## Depo Bilgisi
- Depo adı önerisi: `zeyrekteam-site-v0.5`
- Açıklama (örnek): “ZeyrekTeam CS2 sunucu tanıtım ve topluluk sitesi – modern arayüz, canlı istatistikler, Steam/Discord entegrasyonu.”
- Görünürlük: 
  - Public: topluluk erişimi ve PR’ler için ideal
  - Private: kapalı testler ve marka varlıkları gizliliği için

## Yapı
```
zeyrekteam-site/
  index.html
  styles.css
  app.js
  README.md
  .gitignore
```

## Kurulum ve Geliştirme
- Yerel önizleme (Python):
  - `python -m http.server 8000 -d zeyrekteam-site`
  - Tarayıcı: `http://localhost:8000/`
- Sunucu IP ayarı:
  - `index.html` içinde `#server-ip` öğesinin `data-ip` değerini gerçek `IP:PORT` ile değiştirin
- Bağlantılar:
  - Steam: “Bağlan” butonu `steam://connect/IP:PORT`
  - Discord: `app.js` içindeki `discordLink` URL’sini güncelleyin

## Dağıtım
- GitHub Pages: depoyu kökten (root) barındırın veya `zeyrekteam-site/` klasörünü Pages kaynak klasörü seçin
- Alternatif: Netlify, Vercel, Cloudflare Pages (statik barındırma)

## Özelleştirme
- Tema: `data-theme="dark|light"` ve `styles.css` değişkenleri
- Renkler: `--primary`, `--accent` CSS değişkenleri
- Galeri/Harita/Etkinlik: `app.js` içindeki `state` yapılarını veya gerçek API’yi bağlayın

## Yol Haritası
- Gerçek zamanlı oyuncu ve durum verisi için API/RCON entegrasyonu
- Gelişmiş analitik ve Lighthouse optimizasyonları
- Marka varlıkları (logo, OG görsel) ve çok dilli destek

## Lisans
- Öneri: MIT Lisansı (açık kullanım ve katkı kolaylığı)
- Alternatif: İçerik/medya için CC BY‑SA

---
ZeyrekTeam – Play. Rise. Dominate.

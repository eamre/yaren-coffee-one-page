# Yâren

> Her Fincanda Ortak Bir Hikâye

**Yâren**, geleneksel Türk kahvesini espresso ve modern demleme kültürüyle birleştiren hayali bir kahve markasıdır. Bu repo, marka için hazırlanan **modern, sıcak ve mobil uyumlu tek sayfalık web sitesinin** kaynak kodudur.

## Özet

Siteyi React, TypeScript, Vite ve Tailwind CSS ile geliştirdim. Sayfada hero, ürünler (Türk Kahvesi, Espresso, Filtre Kahve), marka hikâyesi ve doğrulamalı bir iletişim formu bulunuyor. Kodu SOLID ve temiz kod prensiplerine göre küçük, tek sorumluluklu bileşenlere ve saf fonksiyonlara böldüm. Geliştirme sürecinde yapay zekâ asistanı olarak Claude (Claude Code) kullandım; tasarım kararlarını, içeriği ve kodun yönünü adım adım birlikte belirledik. Fotoğraflar Unsplash'ten alınmıştır.

## İçindekiler

- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)
- [Proje Yapısı](#proje-yapısı)
- [Tasarım Kararları](#tasarım-kararları)
- [Kod Mimarisi](#kod-mimarisi)
- [İletişim Formu](#i̇letişim-formu)
- [Erişilebilirlik](#erişilebilirlik)
- [Performans](#performans)
- [Kullanılan Araçlar](#kullanılan-araçlar)
- [Görseller](#görseller)

## Özellikler

- **Hero:** Marka adı, slogan ve ürün bölümüne yumuşak kaydıran **"Kahveleri Keşfet"** butonu. Fotoğraftaki fincandan yükselen animasyonlu duman.
- **Ürünler:** Türk Kahvesi, Espresso ve Filtre Kahve için görsel, kısa açıklama ve örnek fiyat. Kartlar kaydırınca sırayla belirir, üzerine gelince hafifçe yükselir.
- **Hikâye:** "Yâren" kelimesinin anlamı (dost, can yoldaşı) ve markanın üç değeri: Gelenek, Zanaat, Sohbet.
- **İletişim formu:** Ad, e-posta ve mesaj alanları. Boş alanlar ve e-posta biçimi kontrol edilir, geçerli gönderimde başarı mesajı gösterilir. Sunucu bağlantısı gerekmez.
- **Mobil uyum:** Telefonda buzlu cam görünümlü açılır menü, yeniden düzenlenen bölüm boşlukları ve başlıklar. Masaüstünde bölümler ekranı doldurur.
- **Hareket hassasiyeti:** İşletim sisteminde "hareketi azalt" ayarı açık olan kullanıcılarda animasyonlar kapanır.

## Teknolojiler

| Teknoloji | Kullanım amacı |
|---|---|
| [React 19](https://react.dev) | Bileşen tabanlı arayüz |
| [TypeScript](https://www.typescriptlang.org) | Tip güvenliği, okunabilir kod |
| [Vite](https://vite.dev) | Hızlı geliştirme sunucusu ve derleme |
| [Tailwind CSS 4](https://tailwindcss.com) | Yardımcı sınıflar ve tema değişkenleri (`@theme`) |
| ESLint + typescript-eslint | Kod kalitesi kontrolü |
| Google Fonts | Fraunces (başlıklar) ve DM Sans (gövde metni) |

Ek bir arayüz kütüphanesi, router ya da durum yönetim aracı kullanılmadı. Tek sayfalık bir site için gereksiz olurdu.

## Kurulum ve Çalıştırma

**Gereksinim:** Node.js 20 veya üzeri.

```bash
# 1. Bağımlılıkları kur
npm install

# 2. Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

Diğer komutlar:

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusu (anlık yenileme ile) |
| `npm run build` | Tip kontrolü yapıp üretim derlemesi oluşturur (`dist/`) |
| `npm run preview` | Üretim derlemesini yerelde önizler |
| `npm run lint` | ESLint ile kodu denetler |

## Proje Yapısı

```
src/
├── assets/images/     Optimize edilmiş WebP/JPG fotoğraflar
├── components/
│   ├── layout/        Navbar, MobileMenu, Footer
│   ├── sections/      Hero, Products, Story, Contact, ContactForm
│   └── ui/            Button, Container, Section, SectionHeading,
│                      ProductCard, Reveal, Steam, TextField
├── data/              Marka, ürün, navigasyon ve hikâye içerikleri
├── hooks/             useContactForm, useReveal, useScrolled
├── services/          contactService (sahte gönderim)
├── types/             Paylaşılan TypeScript tipleri
├── utils/             classNames, formatPrice, validators
├── App.tsx            Sadece bölümleri sıralar
├── index.css          Tema değişkenleri ve özel CSS
└── main.tsx
```

## Tasarım Kararları

- **Renk paleti:** Kırık beyaz (`cream`), koyu kahverengi (`espresso`), zeytin yeşili (`olive`) ve vurgu için bakır (`copper`). Hepsi `src/index.css` içinde `@theme` ile **tema değişkeni** olarak tanımlı; bileşenlerde `bg-cream`, `text-espresso` gibi anlamlı isimlerle kullanılır.
- **Tipografi:** Başlıklarda sıcak, geleneksel hissi veren serif (Fraunces), gövde metninde sade bir sans-serif (DM Sans).
- **Doku:** Ahşap dokusu fotoğraf yerine CSS ile (`bg-wood`) çizilir, böylece hafif kalır.
- **Hero:** Fotoğraf fincana yaklaştırılmış, yazı üst yarıda, net fincan alt yarıda duruyor. Yazının okunurluğu için yalnızca yazının arkasına yumuşak bir gölge, kenarlara hafif bir vinyet eklendi. Fotoğrafın tamamını karartmak yerine bu yöntem tercih edildi.
- **Duman animasyonu:** Fotoğraf ekran boyutuna göre farklı kırpıldığı için duman, `object-cover` davranışını taklit eden sabit oranlı bir çerçevenin içine yüzdeyle yerleştirildi. Böylece duman her ekranda fincanın aynı noktasından çıkar.
- **Bölümler:** Masaüstünde her bölüm en az ekran yüksekliğinde. Menüden bir bölüme gidince komşu bölümlerin şeritleri görünmez. Telefonda boşluklar küçültülür.

## Kod Mimarisi

Kodun, inceleyen kişinin aklını karıştırmaması hedeflendi.

- **Tek sorumluluk (SRP):** Her bileşen tek iş yapar. `ContactForm` sadece formu çizer; durum ve gönderim mantığı `useContactForm` hook'unda, doğrulama kuralları `validators.ts` içindedir.
- **Açık/kapalı prensibi (OCP):** Yeni ürün eklemek `data/products.ts`'e bir kayıt eklemektir, bileşene dokunulmaz. Doğrulama kuralları `FIELD_VALIDATORS` haritasından genişler.
- **Bağımlılıkların tersine çevrilmesi (DIP):** `useContactForm`, gönderim fonksiyonunu parametre olarak alır. Şu an sahte bir `submitContactForm` kullanılır; gerçek bir API'ye geçmek yalnızca `services/contactService.ts` dosyasını değiştirmeyi gerektirir.
- **İçerik ve görünüm ayrımı:** Metinler, fiyatlar ve bağlantılar `data/` klasöründedir; bileşenler yalnızca bunları çizer.
- **Tekrarın önlenmesi:** Ortak bölüm boşluğu `Section`, başlık yapısı `SectionHeading`, buton stilleri `Button` bileşenindedir.
- **Saf fonksiyonlar:** `validateContactForm`, `formatPrice`, `classNames` yan etkisizdir ve kolay test edilir.
- **Tipler:** `any` kullanılmadı, paylaşılan tipler `src/types` altında toplandı.
- **Commit geçmişi:** [Conventional Commits](https://www.conventionalcommits.org) biçiminde, küçük ve tek konulu commit'ler.

## İletişim Formu

Form `noValidate` ile işaretlidir; kontrol tarayıcının varsayılan balonları yerine uygulamanın kendi kuralları ve Türkçe mesajlarıyla yapılır.

| Alan | Kural |
|---|---|
| Ad | Boş olamaz, en az 2 karakter |
| E-posta | Boş olamaz, geçerli e-posta biçiminde olmalı |
| Mesaj | Boş olamaz, en az 10 karakter |

- Gönder'e basıldığında üç alan da kontrol edilir, hatalar ilgili alanın altında gösterilir.
- Kullanıcı bir alanı düzeltmeye başlayınca o alanın hatası kaybolur.
- Geçerli gönderimde buton "Gönderiliyor..." durumuna geçer, kısa bir gecikmeden sonra başarı mesajı çıkar ve form temizlenir.
- Sunucu olmadığı için gönderim `contactService.ts` içinde taklit edilir (800 ms gecikme).

## Erişilebilirlik

- Anlamlı HTML: `header`, `nav`, `main`, `section`, `footer`, `article`.
- Mobil menü düğmesi `aria-expanded` ve `aria-controls` kullanır. Menü kapalıyken klavye odağından ve ekran okuyuculardan gizlenir.
- Form alanlarında `aria-invalid` ve `aria-describedby`; başarı mesajı `role="status"`, hata mesajı `role="alert"`.
- Tüm dokunma hedefleri mobilde en az 44 px.
- Dekoratif görseller ve animasyonlar `aria-hidden` ile işaretlidir.
- `prefers-reduced-motion` desteği: animasyonlar ve yumuşak kaydırma kapatılır.
- Klavye odağı için görünür `focus-visible` çerçevesi.

## Performans

- Fotoğraflar **WebP** biçiminde ve gerçekte gösterildikleri boyuta göre ölçeklendirildi (hero ≈ 257 KB, kartlar ≈ 50-200 KB).
- Hero dışındaki görseller `loading="lazy"` ile gecikmeli yüklenir; hero görseli `fetchPriority="high"` ile öncelikli yüklenir.
- Yazı tipleri `display=swap` ile yüklenir, `preconnect` ipuçları vardır.
- Kaydırma animasyonları `IntersectionObserver` ile yapılır, kaydırma olayı dinlenmez. Menü için kullanılan kaydırma dinleyicisi `passive` işaretlidir.
- Animasyonlar yalnızca `transform` ve `opacity` özelliklerini kullanır.

## Kullanılan Araçlar

- **Claude (Claude Code):** Yapay zekâ destekli geliştirme asistanı. Mimari önerileri, kod yazımı, tarayıcıda gerçek test (masaüstü ve mobil), erişilebilirlik ve performans kontrolleri için kullanıldı.
- **Visual Studio Code:** Kod takibi ve düzenleme.
- **Git:** Sürüm kontrolü.
- **Unsplash:** Ücretsiz fotoğraflar.

## Görseller

Sitedeki tüm fotoğraflar [Unsplash](https://unsplash.com) üzerinden, Unsplash Lisansı kapsamında kullanılmıştır. "Yâren" markası, adresi, telefonu ve fiyatları tamamen hayalidir.

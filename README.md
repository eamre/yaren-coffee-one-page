# Yâren

> Her Fincanda Ortak Bir Hikâye

**Yâren**, geleneksel Türk kahvesini espresso ve modern demleme kültürüyle birleştiren hayali bir kahve markasıdır. Bu repo, marka için hazırlanan **modern, sıcak ve mobil uyumlu tek sayfalık web sitesinin** kaynak kodlarını içermektedir.

## Özet

Siteyi React, TypeScript, Vite ve Tailwind CSS ile geliştirdim. Sayfada hero, ürünler (Türk Kahvesi, Espresso, Filtre Kahve), marka hikayesi ve doğrulamalı bir iletişim formu bulunuyor. Kodu SOLID ve temiz kod prensiplerine göre küçük, tek sorumluluklu bileşenlere ve saf fonksiyonlara böldüm. Fotoğraflar Unsplash'ten alınmıştır.

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

- **Hero:** Marka adı, slogan ve ürün bölümüne yumuşak bir şekilde kaydıran **"Kahveleri Keşfet"** butonu. Fotoğraftaki fincandan yükselen animasyonlu duman.
- **Ürünler:** Türk Kahvesi, Espresso ve Filtre Kahve için görsel, kısa açıklama ve örnek fiyat. Kartlar kaydırınca sırayla belirir, üzerine gelince hafifçe yükselir.
- **Hikaye:** "Yâren" kelimesinin anlamı (dost, can yoldaşı) ve markanın üç değeri: Gelenek, Zanaat, Sohbet.
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
| [Vitest](https://vitest.dev) | Birim testleri |
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
| `npm test` | Birim testlerini bir kez çalıştırır |
| `npm run test:watch` | Testleri izleme modunda çalıştırır (dosya değişince yeniden) |

## Proje Yapısı

```
src/
├── assets/images/     Optimize edilmiş WebP fotoğraflar
├── components/
│   ├── layout/        Navbar, MobileMenu, MenuIcon, Footer
│   ├── sections/      Hero, Products, Story, Contact, ContactForm
│   └── ui/            Button, Container, Section, SectionHeading,
│                      ProductCard, Reveal, Steam, TextField
├── data/              Marka, ürün, navigasyon ve hikâye içerikleri
├── hooks/             useContactForm, useReveal, useScrolled,
│                      useActiveSection
├── services/          contactService (sahte gönderim)
├── types/             Paylaşılan TypeScript tipleri
├── utils/             classNames, formatPrice, validators (+ *.test.ts)
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

`App.tsx`, sayfanın ana bölümlerini bir araya getirir. Bileşenler `layout/` (menü ve alt bilgi), `sections/` (sayfa bölümleri) ve `ui/` (tekrar kullanılan arayüz parçaları) klasörlerinde tutulur. Her bileşen ve fonksiyon tek bir iş yapar; içerik, mantık ve görünüm ayrı katmanlarda tutulur.

Marka, navigasyon ve ürün içerikleri `src/data/` altında tanımlıdır. Böylece örneğin yeni bir kahve eklemek için ürün kartı bileşenini değiştirmek gerekmez; ürün listesine yeni bir kayıt eklenir.

İletişim formunda `ContactForm` arayüzü oluşturur, `useContactForm` form durumunu ve gönderim akışını yönetir, `validators.ts` alanları kontrol eder. `contactService.ts`, case study sunucu bağlantısı istemediği için gönderimi taklit eder.

Tekrar kullanılan davranışlar (kaydırınca beliren animasyon, menüdeki aktif bölüm gibi) `src/hooks/` altında özel hook'lara ayrılmıştır. Ortak TypeScript tipleri `src/types/`, biçimlendirme ve yardımcı fonksiyonlar `src/utils/` altında yer alır.

Doğrulama kuralları, fiyat biçimlendirme ve sınıf birleştirme gibi saf fonksiyonlar Vitest ile test edilir. Test dosyaları, test ettikleri dosyanın yanında durur (`validators.ts` ile `validators.test.ts` gibi).

## İletişim Formu

Form `noValidate` ile işaretlidir; kontrol tarayıcının varsayılan balonları yerine uygulamanın kendi kuralları ve Türkçe mesajlarıyla yapılır.

| Alan | Kural |
|---|---|
| Ad | Boş olamaz, en az 2 karakter |
| E-posta | Boş olamaz, geçerli e-posta biçiminde olmalı |
| Mesaj | Boş olamaz, en az 10 karakter |

- Bir alana yazılıp başka alana geçildiğinde o alan hemen kontrol edilir ve hata alanın altında gösterilir. Boş bırakılan alan bu aşamada uyarılmaz, o gönderimde kontrol edilir.
- Gönder'e basıldığında üç alan da kontrol edilir.
- Kullanıcı bir alanı düzeltmeye başlayınca o alanın hatası kaybolur.
- Geçerli gönderimde buton "Gönderiliyor..." durumuna geçer, kısa bir gecikmeden sonra başarı mesajı çıkar ve form temizlenir.
- Sunucu olmadığı için gönderim `contactService.ts` içinde taklit edilir (800 ms gecikme).

## Erişilebilirlik

- **Anlamlı yapı:** Sayfa `header`, `nav`, `main`, `section`, `footer` ve `article` gibi anlamlı HTML etiketleriyle kurulu. Sayfa dili `tr` olarak belirtilmiş, üç menünün her birinin ayrı bir adı var (Ana menü, Mobil menü, Alt menü).
- **Klavye ve ekran okuyucu:** Mobil menü düğmesi açık mı kapalı mı olduğunu bildirir (`aria-expanded`). Menü kapalıyken hem klavye odağından hem ekran okuyuculardan gizlenir. Menüde o an bulunulan bölüm `aria-current` ile işaretlenir.
- **Form:** Her alanın etiketi alanla bağlıdır. Hatalar ilgili alana bağlanır (`aria-invalid`, `aria-describedby`), başarı mesajı `role="status"`, hata mesajı `role="alert"` ile duyurulur.
- **Görseller:** Ürün ve hikâye fotoğraflarında açıklayıcı alt metin var. Süs amaçlı hero fotoğrafı, duman ve ikonlar ekran okuyuculardan gizlenir.
- **Hareket hassasiyeti:** İşletim sisteminde "hareketi azalt" açıksa animasyonlar ve yumuşak kaydırma kapanır (`prefers-reduced-motion`).
- **Dokunma ve odak:** Mobilde butonlar ve menü linkleri en az 44 px yüksekliktedir. Butonlarda ve form alanlarında belirgin bir odak çerçevesi vardır; diğer linklerde tarayıcının varsayılan odak çerçevesi korunur.

## Performans

- **Hafif görseller:** Fotoğraflar WebP biçiminde ve ekranda gösterildikleri boyuta göre küçültüldü. En büyüğü olan hero görseli yaklaşık 260 KB.
- **Gerektiğinde yüklenen görseller:** Sayfanın en üstündeki hero görseli hemen yüklenir. Diğerleri ekrana yaklaşınca yüklenir (`loading="lazy"`).
- **Hızlı açılan yazılar:** Yazı tipleri yüklenirken metin önce sistem fontuyla görünür, yazı tipi gelince değişir (`display=swap`). Sayfa boş beklemez.
- **Akıcı animasyonlar:** Animasyonlar yalnızca saydamlık ve konum değişikliği kullanır. Kaydırınca beliren öğeler ve menüdeki aktif bölüm `IntersectionObserver` ile takip edilir, yani sayfayı her kaydırışta ağır bir kod çalışmaz.

## Kullanılan Araçlar

- **Visual Studio Code:** Kod takibi ve düzenleme.
- **Git:** Sürüm kontrolü.
- **Unsplash:** Ücretsiz fotoğraflar.
- **Claude Code:** Yapay zekâ destekli geliştirme asistanı.

## Görseller

Fotoğraflar [Unsplash](https://unsplash.com) üzerinden, Türk Kahvesi görseli yapay zekâ ile hazırlanmıştır.

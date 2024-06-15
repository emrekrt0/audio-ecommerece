# Audio E-Commerce Platform

Audio E-Commerce Platform, kullanıcıların yüksek kaliteli ses ekipmanlarını kolayca bulup satın alabilecekleri, kullanıcı dostu bir e-ticaret platformudur.

## Proje Detayları

### Çoklu Dil Desteği
- **Dil Seçimi:** Kullanıcılar siteyi İngilizce veya Türkçe olarak görüntüleyebilirler.
- **Dil Tercihinin Saklanması:** Seçilen dil tercihi, kullanıcı deneyimini artırmak için tarayıcı ön belleğinde `localStorage` kullanılarak saklanmaktadır. Böylece kullanıcılar siteye tekrar girdiklerinde tercih ettikleri dil otomatik olarak yüklenir.
- **Dil Değiştirme:** Dil değiştirme işlemi, kullanıcı arayüzünde bulunan dil seçici (dropdown) aracılığıyla yapılır.

### Supabase Entegrasyonu
- **Veri Yönetimi:** Ürünler ve ürünlere ait bilgiler Supabase'den çekilip gösterilmektedir. Bu entegrasyon sayesinde veriler güvenli ve verimli bir şekilde yönetilmektedir.
- **Kimlik Doğrulama:** Kullanıcıların kimlik doğrulama işlemleri de Supabase aracılığıyla yapılacaktır (gelecek sürümlerde).
- **Gerçek Zamanlı Veri Güncellemeleri:** Supabase'in gerçek zamanlı veritabanı özellikleri sayesinde ürün bilgileri anında güncellenebilir ve kullanıcıya yansıtılabilir.

### Modern ve Şık Tasarım
- **Kullanıcı Arayüzü:** Kullanıcı deneyimini ön planda tutan modern ve estetik bir arayüz tasarlandı. Kullanıcılar, görsel olarak hoş bir ortamda alışveriş yapabiliyorlar.
- **Responsive Tasarım:** Platform, mobil cihazlar ve tabletler dahil olmak üzere her türlü ekranda düzgün çalışacak şekilde responsive olarak tasarlanmıştır.
- **Ürün Kartları:** Ürünler, kullanıcı dostu ürün kartları şeklinde sunulmakta ve detaylı bilgi için ürün sayfasına yönlendirme yapılmaktadır.

### Kullanıcı Deneyimi
- **Kolay Navigasyon:** Kullanıcıların site içinde rahatça gezinebilmeleri için sade ve anlaşılır bir navigasyon yapısı oluşturulmuştur.
- **Arama ve Filtreleme:** Kullanıcılar, aradıkları ürünleri kolayca bulabilmek için arama ve filtreleme özelliklerini kullanabilirler (gelecek sürümlerde).
- **Yüksek Performans:** Sayfa yükleme sürelerini minimize etmek için optimizasyon teknikleri kullanılmıştır.

## Mevcut Fonksiyonlar
- **Dil Seçimi:** Kullanıcılar siteyi İngilizce veya Türkçe olarak görüntüleyebilirler.
- **Dil Tercihinin Saklanması:** Seçilen dil tercihi `localStorage` kullanılarak saklanır ve otomatik olarak yüklenir.
- **Ürün Gösterimi:** Ürünler ve detayları Supabase üzerinden çekilip kullanıcıya gösterilmektedir.
- **Responsive Tasarım:** Her türlü cihazda düzgün çalışacak şekilde tasarlanmıştır.

## Gelecek Planlar
- **Kayıt Olma:** Kullanıcıların hesap oluşturabilmesi sağlanacak.
- **Üye Girişi:** Kullanıcıların hesaplarına giriş yapabilmesi sağlanacak.
- **Sepete Ürün Ekleme:** Kullanıcılar ürünleri alışveriş sepetine ekleyebilecekler.
- **Dinamik ve Fonksiyonel Sepet:** Alışveriş sepeti tamamen dinamik ve fonksiyonel hale getirilecek.
- **Favori Listesi:** Kullanıcıların favori ürünlerini kaydedebileceği bir özellik eklenecek.
- **Arama ve Filtreleme:** Kullanıcıların ürünleri arayıp filtreleyebilmesi sağlanacak.

---

# Audio E-Commerce Platform

Audio E-Commerce Platform is a user-friendly e-commerce platform where users can easily find and purchase high-quality audio equipment.

## Project Details

### Multi-Language Support
- **Language Selection:** Users can view the site in English or Turkish.
- **Language Preference Storage:** The selected language preference is stored in the browser's `localStorage` to enhance the user experience. Thus, when users revisit the site, their preferred language is automatically loaded.
- **Language Switching:** The language switching process is handled through a language selector (dropdown) in the user interface.

### Supabase Integration
- **Data Management:** Products and product information are fetched and displayed from Supabase. This integration ensures secure and efficient data management.
- **Authentication:** User authentication will be handled through Supabase (in future versions).
- **Real-Time Data Updates:** Supabase's real-time database features allow product information to be instantly updated and reflected to the user.

### Modern and Sleek Design
- **User Interface:** A modern and aesthetic interface prioritizes user experience, allowing users to shop in a visually appealing environment.
- **Responsive Design:** The platform is designed to work seamlessly on all devices, including mobile phones and tablets.
- **Product Cards:** Products are presented as user-friendly product cards and redirect to the product page for detailed information.

### User Experience
- **Easy Navigation:** A simple and intuitive navigation structure has been created to allow users to easily browse the site.
- **Search and Filtering:** Users can easily find the products they are looking for using search and filtering features (in future versions).
- **High Performance:** Optimization techniques are used to minimize page load times.

## Current Features
- **Language Selection:** Users can view the site in English or Turkish.
- **Language Preference Storage:** The selected language preference is stored in `localStorage` and automatically loaded.
- **Product Display:** Products and their details are fetched from Supabase and displayed to the user.
- **Responsive Design:** Designed to work seamlessly on all devices.

## Future Plans
- **User Registration:** Allow users to create accounts.
- **Member Login:** Enable users to log into their accounts.
- **Add to Cart:** Users can add products to their shopping cart.
- **Dynamic and Functional Cart:** Make the shopping cart fully dynamic and functional.
- **Wishlist:** Implement a wishlist feature where users can save their favorite products.
- **Search and Filtering:** Enable users to search and filter products.


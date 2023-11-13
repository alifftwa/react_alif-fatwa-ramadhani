Rangkuman Materi React Routing - Bagian 1: Routes Learning

1. **Pengenalan Routes:**

   - Routing dalam aplikasi React adalah proses menentukan bagaimana tampilan atau komponen akan ditampilkan berdasarkan URL atau rute tertentu.
   - React Router adalah pustaka populer yang digunakan untuk mengelola routing dalam aplikasi React.

2. **React Router Dom:**

   - React Router menyediakan pustaka "react-router-dom" untuk menangani routing dalam pengembangan aplikasi web.
   - Instalasi pustaka dapat dilakukan melalui manajer paket seperti npm atau yarn.

3. **Komponen Route:**

   - Komponen dasar dari React Router adalah `<Route>`. Ini digunakan untuk mencocokkan suatu rute tertentu dengan komponen yang akan dirender ketika rute tersebut cocok.
   - Contoh penggunaan: `<Route path="/about" component={About} />`

4. **Nested Routes:**

   - Memungkinkan penataan hirarki komponen yang sesuai dengan struktur rute dalam aplikasi.
   - Komponen yang cocok dengan rute induk dapat menampilkan komponen yang cocok dengan rute anak.

5. **Navigasi:**

   - React Router menyediakan komponen `<Link>` untuk membuat tautan (link) yang memungkinkan navigasi tanpa memuat ulang halaman.
   - `<NavLink>` adalah variasi dari `<Link>` yang memungkinkan penyesuaian gaya terhadap tautan yang aktif.

6. **Parameter Rute:**

   - Memungkinkan penanganan dinamis rute dengan menambahkan parameter ke dalam pola rute.
   - Contoh: `<Route path="/user/:id" component={UserProfile} />` di mana ":id" adalah parameter yang dapat diakses dari properti match.

7. **Programmatic Navigation:**

   - Menggunakan objek `history` yang disediakan oleh React Router untuk melakukan navigasi secara programmatic.
   - Contoh: `history.push('/new-page')` untuk beralih ke halaman baru.

8. **Route Guards:**

   - Menerapkan perlindungan rute untuk mengontrol akses ke halaman tertentu berdasarkan kondisi tertentu.
   - Contoh: Mengecek apakah pengguna sudah login sebelum mengizinkan akses ke halaman tertentu.

9. **Route Animations:**

   - Menambahkan efek animasi ketika berpindah antar halaman dengan menggunakan library animasi atau CSS transition.

10. **404 Handling:**
    - Menangani rute yang tidak ditemukan dengan menetapkan rute "catch-all" yang akan diaktifkan jika tidak ada rute yang cocok.

Mengerti konsep-konsep di atas membekali pengembang dengan kemampuan untuk merancang dan mengelola routing dalam aplikasi React dengan React Router Dom. Hal ini memungkinkan pengembangan aplikasi web yang lebih dinamis dan terstruktur.

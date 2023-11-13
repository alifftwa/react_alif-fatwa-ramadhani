Rangkuman Materi React Routing (React Router Version 6):

1. **React Router Version 6:**

   - **Pengenalan:**

     - React Router adalah pustaka routing yang populer untuk aplikasi React.
     - Versi 6 adalah pembaruan besar yang menghadirkan perubahan signifikan dalam API dan paradigma routing.

   - **Pengaturan Awal:**

     - Menginstal React Router v6 menggunakan npm atau yarn.
     - Menggunakan komponen `BrowserRouter` sebagai pembungkus aplikasi untuk mendukung routing.

   - **Komponen React Router:**

     - **`<Route>`:**

       - Digunakan untuk menentukan rute dan tindakan yang sesuai.
       - Menerima properti `path` untuk menentukan pola URL yang sesuai.
       - Menggunakan properti `element` untuk menentukan elemen yang akan dirender ketika rute sesuai.

     - **`<Routes>`:**

       - Menangani kumpulan rute dalam aplikasi.
       - Setiap elemen `<Route>` ditempatkan di dalam `<Routes>` untuk mendefinisikan rute-rute tersebut.

     - **`<Link>` dan `<NavLink>`:**
       - `<Link>` digunakan untuk membuat tautan (link) antar halaman tanpa memuat ulang seluruh aplikasi.
       - `<NavLink>` adalah versi aktif dari `<Link>`, menawarkan kemampuan untuk menandai tautan yang sesuai dengan rute saat ini.

   - **Parameter Rute dan Nesting:**

     - Mendefinisikan parameter rute untuk menangkap nilai dinamis dari URL.
     - Menetapkan rute bersarang untuk mengatur struktur hierarki di dalam aplikasi.

   - **Navigasi dan Redireksi:**

     - Menggunakan fungsi `useNavigate` untuk navigasi programatik.
     - Menggunakan komponen `<Navigate>` untuk meredirect ke rute lain.

   - **Penggunaan Hooks:**

     - Menggunakan hook `useParams` untuk mengakses parameter rute.
     - Menggunakan hook `useNavigate` untuk mendapatkan fungsi navigasi.

   - **Perubahan Signifikan dari Versi Sebelumnya:**

     - Tidak lagi menggunakan komponen `Switch`.
     - Pengenalan konsep rute bersarang dengan `<Routes>`.
     - Perubahan penamaan beberapa hook, seperti `useHistory` menjadi `useNavigate`.

   - **Implementasi Lazy Loading:**
     - Menggunakan dynamic `import()` untuk memuat komponen rute secara lazy, meningkatkan performa dengan memuat hanya saat dibutuhkan.

Versi 6 dari React Router memperkenalkan perubahan yang signifikan dalam API dan memberikan lebih banyak kontrol serta fleksibilitas dalam penanganan routing dalam aplikasi React. Para pengembang perlu memahami perbedaan tersebut untuk memanfaatkan kemampuan baru dan memperbarui proyek-proyek mereka sesuai kebutuhan.

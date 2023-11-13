**Rangkuman Materi React Routing:**

1. **Hook Routing React:**

   - **Pengenalan React Router:**

     - React Router adalah pustaka yang digunakan untuk menangani navigasi dan routing dalam aplikasi React.
     - Memungkinkan penggunaan URL untuk menentukan tampilan yang harus ditampilkan.

   - **Komponen React Router:**

     - `BrowserRouter`: Membungkus aplikasi dan menyediakan konteks untuk menggunakan React Router.
     - `Route`: Mendefinisikan rute dalam aplikasi dan menentukan komponen yang harus dirender ketika rute tertentu diakses.
     - `Link`: Membuat tautan untuk berpindah antar rute tanpa me-refresh halaman.
     - `Switch`: Mengelilingi elemen-elemen `Route` dan memastikan hanya satu komponen yang dirender sesuai dengan rute pertama yang cocok.

   - **Navigasi dan Parameter Rute:**

     - Penggunaan `Link` untuk membuat tautan dan `to` prop untuk menentukan rute tujuan.
     - Penggunaan parameter rute (`:parameter`) untuk menangkap nilai dinamis dalam URL.
     - Pengaksesan parameter rute menggunakan `useParams` hook.

   - **Navigasi Programatik:**

     - Penggunaan `useHistory` hook untuk mendapatkan objek `history` dan melakukan navigasi programatik.
     - Metode `push` dan `replace` untuk menambah atau mengganti entri dalam riwayat navigasi.

   - **Rute Bersyarat (Conditional Routes):**

     - Penetapan rute yang hanya diaktifkan atau dirender berdasarkan kondisi tertentu.
     - Menggunakan logika JavaScript di dalam komponen atau menggunakan `render` prop pada elemen `Route`.

   - **Penggunaan NavLink:**

     - Mirip dengan `Link`, tetapi memungkinkan pengaturan kelas CSS khusus untuk tautan aktif.
     - Berguna untuk menandai atau memberi gaya tautan yang sesuai dengan rute aktif.

   - **Penggunaan Redirect:**

     - Mengarahkan pengguna ke rute tertentu jika kriteria tertentu terpenuhi.
     - Digunakan untuk mengelola otentikasi atau pengecualian lainnya.

   - **Pengelolaan Animasi dengan `react-transition-group`:**
     - Menerapkan animasi ketika komponen berpindah atau dimount/dismount.
     - Menggunakan `CSSTransition` dari pustaka `react-transition-group`.

   React Router memfasilitasi pengelolaan navigasi dan routing dalam aplikasi React, memungkinkan pembuatan antarmuka pengguna yang dinamis dan ramah pengguna. Penggunaan hook seperti `useHistory` dan `useParams` membantu dalam menangani navigasi dan parameter rute dengan mudah.

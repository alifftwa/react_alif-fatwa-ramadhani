**Global State Management and Data Fetching in React:**

1. **Data Fetching:**

   - **AJAX Requests:** Menggunakan teknik Asynchronous JavaScript and XML (AJAX) untuk mengambil data dari server tanpa mereload seluruh halaman.
   - **Fetch API:** Memanfaatkan Fetch API untuk melakukan permintaan HTTP dan menangani respons, mempermudah proses pengambilan data.
   - **Async/Await:** Penggunaan async/await untuk menangani kode asynchronous dengan lebih bersih dan mudah dimengerti.
   - **Promises:** Penggunaan promises untuk menangani data asynchronously, memastikan pemrosesan data yang konsisten.

2. **Global State Management:**

   - **State Management Challenges:** Memahami tantangan pengelolaan state di aplikasi yang kompleks dan bagaimana mempertahankan keberlanjutan dan konsistensi state.
   - **Context API:** Menggunakan Context API di React untuk membagikan state secara global di seluruh komponen tanpa prop drilling.
   - **Redux:** Penggunaan Redux sebagai pustaka manajemen state eksternal yang kuat, yang menyediakan store global untuk menyimpan dan mengelola state aplikasi.
   - **Actions, Reducers, Store:** Memahami konsep dasar Redux seperti actions (aksi yang diinisiasi), reducers (fungsi yang mengelola perubahan state), dan store (tempat penyimpanan state).

3. **Data Fetching with Global State:**

   - **Redux Thunk:** Menggunakan middleware Redux Thunk untuk mengelola aksi asynchronous di Redux.
   - **Async Actions:** Menerapkan aksi asynchronous dalam Redux untuk melakukan pengambilan data dan pembaruan state aplikasi secara dinamis.
   - **Caching and Memoization:** Strategi caching untuk menyimpan data yang telah diambil sebelumnya dan memoisasi untuk mengoptimalkan performa aplikasi.

4. **Connecting Components to Global State:**

   - **`connect` Function (React-Redux):** Menghubungkan komponen React ke store Redux menggunakan `connect` function untuk mengakses dan memodifikasi state global.
   - **Provider Component:** Membungkus aplikasi dengan `Provider` component dari React-Redux untuk menyediakan store ke seluruh komponen.

5. **Optimizing Data Fetching:**
   - **Pagination:** Mengimplementasikan teknik penomoran halaman untuk mengurangi jumlah data yang diambil sekaligus.
   - **Lazy Loading:** Menggunakan lazy loading untuk memuat data hanya saat diperlukan, meningkatkan efisiensi aplikasi.
   - **Optimistic Updates:** Menangani pembaruan optimistik di UI sebelum menerima konfirmasi dari server, memberikan respons yang lebih cepat kepada pengguna.

Konsep-konsep ini membentuk dasar untuk pengelolaan state dan pengambilan data yang efektif dan skalabel di aplikasi React, memastikan konsistensi dan performa yang baik.

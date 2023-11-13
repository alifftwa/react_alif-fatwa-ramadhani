**Rangkuman Materi: Global State Management and Data Fetching dengan Redux Thunk:**

**1. Global State Management:**

- Global state management adalah konsep di mana state aplikasi disimpan secara global, sehingga dapat diakses dan dimutakhirkan dari berbagai komponen tanpa perlu melewati prop secara berlebihan.
- Redux adalah salah satu pustaka yang umum digunakan untuk manajemen state global dalam aplikasi React.

**2. Redux Thunk:**

- Redux Thunk adalah middleware untuk Redux yang memungkinkan pengelolaan aksi asynchronous (contoh: permintaan data API) dan kompleks di dalam aplikasi Redux.
- Middleware adalah lapisan perantara yang dapat memproses dan memodifikasi aksi sebelum mencapai reducer.

**Cara Kerja Redux Thunk:**

- Redux Thunk memungkinkan aksi Redux untuk tidak hanya berupa objek, tetapi juga dapat berupa fungsi.
- Fungsi-fungsi ini dapat melakukan operasi asynchronous, seperti permintaan ke server, dan mendispatch aksi lain berdasarkan hasil dari operasi tersebut.
- Redux Thunk memberikan akses ke fungsi `dispatch` dan `getState`, yang memungkinkan kita untuk memproses data, mengelola state, dan mengirimkan aksi ke store secara asynchronous.

**Contoh Penggunaan Redux Thunk:**

- Mendefinisikan aksi asynchronous menggunakan fungsi Redux Thunk. Contoh: `fetchData()`.
- Fungsi ini dapat menggunakan `dispatch` untuk mengirim aksi seperti `FETCH_DATA_REQUEST`, `FETCH_DATA_SUCCESS`, atau `FETCH_DATA_FAILURE` sesuai dengan status permintaan data.
- Middleware Redux Thunk akan menangkap fungsi ini dan mengeksekusinya, memungkinkan proses asynchronous dan pembaruan state global yang sesuai.

**Manfaat Redux Thunk:**

- Memisahkan logika asynchronous dari komponen, menjadikannya lebih terorganisir.
- Memungkinkan penanganan permintaan data secara efisien, dengan kemampuan untuk menanggapi berbagai kondisi, seperti sukses atau kegagalan dalam pengambilan data.

**Kesimpulan:**
Redux Thunk memperluas fungsionalitas Redux dengan menambahkan kemampuan untuk menangani operasi asynchronous, seperti pengambilan data dari API. Ini memberikan cara yang efektif untuk mengelola state global dan data fetching dalam aplikasi React yang kompleks.

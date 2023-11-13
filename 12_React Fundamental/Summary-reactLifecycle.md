Rangkuman Materi React Fundamental - React Lifecycle:

1. **React Lifecycle:**

   - React Lifecycle menggambarkan siklus hidup suatu komponen React, yaitu perjalanan dari pembuatan hingga penghancuran.
   - Tiga tahapan utama dalam siklus hidup komponen React:

     - **Mounting:** Tahap pertama saat komponen dibuat dan ditambahkan ke DOM.
       - `constructor`: Dipanggil saat komponen pertama kali dibuat.
       - `render`: Mengembalikan elemen React yang akan dirender.
       - `componentDidMount`: Dipanggil setelah komponen berhasil dirender di DOM.
     - **Updating:** Tahap saat komponen diperbarui sebagai respons terhadap perubahan prop atau state.
       - `shouldComponentUpdate`: Menentukan apakah pembaharuan komponen diperlukan.
       - `render`: Mengembalikan elemen React yang diperbarui.
       - `componentDidUpdate`: Dipanggil setelah komponen diperbarui di DOM.
     - **Unmounting:** Tahap saat komponen dihapus dari DOM.
       - `componentWillUnmount`: Dipanggil sebelum komponen dihapus dari DOM.

   - **Metode Pembantu (Helper Methods):**

     - `static getDerivedStateFromProps`: Digunakan untuk menghitung state dari prop yang diterima.
     - `shouldComponentUpdate`: Mengoptimalkan performa dengan menentukan apakah pembaruan diperlukan.
     - `getSnapshotBeforeUpdate`: Mengambil gambaran sebelum pembaruan untuk menyimpan data saat ini.

   - **Metode Lainnya:**

     - `componentDidCatch`: Digunakan untuk menangani kesalahan yang terjadi pada turunan komponen.
     - `componentDidUpdate`: Dipanggil setelah komponen diperbarui di DOM.
     - `componentWillReceiveProps`: Kedaluwarsa dan digantikan oleh `getDerivedStateFromProps`.

   - **Perubahan dalam React 17 dan selanjutnya:**

     - `componentWillUnmount`, `componentWillReceiveProps`, dan metode lainnya akan ditinggalkan.
     - Fokus pada metode yang lebih aman dan dapat diprediksi.

   - **Manfaat Siklus Hidup:**
     - Mengelola logika sepanjang siklus hidup komponen.
     - Memungkinkan kontrol atas tindakan yang diambil saat suatu komponen dipasang, diperbarui, atau dihapus.

   Materi ini membahas berbagai metode siklus hidup yang dapat digunakan untuk mengontrol perilaku komponen React pada berbagai tahap dalam siklus hidupnya. Pemahaman ini membantu pengembang mengoptimalkan dan mengelola efisiensi aplikasi React mereka.

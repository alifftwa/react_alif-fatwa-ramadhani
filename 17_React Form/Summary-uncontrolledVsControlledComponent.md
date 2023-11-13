Rangkuman Materi React Form:

1. **Uncontrolled Component:**

   - **Definisi:** Komponen formulir di React dapat dianggap sebagai "tidak terkendali" ketika nilai input tidak sepenuhnya dikontrol oleh React.
   - **Implementasi:** Nilai input disimpan secara lokal oleh DOM, dan React tidak memiliki wewenang langsung atas nilai tersebut.
   - **Keuntungan:** Sesuai untuk implementasi yang sederhana atau ketika kontrol tingkat rendah terhadap nilai input diperlukan.

2. **Controlled Component:**

   - **Definisi:** Komponen formulir dianggap "terkendali" ketika nilai input sepenuhnya dikendalikan oleh state React.
   - **Implementasi:** Nilai input dihubungkan dengan state React, dan perubahan nilai diinput diupdate melalui fungsi setState().
   - **Keuntungan:** Memberikan kontrol penuh terhadap nilai input, memungkinkan validasi, manipulasi, dan sinkronisasi yang lebih baik antara state dan antarmuka pengguna.

3. **Apa yang Membuat Element "Controlled":**
   - **State React:** Nilai input dihubungkan dengan state React, sehingga setiap perubahan nilai diinput menyebabkan perubahan state.
   - **Event Handlers:** Menggunakan event handlers seperti `onChange` untuk menangani perubahan nilai input dan memperbarui state secara dinamis.
   - **Keuntungan:**
     - Kontrol penuh terhadap nilai input.
     - Kemampuan untuk melakukan validasi sebelum pembaruan state.
     - Lebih mudah untuk menyinkronkan antara tampilan dan nilai state.

Menggunakan komponen terkendali dalam formulir React memungkinkan pengembang memiliki kontrol penuh terhadap data input, mempermudah validasi, manipulasi, dan pemeliharaan nilai input. Pendekatan ini lebih sering digunakan dalam pengembangan aplikasi React yang lebih besar dan kompleks karena memberikan fleksibilitas dan pemeliharaan yang lebih baik atas nilai formulir.

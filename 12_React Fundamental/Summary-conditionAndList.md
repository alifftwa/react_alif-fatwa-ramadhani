Rangkuman Materi React Fundamental:

1. **Render Bersyarat:**

   - Menggunakan kondisional (if statements atau ternary expressions) dalam JSX untuk mengatur apakah suatu elemen atau komponen harus dirender berdasarkan kondisi tertentu.
   - Contoh:
     ```jsx
     {
       isUserLoggedIn ? <WelcomeUser /> : <Login />;
     }
     ```
   - `isUserLoggedIn` adalah contoh kondisi yang menentukan apakah komponen `<WelcomeUser />` atau `<Login />` akan dirender.

2. **Render List:**

   - Memetakan elemen-elemen dalam array ke elemen-elemen React untuk membuat daftar elemen secara dinamis.
   - Menggunakan metode `map()` untuk mengiterasi melalui setiap elemen dalam array dan mengembalikan elemen baru.
   - Contoh:
     ```jsx
     const numbers = [1, 2, 3, 4, 5];
     const listItems = numbers.map((number) => <li key={number}>{number}</li>);
     ```
   - Kunci (`key`) digunakan untuk memberikan identitas unik pada setiap elemen dalam daftar, membantu React melakukan reconciling dengan efisien.

3. **Key:**
   - Kunci (`key`) digunakan untuk memberikan identitas unik pada setiap elemen dalam daftar, membantu React melakukan reconciling dengan efisien.
   - Diperlukan ketika merender daftar elemen dinamis untuk memastikan React dapat memahami perubahan yang terjadi pada elemen dan merender ulang hanya elemen yang diperlukan.
   - Contoh:
     ```jsx
     const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
     ```
   - Kunci sebaiknya bersifat stabil, unik, dan terhubung langsung dengan data yang dirender.

Materi ini membahas konsep dasar dalam merender elemen secara bersyarat, membuat daftar elemen secara dinamis menggunakan `map()`, dan penggunaan kunci (`key`) untuk meningkatkan efisiensi rendering. Konsep ini penting dalam pengembangan aplikasi React yang dinamis dan responsif.

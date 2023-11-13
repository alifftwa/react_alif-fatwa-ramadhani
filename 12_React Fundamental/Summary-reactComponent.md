Rangkuman Materi React Fundamental:

1. **Apa itu Component:**

   - **Komponen** adalah blok dasar pembangunan dalam React yang dapat memetakan bagian kecil dari antarmuka pengguna (UI).
   - Merepresentasikan bagian spesifik dari aplikasi dan dapat bersifat reusable.

2. **Membagi UI Menjadi Beberapa Komponen:**

   - Prinsip dasar React adalah membagi UI menjadi komponen-komponen kecil dan independen.
   - Memecah kompleksitas tampilan menjadi bagian yang lebih kecil membuat pengembangan dan pemeliharaan kode menjadi lebih mudah.

3. **Function and Class Component:**

   - **Function Component:** Komponen yang didefinisikan sebagai fungsi JavaScript. Mengembalikan elemen React menggunakan JSX.
   - **Class Component:** Komponen yang didefinisikan sebagai kelas JavaScript, yang meng-extend dari `React.Component`. Memiliki lifecycle methods dan state.

4. **Membuat & Merender Component:**

   - **Membuat Component:** Gunakan sintaks JSX untuk membuat komponen. Contoh:

     ```jsx
     function Welcome(props) {
       return <h1>Hello, {props.name}</h1>;
     }
     ```

   - **Merender Component:** Memanggil komponen tersebut di dalam komponen lain atau di dalam file JavaScript yang terpisah.

     ```jsx
     function App() {
       return (
         <div>
           <Welcome name="John" />
           <Welcome name="Doe" />
         </div>
       );
     }
     ```

   - **Props:** Data yang dikirimkan dari komponen induk ke komponen anak sebagai atribut. Digunakan untuk mentransfer informasi antar komponen.

Materi React Fundamental ini menunjukkan bahwa React membangun antarmuka pengguna melalui komponen-komponen yang dapat digunakan kembali, mempermudah pengelolaan UI dan logika aplikasi. Komponen dapat didefinisikan sebagai fungsi atau kelas, dan komunikasi antar komponen dapat dilakukan melalui penggunaan `props`.

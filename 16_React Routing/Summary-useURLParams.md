**React Routing dengan URL Parameter:**

1. **React Router:**

   - React Router adalah pustaka yang umum digunakan untuk menangani routing dalam aplikasi React.
   - Memungkinkan pengembang untuk menentukan bagaimana komponen-komponen React terkait dengan URL.

2. **Menggunakan URL Parameter:**

   - URL parameter adalah bagian dari URL yang dapat diubah dinamis dan digunakan untuk mengirim data ke halaman atau komponen React.
   - Contoh URL parameter: `/users/:id`, di mana `:id` adalah parameter yang dapat diubah nilainya.

3. **Definisi Rute dengan Parameter:**

   - Menentukan rute dengan parameter menggunakan tanda titik dua dan nama parameter dalam path, contohnya: `<Route path="/users/:id" component={UserDetail} />`.

4. **Mengakses Parameter di Komponen:**

   - Menggunakan `useParams` hook dari React Router untuk mengakses nilai parameter dalam komponen.
   - Contoh:

     ```javascript
     import { useParams } from "react-router-dom";

     function UserDetail() {
       let { id } = useParams();
       // Gunakan nilai id sesuai kebutuhan dalam komponen
     }
     ```

5. **Navigasi dengan Parameter:**

   - Menggunakan fungsi navigasi, seperti `Link` atau `history.push`, untuk berpindah antara halaman dengan menyertakan parameter.
   - Contoh:

     ```javascript
     import { Link } from "react-router-dom";

     function UserProfile() {
       return <Link to="/users/123">Lihat Profil</Link>;
     }
     ```

6. **Manfaat URL Parameter:**
   - URL parameter memungkinkan pengembang untuk membuat halaman dinamis yang mengambil data sesuai dengan nilai parameter yang diberikan.
   - Berguna untuk halaman detail, pencarian, atau fitur yang memerlukan identifikasi unik.

Dengan menggunakan URL parameter dalam React Routing, pengembang dapat membuat aplikasi yang lebih dinamis dan responsif, memungkinkan navigasi yang lebih fleksibel dan menyesuaikan tampilan halaman berdasarkan data yang diterima dari URL.

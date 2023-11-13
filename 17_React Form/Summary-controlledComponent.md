Rangkuman Materi React Form:

1. **Controlled Component:**

   - Controlled Components dalam React mengikat nilai elemen formulir (seperti input, textarea, dan select) dengan state komponen.
   - Nilai elemen formulir diatur oleh state, dan perubahan pada elemen formulir memicu perubahan pada state, dan sebaliknya.
   - Menerapkan pendekatan ini memungkinkan React mengelola state formulir dan membuat formulir menjadi "terkendali".

2. **Tag Textarea:**

   - `<textarea>` digunakan untuk membuat area teks multiline dalam formulir.
   - Seperti elemen input, `<textarea>` dapat dikendalikan dengan menggunakan state React untuk mengatur dan melacak nilai yang dimasukkan oleh pengguna.

3. **Tag Select:**

   - `<select>` digunakan untuk membuat elemen dropdown dalam formulir.
   - Tag ini dapat memiliki beberapa elemen `<option>`, dan nilai yang dipilih dapat dikendalikan menggunakan state React.
   - Perubahan pada elemen `<select>` memicu pembaruan pada state dan sebaliknya.

4. **Handle Banyak Input:**

   - Kadang-kadang, formulir memiliki banyak input yang harus dielola bersama-sama.
   - Menggunakan satu state untuk menyimpan nilai dari semua input tersebut dan menangani perubahan pada setiap input dengan satu fungsi handler dapat membantu menyederhanakan kode.
   - Contoh:

     ```jsx
     const [formData, setFormData] = useState({
       username: "",
       password: "",
       email: "",
     });

     const handleInputChange = (e) => {
       const { name, value } = e.target;
       setFormData({
         ...formData,
         [name]: value,
       });
     };
     ```

   - Dengan pendekatan ini, perubahan pada setiap input memicu pembaruan hanya pada bagian state yang relevan.

Menggunakan Controlled Components, tag `<textarea>`, tag `<select>`, dan mengelola banyak input membantu membangun formulir React yang efisien dan mudah diatur. Ini memungkinkan penggunaan state untuk melacak dan mengelola nilai formulir, serta memungkinkan respons yang mudah terhadap perubahan yang terjadi pada elemen formulir.

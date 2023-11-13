Rangkuman Materi React Testing (Create Basic Testing with RTL):

1. **Pendahuluan React Testing:**

   - React Testing adalah praktik pengujian perangkat lunak yang bertujuan memastikan bahwa aplikasi React berfungsi dengan baik dan memenuhi persyaratan fungsional.
   - Tes membantu mendeteksi dan mencegah kesalahan, memastikan keberlanjutan (regresi) perangkat lunak, dan memfasilitasi pemeliharaan kode.

2. **Create Basic Testing with RTL (React Testing Library):**

   - RTL adalah pustaka pengujian yang populer untuk aplikasi React yang menekankan pada pengujian pengguna.
   - Instalasi RTL melalui npm (`npm install --save-dev @testing-library/react`).
   - Komponen React diuji dengan menggunakan fungsi dan utilitas RTL, seperti `render` untuk merender komponen, dan `fireEvent` untuk mengirimkan peristiwa.
   - Contoh penggunaan RTL dalam membuat tes sederhana:

     ```javascript
     import { render, screen } from "@testing-library/react";
     import MyComponent from "./MyComponent";

     test("renders my component", () => {
       render(<MyComponent />);
       const element = screen.getByText("Hello, World!");
       expect(element).toBeInTheDocument();
     });
     ```

   - `render` digunakan untuk merender komponen ke dalam DOM virtual pengujian.
   - `screen` menyediakan antarmuka untuk mengakses elemen-elemen di dalam konten yang dirender.
   - `getByText` digunakan untuk mencari elemen berdasarkan teksnya.

Pada dasarnya, pengujian dengan RTL melibatkan render komponen, interaksi dengan elemen, dan memverifikasi bahwa perilaku aplikasi sesuai dengan harapan. RTL memberikan alat yang sederhana dan efektif untuk menguji komponen React secara bersih dan terfokus pada pengalaman pengguna.

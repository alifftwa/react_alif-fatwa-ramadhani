Rangkuman Materi React Fundamental: Classes dan CSS, Atribut Style, Modul CSS

1. **Classes dan CSS:**

   - React memungkinkan penggunaan kelas CSS pada elemen-elemen HTML yang didefinisikan dalam komponen.
   - Pemberian kelas ini memungkinkan penggunaan gaya CSS tradisional untuk mendesain dan memformat elemen.

2. **Atribut Style:**

   - Penggunaan atribut `style` pada elemen React memungkinkan penentuan gaya secara langsung melalui objek JavaScript.
   - Contoh:

     ```jsx
     const myStyle = {
       color: "blue",
       fontSize: "16px",
       fontWeight: "bold",
     };

     return <div style={myStyle}>Hello, World!</div>;
     ```

   - Nilai objek style dapat diatur dinamis menggunakan ekspresi JavaScript.

3. **Modul CSS:**

   - Pendekatan ini melibatkan pembuatan file CSS terpisah untuk setiap komponen.
   - Modul CSS memungkinkan penentuan gaya lokal untuk komponen tertentu, mencegah pencampuran gaya antar komponen.
   - Contoh:

     ```jsx
     // styles.module.css
     .myComponent {
       color: red;
       font-size: 18px;
     }

     // MyComponent.js
     import React from 'react';
     import styles from './styles.module.css';

     const MyComponent = () => {
       return <div className={styles.myComponent}>Hello, World!</div>;
     };
     ```

   - Penggunaan `className` dengan sintaks `styles.namaKelas` menghubungkan kelas CSS secara lokal ke komponen tersebut.

Dengan memahami konsep-konsep ini, pengembang React dapat mencapai fleksibilitas dan modularitas dalam manajemen gaya dan tata letak komponen-komponen mereka. Classes dan CSS tradisional, atribut style, dan modul CSS masing-masing memberikan cara yang berbeda untuk menangani gaya dalam pengembangan React.

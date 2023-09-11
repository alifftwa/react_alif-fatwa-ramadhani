# Clean Code

#### Apa itu Clean Code?

Clean code adalah istilah untuk kode yang mudah dibaca, dipahami dan diubah oleh programmer.

#### Kenapa "Clean Code"?

Work Collaboration, Feature Development, Faster Development

#### Karakteristik Clean Code

1. Penamaan mudah dipahami
2. Mudah dieja dan dicari
3. Singkat namun mendeskripsikan konteks
4. Konsisten
5. Hindari penambahan konteks yang tidak perlu
6. Komentar
7. Function
8. Saran Formatting:

- Lebar baris code 80-120 Karakter.
- Satu class 300-500 baris.
- Baris code yang berhubungan saling berdekatan.
- Dekatkan fungsi dengan pemanggilnya.
- Deklarasi varibale berdekatan dengan penggunanya.
- Perhatikan indentasi.
- Menggunakan prettier atau formatter.

#### "Clean Code" Principal

1. KISS (Keep It So Simple)
   Hindari membuat fungsi yang dibuat melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.

- Fungsi ata class harus kecil.
- Fungsi dibuat untuk melakukan satu tugas saja.
- Jangan gunakan terlalu banyak argumen pada fungsi.
- Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal.

2. DRY (Don't Repeat Yourself)
   Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.

- Refactoring
  Refactoring adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal prinsip KISS dan DRY bisa dicapai dengan cara refactor.

| Teknik Refactoring                   |
| :----------------------------------- |
| Membuat sebuah asbtraksi             |
| Memecah kode dengan fungsi/class     |
| Perbaiki penamaan dan lokasi kode    |
| Deteksi kode yang memiliki duplikasi |

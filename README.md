# Noted 📝

**Noted** adalah aplikasi catatan pribadi berbasis web yang dirancang untuk membantu pengguna mencatat, mengorganisir, dan menyimpan berbagai informasi, pengalaman, atau refleksi mereka. Aplikasi ini merupakan bagian dari tugas **Belajar Membuat Aplikasi Web dengan React** oleh **Dicoding** dan terinspirasi dari keresahan saya karena tidak adanya tempat curhat.

---

## Fitur Utama

1. **Membuat Catatan Baru**  
   Anda dapat membuat catatan baru dengan judul dan isi catatan.

2. **Mengedit Catatan**  
   Memungkinkan pengguna untuk memperbarui informasi pada catatan yang sudah ada.

3. **Menghapus Catatan ke Trash**  
   Catatan yang dihapus akan dipindahkan ke grup **Trash** dan tidak langsung hilang.

4. **Membuat Grup Baru**  
   Memungkinkan pengguna membuat grup baru untuk mengorganisir catatan mereka.

5. **Mengedit Grup**  
   Nama grup dapat diubah kecuali untuk grup default seperti **Favorites**, **Trash**, **Archived Notes**, dan **Recents**.

6. **Memindahkan Catatan Antar Grup**  
   Catatan dapat dipindahkan dari satu grup ke grup lainnya untuk mempermudah pengelolaan.

7. **Menghapus Grup**  
   Grup yang dihapus akan memindahkan semua catatannya ke **Trash**.

8. **Menampilkan Catatan Terbaru**  
   Grup **Recents** akan menampilkan hingga 3 catatan terakhir yang diakses.

9. **Pencarian Catatan**  
   Temukan catatan berdasarkan judul atau isi catatan menggunakan fitur pencarian.

10. **Mengurutkan Catatan**  
    Catatan dapat diurutkan berdasarkan tanggal pembuatan secara **ascending** atau **descending**.

11. **Arsip Catatan**  
    Catatan dapat dipindahkan ke grup **Archived Notes** untuk menyimpan catatan yang sudah tidak aktif.

12. **Menambahkan Catatan ke Favorit**  
    Tandai catatan penting dengan menambahkannya ke grup **Favorites**.

---

## Cara Penggunaan

1. **Instalasi**

    - Pastikan Anda telah menginstal Node.js di komputer Anda.
    - Clone repository ini:
        ```bash
        git clone <URL-REPOSITORY>
        ```
    - Masuk ke direktori proyek:
        ```bash
        cd noted-app
        ```
    - Instal dependensi:
        ```bash
        npm install
        ```

2. **Menjalankan Aplikasi**

    - Jalankan server pengembangan:
        ```bash
        npm start
        ```
    - Buka browser Anda dan akses aplikasi di `http://localhost:3000`.

3. **Menggunakan Aplikasi**
    - Gunakan tombol **New Note** untuk membuat catatan baru.
    - Klik salah satu catatan untuk melihat atau mengedit isinya.
    - Gunakan fitur pencarian di sidebar untuk menemukan catatan dengan cepat.
    - Kelola catatan Anda dengan memindahkannya antar grup, menambahkannya ke **Favorites**, atau mengarsipkannya di **Archived Notes**.

---

## Teknologi yang Digunakan

-   **React.js**: Library utama untuk membangun antarmuka pengguna.
-   **CSS/Tailwind**: Untuk styling aplikasi.
-   **JavaScript**: Bahasa pemrograman utama.

---

## Catatan Penting

Aplikasi ini mungkin masih memiliki **bug** dan keterbatasan. Beberapa fitur mungkin belum sepenuhnya dioptimalkan. Mohon beri masukan atau kontribusi jika Anda menemukan masalah atau memiliki saran untuk pengembangan aplikasi ini di masa depan.

---

## Kontribusi

Jika Anda tertarik untuk berkontribusi:

1. Fork repository ini.
2. Buat branch baru untuk fitur atau perbaikan:
    ```bash
    git checkout -b fitur-baru
    ```

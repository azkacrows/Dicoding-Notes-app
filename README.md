# Curhati 🖍

**Curhati** adalah aplikasi catatan pribadi berbasis web yang dirancang untuk membantu pengguna mencatat, mengorganisir, dan menyimpan berbagai informasi, pengalaman, atau refleksi mereka. Aplikasi ini merupakan bagian dari tugas **Belajar Membuat Aplikasi Web dengan React** oleh **Dicoding** dan terinspirasi dari keresahan saya karena tidak adanya tempat curhat.

---

## Fitur Utama

1. **Membuat Catatan Baru**  
   Anda dapat membuat catatan baru namun judul dan isi catatan bisa diubah di fitur edit catatan.

2. **Mengedit Catatan**  
   Memungkinkan pengguna untuk memperbarui informasi pada catatan yang sudah ada.

3. **Menghapus Catatan ke Trash atau Secara Permanen**  
   Catatan yang dihapus akan dipindahkan ke grup **Trash** dan tidak langsung hilang. Namun, pengguna juga dapat menghapus catatan secara permanen dari grup **Trash**.

4. **Membuat Grup Baru**  
   Memungkinkan pengguna membuat grup baru untuk mengorganisir catatan mereka.

5. **Memindahkan Catatan Antar Grup**  
   Catatan dapat dipindahkan dari satu grup ke grup lainnya untuk mempermudah pengelolaan.

6. **Menampilkan Catatan Terbaru**  
   Grup **Recents** akan menampilkan hingga 3 catatan terakhir yang diakses.

7. **Pencarian Catatan**  
   Temukan catatan berdasarkan judul atau isi catatan menggunakan fitur pencarian.

8. **Mengurutkan Catatan**  
   Catatan dapat diurutkan berdasarkan tanggal pembuatan secara **ascending** atau **descending**.

9. **Arsip Catatan**  
   Catatan dapat dipindahkan ke grup **Archived Notes** untuk menyimpan catatan yang sudah tidak aktif.

10. **Menambahkan Catatan ke Favorit**  
    Tandai catatan penting dengan menambahkannya ke grup **Favorites**.

---

## Cara Penggunaan

1. **Instalasi**

    - Pastikan Anda telah menginstal Node.js di komputer Anda.
    - Clone repository ini:
        ```bash
        git clone https://github.com/azkacrows/curhati.git
        ```
    - Masuk ke direktori proyek:
        ```bash
        cd curhati
        ```
    - Instal dependensi:
        ```bash
        npm install
        ```

2. **Menjalankan Aplikasi**

    - Jalankan server pengembangan:
        ```bash
        npm run dev
        ```
    - Buka browser Anda dan akses aplikasi di `http://localhost:5173/`.

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

## Visualisasi

### Flowchart Alur Aplikasi

Berikut adalah flowchart alur kerja aplikasi Curhati:

### Tampilan Aplikasi

Tampilan aplikasi saat ini:

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
3. Lakukan perubahan yang diperlukan.
4. Commit perubahan Anda:
    ```bash
    git commit -m "Menambahkan fitur baru"
    ```
5. Push ke branch Anda:
    ```bash
    git push origin fitur-baru
    ```
6. Buat pull request ke branch `main` repository ini.

---

## Lisensi

Proyek ini dilisensikan di bawah [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.txt).

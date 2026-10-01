//Nama: Erlangga Abidin
//Kampus: STT Terpadu Nurul Fikri



// 1. Inisialisasi array produkToko sebagai array of objects
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// 2. Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
  // Membuat id berdasarkan id produk terakhir
  const idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;

  const produkBaru = {
    id: idBaru,
    nama: nama,
    harga: harga,
    stok: stok
  };

  // Menambahkan produk baru ke dalam array produkToko
  produkToko.push(produkBaru);
  console.log(`Produk "${nama}" berhasil ditambahkan.`);
}

// 3. Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
  const jumlahAwal = produkToko.length;

  // Menggunakan filter() untuk menyaring produk selain ID yang ditentukan
  produkToko = produkToko.filter(produk => produk.id !== id);

  if (produkToko.length < jumlahAwal) {
    console.log(`Produk dengan ID ${id} berhasil dihapus.`);
  } else {
    console.log(`Produk dengan ID ${id} tidak ditemukan.`);
  }
}

// 4. Fungsi untuk menampilkan seluruh daftar produk
function tampilkanProduk() {
  console.log("\n=== DAFTAR PRODUK TOKO ===");
  if (produkToko.length === 0) {
    console.log("Tidak ada produk tersedia.");
    return;
  }

  produkToko.forEach((produk, index) => {
    console.log(
      `${index + 1}. [ID: ${produk.id}] ${produk.nama} - Rp${produk.harga.toLocaleString("id-ID")} | Stok: ${produk.stok}`
    );
  });
  console.log("===========================\n");
}


// Menampilkan daftar produk awal
tampilkanProduk();

// Menambahkan produk baru
tambahProduk("Monitor", 1500000, 4);

// Menampilkan daftar produk setelah penambahan
tampilkanProduk();

// Menghapus produk dengan ID 2 (Mouse)
hapusProduk(2);

// Menampilkan daftar produk akhir
tampilkanProduk();
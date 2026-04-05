// Subtask 2.1 Create Arrays
let angka = [1, 2, 3, 4, 5];
let nama = ["Muhib", "Ahmad", "Wildan", "Fawas"];
let daftarStatus = [true, false, true, false];
let campuran = [1, "Muhib", true, 3.14];
let matriks = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let siswa = [
	{"nama": "Muhib", "umur": 20},
	{"nama": "Ahmad", "umur": 22},
	{"nama": "Wildan", "umur": 21},
	{"nama": "Fawas", "umur": 19},
];
let salam = [
	() => console.log("Halo"),
	() => console.log("Assalamu'alaikum"),
];
salam[1]();

console.log(angka);
console.log(nama);
console.log(daftarStatus);	
console.log(campuran);
console.log(matriks);
console.log(siswa);

// Subtask 2.2 Use Array Methods

let angkaBuatPushnPop = [1, 2, 3];
angkaBuatPushnPop.push(4);
console.log("Tambah elemen di belakang: ", angkaBuatPushnPop);
angkaBuatPushnPop.pop();
console.log("Hapus elemen di terakhir: ", angkaBuatPushnPop);

let angkaBuatShiftnUnshift = [1, 2, 3];
angkaBuatShiftnUnshift.unshift(0);
console.log("Tambah elemen 0 di awal: ", angkaBuatShiftnUnshift);
angkaBuatShiftnUnshift.shift();
console.log("Hapus elemen pertama: ", angkaBuatShiftnUnshift);

let angka1sampai20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let panjang = angka1sampai20.length;
console.log("Panjang array: ", panjang);

// Step 3: Implement Objects
// Subtask 3.1 Create Objects

let kampus = {
	nama: "Taiwan Steel University of Science and Technology",
	jurusan: [
		{
			nama: "Mechanical and Automation Engineering",
			mhs: [
				{"nama": "Muhib", "umur": 20},
				{"nama": "Syahid", "umur": 22},
				{"nama": "Rahmad", "umur": 21},
			]
		},
		{
			nama: "Automated Circuit Board Engineering",
			mhs: [
				{"nama": "Bagus", "umur": 19},
				{"nama": "Yudi", "umur": 20},
				{"nama": "Rivaldi", "umur": 21},
			]
		}
	]
};

// Subtask 3.2 Access Object Properties
console.log(kampus);
console.log(kampus.nama);
console.log(kampus.jurusan[0].nama);
console.log(kampus.jurusan[1].mhs[2].nama);
console.log(kampus.jurusan[1].mhs[1].umur);

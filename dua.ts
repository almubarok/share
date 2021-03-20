function tambah2(a: number, b: number) {
  return a + b;
}

const hasil2 = tambah2(1, 2);
console.log(hasil2);

type jenis_kelamin = 'laki-laki' | 'perempuan';

interface Person {
  nama: string;
  jk: jenis_kelamin;
  umur?: number;
}

function print(obj: Person) {
  console.log(obj.nama);
}

const arafat2: Person = {
  nama: 'arafat',
  jk: 'laki-laki',
  umur: 2,
};

print(arafat2);

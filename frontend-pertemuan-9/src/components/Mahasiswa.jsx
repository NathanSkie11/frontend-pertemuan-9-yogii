function Mahasiswa({ nama, npm, prodi }) {
    return (
    <div>
   Workshop Pemrograman Web
   Nirwana Haidar Hari, S.Pd., M.Kom.
    <h3>Data Mahasiswa</h3>
    <ul>
    <li>Nama: {nama}</li>
    <li>NPM: {npm}</li>
    <li>Prodi: {prodi}</li>
    </ul>
    </div>
    );
   }
   export default Mahasiswa;
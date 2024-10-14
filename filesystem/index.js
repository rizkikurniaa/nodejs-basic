// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');

const fileReadCallback = (error, data) => {
    if (error) {
        console.error(`Gagal membaca berkas: ${error.message}`);
        return;
    }
    console.log(data);
};

fs.readFile('notes.txt', 'UTF-8', fileReadCallback);

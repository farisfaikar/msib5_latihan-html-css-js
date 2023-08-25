$(document).ready(function () {
    const addButton = $('#tambah');
    const tableBody = $('tbody');
    let rowCount = 0;

    addButton.click(function () {
        const namaInput = $('#inputNama');
        const mataKuliahInput = $('#inputMataKuliah');
        const nilaiInput = $('#inputNilai');

        const nama = namaInput.val();
        const mataKuliah = mataKuliahInput.val();
        const nilai = nilaiInput.val();

        if (nilai === 'A') {
            nilaiRataRata = 4;
        } else if (nilai === 'AB') {
            nilaiRataRata = 3.5;
        } else if (nilai === 'B') {
            nilaiRataRata = 3;
        } else if (nilai === 'BC') {
            nilaiRataRata = 2.5;
        } else if (nilai === 'C') {
            nilaiRataRata = 2;
        } else if (nilai === 'D') {
            nilaiRataRata = 1;
        } else if (nilai === 'E') {
            nilaiRataRata = 0;
        }

        if (nama && mataKuliah && nilai) {
            if ($("#empty-row").length) {
                $("#empty-row").remove();
            }

            rowCount++;
            const newRow = $('<tr>');
            newRow.html(`
                <td>${rowCount}</td>
                <td>${nama}</td>
                <td>${mataKuliah}</td>
                <td>${nilai}</td>
                <td>${nilaiRataRata}</td>
            `)

            tableBody.find('#empty-row').remove();
            tableBody.append(newRow);

            // Reset kotak input
            namaInput.val('');
            mataKuliahInput.val('');
            nilaiInput.val('');
        } else {
            alert("Tolong isi semua form tersebut.");
        }
    });
});

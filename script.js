$(document).ready(function () {
    $('.input-select').select2();

    $(".tambah").click(function () {
        let nama = $("#inputNama").val();
        let mataKuliah = $("#inputMataKuliah").val();
        let nilai = $("#inputNilai").val();

        let nilaiRataRata = 0;

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

        if ($("#empty-row").length) {
            $("#empty-row").remove();
        }

        let newRow = $("<tr>");
        newRow.append("<td></td>");
        newRow.append("<td>" + nama + "</td>");
        newRow.append("<td>" + mataKuliah + "</td>");
        newRow.append("<td>" + nilai + "</td>");
        newRow.append("<td>" + nilaiRataRata + "</td>");

        $("table").append(newRow);

        updateRowNumbers();
    });
});

function updateRowNumbers() {
    $("table tr").each(function (index) {
        if (index > 0) {
            $(this).find("td:first").text(index);
        }
    });
}
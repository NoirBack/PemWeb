var dataMhs = [
    "Toni",
    "Tono",
    "Tini"
];

function showMhs(){
    var listMhs = document.getElementById("list-Mhs");
    // clear list barang
    listMhs.innerHTML = "";

    // cetak semua barang
    for(let i = 0; i < dataMhs.length; i++){
        var btnEdit = "<a href='#' onclick='editNama("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteNama("+i+")'>Hapus</a>";

        listMhs.innerHTML += "<li>" + dataMhs[i] + " ["+btnEdit + " |"+ btnHapus +"]</li>";
    }
}

function addMhs(){
    var input = document.querySelector("input[name=Mhs]");
    dataMhs.push(input.value);
    showMhs();
}

function editMhs(id){
    var newMhs = prompt("Nama baru", dataMhs[id]);
    dataMhs[id] = newMhs;
    showMhs();
}

function deleteMhs(id){
    dataMhs.splice(id, 1);
    showMhs();
}

showMhs();
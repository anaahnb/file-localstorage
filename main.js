function savePDF() {
    const fileInput = document.getElementById("input")
    const file = fileInput.files[0]

    if (!file) {

        alert("Selecione um arquivo PDF primeiro.")
        return
    }

    const reader = new FileReader()
    reader.onload = function (e) {
        const base64PDF = e.target.result
        localStorage.setItem("pdf", base64PDF)
        alert("PDF salvo no localStorage!")
    }
    reader.readAsDataURL(file)
}

function showPDF() {
    const base64PDF = localStorage.getItem("pdf")

    if (!base64PDF) {
        alert("Nenhum PDF encontrado no localStorage.")
        return;
    }

    const iframe = document.getElementById("viewer")
    iframe.src = base64PDF
}

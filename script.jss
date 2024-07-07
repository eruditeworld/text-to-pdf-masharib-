const { jsPDF } = window.jspdf;

const textInput = document.getElementById('textInput');
const convertBtn = document.getElementById('convertBtn');
const downloadLink = document.getElementById('downloadLink');

convertBtn.addEventListener('click', () => {
    const doc = new jsPDF();
    const text = textInput.value;
    const lines = doc.splitTextToSize(text, 180);

    doc.text(lines, 10, 10);
    const pdfBlob = doc.output('blob');

    const url = URL.createObjectURL(pdfBlob);
    downloadLink.href = url;
    downloadLink.download = 'document.pdf';
    downloadLink.style.display = 'block';
    downloadLink.textContent = 'Download PDF';
});

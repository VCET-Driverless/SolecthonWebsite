const brochurePdf = document.querySelector("#brochurePdf");
const brochureDownloadLink = document.querySelector("#brochureDownloadLink");
var pdfLink;

const setPdfLink = async () => {
  await fetch(
    "https://raw.githubusercontent.com/VCET-Driverless/SolecthonWebsite/main/data/brochure.json"
  )
    .then(res => res.json())
    .then(json => {
      previewPdfLink = json["brochure_preview"];
      viewPdfLink = json["brochure_view"];
    });
  brochurePdf.src = previewPdfLink;
  brochureDownloadLink.href = viewPdfLink;
};
setPdfLink();

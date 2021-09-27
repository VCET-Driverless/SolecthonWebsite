const brochurePdf = document.querySelector("#brochurePdf");

var pdfLink;

const setPdfLink = async () => {
  await fetch(
    "https://raw.githubusercontent.com/viru2001/SolecthonWebsite/master/brochure.json"
  )
    .then((res) => res.json())
    .then((json) => {
      pdfLink = json["brochure"];
    });
    brochurePdf.src = pdfLink;
}
setPdfLink();
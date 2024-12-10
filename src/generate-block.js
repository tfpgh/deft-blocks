const resultsDiv = document.getElementById("result-div");

function formatDate(date) {
  return `${(date.getMonth() + 1).toString().padStart(2, "0")}-${date
    .getDate()
    .toString()
    .padStart(2, "0")}-${date.getFullYear()}`;
}

function generateBlock(
  blockType,
  blockName,
  authorLastName,
  articlePublishDate,
  credential,
  articleName,
  articleLink,
  blockCreatorFirstName
) {
  return `<meta charset='utf-8'><meta charset="utf-8"><b style="font-weight:normal;"><p dir="ltr" style="line-height:1.15;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Times,serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">${blockType}: ${blockName}</span></p><p dir="ltr" style="line-height:1.15;margin-left: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Times,serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">${authorLastName} &lsquo;${articlePublishDate.toLocaleDateString(
    "en",
    { year: "2-digit" }
  )}</span><span style="font-size:12pt;font-family:Times,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">,</span></p><p dir="ltr" style="line-height:1.15;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:8pt;font-family:Times,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">{${credential}, ${formatDate(
    articlePublishDate
  )}, &ldquo;${articleName}&rdquo;, ${articleLink}, DOA: ${formatDate(
    new Date()
  )}} // ${blockCreatorFirstName}</span></p><p dir="ltr" style="line-height:1.15;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Times,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&ldquo;&rdquo;</span></p><p dir="ltr" style="line-height:1.15;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:12pt;font-family:Times,serif;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Analysis: INSERT ANALYSIS HERE</span></p></b>`;
}

export function processSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  resultsDiv.innerHTML = generateBlock(
    formData.get("block-type"),
    formData.get("block-name"),
    formData.get("author-last"),
    new Date(
      Date.parse(formData.get("date")) +
        new Date().getTimezoneOffset() * 60 * 1000
    ),
    formData.get("credentials"),
    formData.get("title"),
    formData.get("link"),
    formData.get("block-creator")
  );
}

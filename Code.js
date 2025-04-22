function doGet(e) {
  var template = HtmlService.createTemplateFromFile("src/html/index");
  return template.evaluate().setTitle("Aplikasi Data SRIAZ");
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function loadPage(page) {
  return HtmlService.createHtmlOutputFromFile(page).getContent();
}

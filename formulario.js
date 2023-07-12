function doPost(e) {
    var ss = SpreadsheetApp.openById("AKfycbybPHNvLTZYLOAnfALjii7hBOPLsFg0XZFd4k7JFeDAFVN-6REgGGM7SE1-cOZ3xYV2");
    var sheet = ss.getSheetByName("Gripe");
  
    var rowData = [];
    rowData.push(e.parameter.usuario);
    rowData.push(e.parameter.contrasena);
    
    sheet.appendRow(rowData);
  
    return ContentService.createTextOutput("Formulario enviado correctamente").setMimeType(ContentService.MimeType.TEXT);
  }
  
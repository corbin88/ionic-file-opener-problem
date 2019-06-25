import { Component } from '@angular/core';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private file: File, private fileOpener: FileOpener) {}

  openLocalPdf() {
    console.log('start');
    let filePath = this.file.applicationDirectory + 'www/assets/';
   
    let fakeName = Date.now();
    this.file.copyFile(filePath, 'JournalPDF.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
      console.log(result);
      console.log(filePath);
      console.log('new');
      console.log(result.nativeURL);
      this.fileOpener.open(result.nativeURL, 'application/pdf')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
    });
  }
}

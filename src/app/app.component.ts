import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoCONTEL';

  isVideo: boolean = true;

  login() {
    if (this.isVideo) {
      setTimeout(() => {
        this.isVideo = false
    }, 1000);
    }
    else {
    }
  }

mostrar() {
  this.isVideo = false
}

    


  }

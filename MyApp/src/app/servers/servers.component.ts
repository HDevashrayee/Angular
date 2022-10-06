import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']

  /* Custom components */
  //selector:`[app-servers]` //Use as an attribute.
  // selector:`.app-servers` //Use as an class.
})
export class ServersComponent implements OnInit {

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

   }

  serverId: number =10;
  serverStatus: string = 'offline';
  
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  ngOnInit(): void {
    
  }
  onCreateServer(){
    this.serverCreationStatus='Server was created';
  }
  getServerStatus(){
    return this.serverStatus;
  }
}

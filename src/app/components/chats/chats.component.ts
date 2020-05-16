import { Chat } from './../../models/chat';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  listChats: any[] = [];
  chat: Chat = {
    name: 'test name',
    message: ''
  };

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {

    this.chatService.getChats()
        .subscribe(res => this.listChats = res);
  }

  createNewChat() {
    this.chatService.saveChat(this.chat)
        .then(res => {
          this.chat = {
            name: 'test name',
            message: ''
          }
        })
        .catch()
  }

}

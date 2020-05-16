import { Chat } from './../models/chat';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private afs: AngularFirestore) { }

  getChats() {
    return this.afs.collection('chats').valueChanges();
  }

  saveChat(chat: Chat) {
    return this.afs.collection('chats').add(chat);
  }
}

import { Injectable } from '@angular/core';

//Se importa los modulos de la BD con Firestore

import { AngularFirestore } from '@angular/fire/compat/firestore';

//Se importa el modelo

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private angularFirestore: AngularFirestore) { }

  //Se crea los metodos para el proyecto CRUD
  getPosts(){
    return this.angularFirestore
            .collection("posts")
            .snapshotChanges()
  }

  getPostByid(id){
    return this.angularFirestore
           .collection("posts")
           .doc(id)
           .valueChanges()
  }

  createPost(post: Post){
    return new Promise<any> ( ( resolve, rejects ) => {
      this.angularFirestore
        .collection("posts")
        .add(post)
        .then( (response) => {
          console.log(response)
        },
        (error) => {
          rejects(error)
        })
    })
  }

  updatePost(post: Post, id){
    return this.angularFirestore
          .collection("posts")
          .doc(id)
          .update({
            title: post.title,
            content: post.content,
            author: post.author
          });
  }

  deletePost(post){
    return this.angularFirestore
          .collection("posts")
          .doc(post.id)
          .delete()
  }
}

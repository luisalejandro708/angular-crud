import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public postForm: FormGroup 
  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.postForm = this.formBuilder.group({
      title: [''],
      content: [''],
      author: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.postService.createPost(this.postForm.value)
    this.router.navigate([''])
  }

}
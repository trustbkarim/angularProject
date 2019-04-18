import { Component, ViewChild, OnInit } from '@angular/core';
import { PostsService } from './Services/posts.service';
import { Posts } from 'src/Model/Posts';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  ngOnInit() 
  {
    // La pagination
    this.dataSource.paginator = this.paginator;
    // La liste des postes
    this.postsList();
  }

  constructor(private postsService : PostsService) { }

  // Titre de l'application
  title = 'JEE & Angular Project - BOUARFA Karim';
  isLoading = true;

  prostData: Posts[] = [];
  dataSource = new MatTableDataSource<Posts>(this.prostData);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'title', 'body', 'user'];

  // La fonction qui fait appelle à la méthode postList() du service PostsService
  postsList()
  {
    this.postsService.postsList()
    .subscribe(
      (response => 
        {
          this.isLoading = false;
          this.dataSource.data = response;
        }) 
    )
  }
}
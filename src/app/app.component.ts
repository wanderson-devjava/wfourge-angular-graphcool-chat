import { Component } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private apiURL = 'https://api.graph.cool/simple/v1/cjjryaunc17q20109v19r66gk';
  
  constructor(private http: HttpClient) { 

    this.craeteUser();
    this.allUsers();

  }

  allUsers(): void {

    const boby = {
      query:
      `
      query{
        allUsers {
          id
          name
          email
        }
      }
      `
    };

    this.http.post(this.apiURL, boby).subscribe(res => console.log('Query: ', res));

  }

  craeteUser(): void {

    const boby = {
      query: `
        mutation CreateNewUser($name: String!, $email: String!, $password: String!) {
          createUser(name: $name, email: $email, password: $password) {
            id
            name
            email
          }
        }
      `,
      variables: {
        name: 'Miguel',
        email: 'miguel@gmail.com',
        password: '123'
      }
    };

    this.http.post(this.apiURL, boby).subscribe(res => console.log('Mutation: ', res));
  }
  
}

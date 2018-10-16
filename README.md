# HackCamp Angular 6

## Introduction to Angular with the Angular-CLI

You can find more information about the Angular CLI [here](https://github.com/angular/angular-cli/wiki)

`npm install -g @angular/cli`
`ng new my-angular-app`
`cd my-angular-app`
`ng serve`

## Starting point: Let's build our bookstore

- This application is broken. After what you've learned so far, you should be able to fix the bugs before adding new features...

**NB:** The goal of this session is to learn about [template syntax](https://angular.io/guide/template-syntax) in Angular.

### TODO: Features to build

#### List all books

Using the mocks in the `mocks folder`, display all the books.

#### Filter books by title and by category

Let's add a simple filter in our application that will filter our books by category and title.
The result of the filter should be unique.

### Breaking our apps into a set of components

Now that our application is working, let's split it into smaller components:

Let's create these 3 components:

- `<bs-header></bs-header>`
- `<bs-book-input></bs-book-input>`
- `<bs-books></bs-books>`

In `app.component.html`, we provided an idea of how you should split your application

**NB:** Components are functions that takes argements as attributes.

## Services and Dependency Injection in Angular

[Documentation about Services](https://angular.io/guide/http)

Let's now remove the `mockbooks` and introduce a **fake** service.
Inside the `app.module.ts`, uncomment `InMemoryWebApiModule`.
Then by using the `HttpClientModule`, you should be able to fetch the data from our mock server.

**NB:** You can find more information about `InMemoryWebApiModule` [here](https://github.com/angular/in-memory-web-api).

[Documentation about Http Service](https://angular.io/guide/http)

All services are located inside the `services folder`.

Implement the following methods: `getBooks` and `getBook` in `books.service.ts`.

Implement the following methods: `search` using the `search.service.ts`.

[Documentation about DI (Dependency Injection) in Angular](https://angular.io/guide/dependency-injection-pattern)

Our application is using hardcoded urls ('`api/books`') which is a very bad practise and makes our application difficult to maintain. Let's use DI to fix this issue.

Hint: The `@Inject` attribute is used to solve this issue.

## Pipe in Angular (demo)

Intoducing `async` and `json` pipes. How do you implement your own pipe?

## FRP: Introducing Observables (demo)

Let's introduce the notions of Observable, Observer and Producer in order to better understand FRP (Functional Reactive Programming)

### Debugging tool for FRP (demo)

[http://rxmarbles.com](http://rxmarbles.com

### Bonus about Observable

Implement the search using Observable.

## Routing in Angular (RouteModule)

[Documentation about Routing](https://angular.io/guide/router)

Let's add some routing into our application. In `app.routing.ts`, add the following routing:

### Add routing definition

```
export const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "books/:id", component: BookDetailComponent },
];
```

Enable the navigation inside the header by uncommenting the `nav` section.

### Add router-outlet

Configure our application to use the `routes` defined above. In `AppComponent`, we're going to keep the following markup for our template: `app.component.html`

```
<bs-header [title]="title"></bs-header>
<router-outlet></router-outlet>
```

### Dashboard component

Let's implement the `Dashboard component`. The template is already provided in the `dashboard` folder. Add the component definition and don't forget to declare it. Make sure the application is still working after adding the dashboard.

### Implement book-detail component

Everything is already provided to build the `book-detail component`. Just set it up and make sure your application is still working.

The next step will be to build the `CRUD` operations.

# Angular 16 JWT Authentication and Role-Based Authorization

This project demonstrates JWT (JSON Web Tokens) authentication and role-based authorization with Angular 16. It includes features such as secure storage of tokens in HttpOnly cookies, token management (access_token and refresh_token), auto-login, auto-logout, and role-based access control for enhanced security.
- This project is built with Angular 16 and showcases best practices for authentication and authorization.
- Token-based authentication is a fundamental security concept in modern web applications.
## Features

✅ Secure storage of tokens in HttpOnly cookies.

✅ Token management for access and refresh tokens.

✅ Implementation of auto-login and auto-logout for a seamless user experience.

✅ Role-based access control for increased security.

## Getting Started

### Prerequisites

- Node.js and npm
- Angular CLI

### Installation

1. Clone the repository.
2. Navigate to the project folder.
3. Run `npm install` to install the dependencies.
4. Configure the project as per your requirements.

## Usage

1. Run the application using `ng serve`.
2. Explore the authentication and authorization features.
3. Customize the project as needed.

## Backend API
For this Angular application to function correctly, you need a backend API that handles authentication and provides the necessary data.
You can find the source code for the backend API on the corresponding GitHub [repository](https://github.com/MossaabFrifita/spring-boot-3-security-6-jwt).
Make sure you also have the backend API up and running to fully test the authentication and authorization features of this Angular application.




```
digibriq-fe
├─ .angular
├─ .editorconfig
├─ .git
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ feature
│  │     │  │  └─ addProjectSrvsComp
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-50d54a05cb21526160b0edf22f4e4bae0d8b86cd.idx
│  │     ├─ pack-50d54a05cb21526160b0edf22f4e4bae0d8b86cd.pack
│  │     └─ pack-50d54a05cb21526160b0edf22f4e4bae0d8b86cd.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ feature
│     │  │  └─ addProjectSrvsComp
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ angular.json
├─ database.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app
│  │  ├─ admin
│  │  │  ├─ admin.component.html
│  │  │  ├─ admin.component.scss
│  │  │  └─ admin.component.ts
│  │  ├─ app-routing.module.ts
│  │  ├─ app.component.html
│  │  ├─ app.component.scss
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  ├─ components
│  │  │  ├─ project-detail
│  │  │  │  ├─ project-detail.component.html
│  │  │  │  ├─ project-detail.component.scss
│  │  │  │  └─ project-detail.component.ts
│  │  │  ├─ project-form
│  │  │  │  ├─ project-form.component.html
│  │  │  │  ├─ project-form.component.scss
│  │  │  │  └─ project-form.component.ts
│  │  │  └─ project-list
│  │  │     ├─ project-list.component.html
│  │  │     ├─ project-list.component.scss
│  │  │     └─ project-list.component.ts
│  │  ├─ errors
│  │  │  └─ access-denied
│  │  │     ├─ access-denied.component.html
│  │  │     ├─ access-denied.component.scss
│  │  │     └─ access-denied.component.ts
│  │  ├─ header
│  │  │  ├─ header.component.html
│  │  │  ├─ header.component.scss
│  │  │  └─ header.component.ts
│  │  ├─ home
│  │  │  ├─ home.component.html
│  │  │  ├─ home.component.scss
│  │  │  └─ home.component.ts
│  │  ├─ landing
│  │  │  ├─ landing.component.html
│  │  │  ├─ landing.component.scss
│  │  │  └─ landing.component.ts
│  │  ├─ login
│  │  │  ├─ login.component.html
│  │  │  ├─ login.component.scss
│  │  │  └─ login.component.ts
│  │  ├─ logout
│  │  │  ├─ logout.component.html
│  │  │  ├─ logout.component.scss
│  │  │  └─ logout.component.ts
│  │  ├─ nav-items.ts
│  │  ├─ navbar
│  │  │  ├─ navbar.component.html
│  │  │  ├─ navbar.component.scss
│  │  │  └─ navbar.component.ts
│  │  ├─ side-nav
│  │  │  ├─ side-nav.component.html
│  │  │  ├─ side-nav.component.scss
│  │  │  └─ side-nav.component.ts
│  │  ├─ _helpers
│  │  │  ├─ auth.guard.ts
│  │  │  └─ http.interceptor.ts
│  │  ├─ _models
│  │  │  ├─ role.model.ts
│  │  │  └─ user.model.ts
│  │  └─ _services
│  │     ├─ auth.service.ts
│  │     ├─ excel.service.ts
│  │     ├─ project.service.spec.ts
│  │     ├─ project.service.ts
│  │     ├─ storage.service.ts
│  │     └─ user.service.ts
│  ├─ assets
│  │  ├─ .gitkeep
│  │  └─ images
│  │     ├─ landing.png
│  │     └─ logo.png
│  ├─ environments
│  │  ├─ environment.prod.ts
│  │  └─ environment.ts
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ main.ts
│  └─ styles.scss
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```
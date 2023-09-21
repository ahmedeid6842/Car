<a name="readme-top"></a>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<h1 align="center">Car</h1>

### 📑 Table of Contents
- [📘 Introduction](#introduction)
- [🚀 Getting Started](#getting-started)
  - [Prerequisites ❗](#prerequisites)
  - [Environment Variables :key:](#environment-variables)
  - [Setup ⬇️](#setup)
  - [Install :heavy_check_mark: ](#install)
  - [Usage 🤿 🏃‍♂️](#usage)
- [🔍🏗️ API Reference](#api-reference)
- [❓ FAQ ](#-faq-)
- [👥 Authors](#authors)
- [🤝 Contributing](#contributing)
- [⭐️ Show Your Support](#show-your-support)
- [💎 Lessons Learned](#lessons-learned)
- [🙏 Acknowledgements](#acknowledgements)

## 📘 Introduction <a name="introduction"></a>
<p>
Welcome to Car, a Nest.js project that aims to provide accurate pricing information for used cars. This application leverages the power of Nest.js, a progressive Node.js framework, to build efficient and scalable server-side applications.
</p>

<p>
The main goal of this project is to help users determine the fair market value of used cars by considering various factors such as make, model, mileage, condition, and location. By using Admin approval for the reports and estimate report querie, the application provides reliable pricing estimates that can assist car buyers, sellers, and enthusiasts in making informed decisions.
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites ❗<a name="prerequisites"></a>

Before running this project, make sure you have the following prerequisites installed:

<p>
 <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=nodejs,sqlite&theme=dark"/>
    </a>
    <a href="https://www.npmjs.com/"><img src="https://authy.com/wp-content/uploads/npm-logo.png" width="50px" height="50"/></a>
 </p>

### Environment Variables :key: <a name="environment-variables"></a>
To run this project, you will need to add the following environment variables to a new file named `.env.development`:
- `DB_NAME`: The name of the database (eg: db.sqlite).

### Setup ⬇️ <a name="setup"></a>
1. Clone the repository:
```shell
   git clone https://github.com/ahmedeid6842/car.git
```
2. Change to the project directory:
```shell
cd ./car
```

### Install :heavy_check_mark: <a name="install"></a>

Install the project dependencies using NPM:

```shell
npm install
```

### Usage 🤿 🏃‍♂️ <a name="usage"></a>
To start the application in development mode, run the following command:

```shell
npm run start:dev
```

The application will be accessible at http://localhost:3000.

- Alright, it's showtime! 🔥 Hit `http://localhost:3000` and BOOM! 💥  You should see the "Hello world" message and the Car APIs working flawlessly. ✨🧙‍♂️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔍🏗️ API Refernce <a name="api-reference"></a>

> The API reference provides detailed documentation on the available endpoints, request/response formats, and authentication requirements. 

![10-10 - routes drawio (1)](https://github.com/ahmedeid6842/Car/assets/57197702/c4b976b2-fd38-4bf4-ba51-440d7188bc80)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ❓ FAQ <a name="faq"></a>

### How Nest.js enhances this application

Nest.js brings several benefits to this project, including:

- **Modularity**: The application is structured using modules, allowing for better organization and maintainability of code.
- **Dependency Injection**: Nest.js utilizes dependency injection, making it easy to manage and test different components of the application separately.
- **Decorators**: Decorators in Nest.js simplify the implementation of features such as validation, authorization, and logging.
- **Middleware**: Nest.js middleware enables handling of cross-cutting concerns, such as authentication and error handling, in a centralized manner.
- **Scalability**: Nest.js is designed to support scalability, allowing the application to handle high traffic and large datasets efficiently.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👤 Author <a name="author"></a>
**Ahmed Eid 🙋‍♂️**
- Github: [@ahmedeid6842](https://github.com/ahmedeid6842/)
- LinkedIn : [Ahmed Eid](https://www.linkedin.com/in/ahmed-eid-0018571b1/)
- Twitter: [@ahmedeid2684](https://twitter.com/ahmedeid2684)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contribution"></a>

We're always looking to improve this project! 🔍 If you notice any issues or have ideas for new features, please don't hesitate to submit a [pull request](https://github.com/ahmedeid6842/car/pulls) 🙌 or create a [new issue](https://github.com/ahmedeid6842/car/issues/new) 💡. Your contribution will help make this project even better! ❤️ 💪

## ⭐️ Show your support <a name="support"></a>

If you find this project helpful, I would greatly appreciate it if you could leave a star! 🌟 💟 

## 💎 Lessons Learned

1. **Nest Architecture: Services and Repositories**
   - Learn about the Nest.js architecture and how to organize code using services and repositories.
   - Understand the benefits of modular structure and separation of concerns.

2. **Inversion of Control in NestJS**
   - Explore the concept of inversion of control and how Nest.js follows this principle.
   - Understand the importance of dependency injection and how it helps in managing and testing components.

3. **Persisting Data with TypeORM**
   - Learn how to persist data in the car project using TypeORM, an Object-Relational Mapping (ORM) library for TypeScript and JavaScript.
   - Understand how to define entities and relationships, perform CRUD operations, and handle database migrations.

4. **Interceptors and Middlewares**
   - Intercept incoming requests and customize the serialization of user data using interceptors.
   - Transform outgoing responses and add common functionality to requests using middlewares.

5. **Authentication From Scratch**
   - Implement authentication from scratch in the car project using Nest.js and the cookie-session package.
   - Understand the concepts of sessions, cookies, and secure authentication strategies.

6. **Setting up Database Relations with TypeORM**
   - Learn how to define and manage database relations using TypeORM.
   - Understand different types of relationships such as one-to-one, one-to-many, and many-to-many, and how to establish them in your application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Special thanks to @StephenGrider for his invaluable course on Nest.js, which greatly contributed to the successful completion of the car project. 💟



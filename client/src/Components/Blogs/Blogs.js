import React from "react";

const Blogs = () => {
  return (
    <>
      <div class="container my-5">
        <div class="row my-5 gy-5">
          <div class="col-md-10 mx-auto">
            <h3>1.What is the purpose of jwt and how does it work?</h3>
            <p>
              JWT, or JSON Web Token, is an open standard used to share security information between two
              parties — a client and a server. Each JWT contains encoded JSON objects, including a set of
              claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be
              altered after the token is issued <br /> <br />
              JSON stands for JavaScript Object Notation and is a text-based format for transmitting data
              across web applications. It stores information in an easy-to-access manner, both for developers
              and computers. It can be used as a data format by any programming language and is quickly
              becoming the preferred syntax for APIs, surpassing XML. <br /> <br />
              Now that you understand JSON as a data text format, you may be wondering What are tokens? To put
              it simply, a token is a string of data that represents something else, such as an identity. In
              the case of authentication, a non-JWT based token is a string of characters that allow the
              receiver to validate the sender’s identity. <br /> <br />
            </p>
          </div>
          <div class="col-md-10 mx-auto">
            <h3>Differences between sql and nosql databases?</h3>
            <p>
              Structured Query language (SQL) pronounced as “S-Q-L” or sometimes as “See-Quel” is the standard
              language for dealing with Relational Databases. A relational database defines relationships in
              the form of tables. <br /> <br />
              SQL programming can be effectively used to insert, search, update, delete database records.{" "}
              <br /> <br />
              NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy
              to scale. NoSQL database is used for distributed data stores with humongous data storage needs.
              NoSQL is used for Big data and real-time web apps. <br /> <br />
              KEY DIFFERENCE SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or
              Relational Databases whereas NoSQL is a Non-relational or Distributed Database. Comparing SQL vs
              NoSQL database, SQL databases are table based databases whereas NoSQL databases can be document
              based, key-value pairs, graph databases. SQL databases are vertically scalable while NoSQL
              databases are horizontally scalable. <br />
              SQL databases have a predefined schema whereas NoSQL databases use dynamic schema for
              unstructured data. <br />
              Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance
              while NoSQL uses commodity hardware.
            </p>
          </div>

          <div class="col-md-10 mx-auto">
            <h3>3. Difference between javascript and nodejs?</h3>
            <p>
              Javascript is a lightweight, object-oriented scripting language that is used to build dynamic
              HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game
              development and mobile app development. It is an interpreted scripting language, and the code
              can only be executed and run in a web browser. <br />
              <br />
              Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript
              to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js
              comes with a large number of modules and is mostly used in web creation. It may run on various
              platforms including, Windows, Linux, Mac OS, etc. It provides a cross-platform runtime
              environment with event-driven, non-blocking (asynchronous) I/O for creating highly scalable
              server-side JavaScript applications.
              <br />
              <br />
              Main differences between JavaScript and Node.js Here, we are going to discuss the main
              differences between JavaScript and Node.js: <br />
              <br />
              1. JavaScript is a lightweight, cross-platform, interpreted scripting programming language that
              is primarily used for client-side scripting. It's built into both Java and HTML. On the other
              hand, Node.js is a server-side scripting language based on the Google Chrome V8 engine. As a
              result, it's used to build network-centric applications. It is a distributed system that is used
              for data-intensive real-time applications.
              <br />
              <br />
              2. JavaScript is a simple programming language that could be run in any browser that supports
              the JavaScript Engine. On the other hand, Node.js is a running environment or interpreter for
              the JavaScript programming language. It needs libraries that may be easily accessed from
              JavaScript programming to make it more useful.
              <br />
              <br />
              3. JavaScript can run on any engine, including Firefox's Spider Monkey, Safari's JavaScript
              Core, and V8 (Google Chrome). As a result, JavaScript programming is very simple to create, and
              any running environment is equivalent to a proper browser. On the other hand, Node.js only
              supports the V8 engine, which is exclusive to Google Chrome. However, written JavaScript code
              can run in any environment, regardless of whether it supports the V8 engine.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

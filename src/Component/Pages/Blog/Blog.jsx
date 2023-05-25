import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dolltopia || Blog</title>
      </Helmet>
      <div className=" min-h-screen my-5 py-7">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl font-bold text-center mb-4">Blog</h1>

          <div className="mb-8 mt-6   bg-gray-800 text-white rounded-md p-3">
            <h2 className="text-2xl font-bold mb-2">
              1. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <p className="text-lg">
              <span className="font-semibold text-xl">Ans. </span>
              Access tokens are short-lived credentials that represent user
              authorization, granting access to protected resources. They are
              generated upon successful authentication and included in API
              requests. Refresh tokens, on the other hand, are long-lived tokens
              used to obtain new access tokens when they expire, eliminating the
              need for frequent user authentication. Access tokens are typically
              stored on the client-side in memory or browser storage, while
              refresh tokens should be stored securely, such as in HTTP-only
              cookies. Both tokens play a vital role in secure authentication
              and authorization processes.
            </p>
          </div>

          <div className="mb-8   bg-gray-800 text-white rounded-md  p-3">
            <h2 className="text-2xl font-bold mb-2">
              2. Compare SQL and NoSQL databases?
            </h2>
            <p className="text-lg">
              <span className="font-semibold text-xl">Ans. </span>
              SQL (Structured Query Language) databases are relational databases
              that use tables with predefined schemas and support SQL for
              querying and manipulating data. They provide strong data
              consistency and support complex queries but may lack scalability
              for large datasets. NoSQL (Not Only SQL) databases are
              non-relational databases that provide flexibility in storing
              unstructured or semi-structured data. They offer high scalability,
              distributed architecture, and can handle large amounts of data.
              However, they may sacrifice some data consistency and query
              flexibility compared to SQL databases. NoSQL databases are
              suitable for handling dynamic and rapidly evolving data models in
              modern applications
            </p>
          </div>

          <div className="mb-8   bg-gray-800 text-white rounded-md p-3">
            <h2 className="text-2xl font-bold mb-2">
              3. What is Express.js? What is Nest.js?
            </h2>
            <p className="text-lg">
              <span className="font-semibold text-xl">Ans. </span>
              Express.js is a popular minimalist web application framework for
              Node.js. It provides a simple and flexible way to build web
              applications and APIs, handling HTTP requests and responses
              efficiently. Express.js offers middleware support and enables
              developers to create robust server-side applications with ease.
              Nest.js is a progressive, TypeScript-based web application
              framework for building efficient and scalable server-side
              applications. It is built on top of Express.js and adds additional
              features like dependency injection, modular architecture, and
              strong typing. Nest.js promotes a structured and organized
              approach to building applications, making it suitable for complex
              projects and enterprise-level applications.
            </p>
          </div>

          <div className="  bg-gray-800 text-white rounded-md p-3 mb-3">
            <h2 className="text-2xl font-bold mb-2">
              4. What is MongoDB aggregate and how does it work?
            </h2>
            <p className="text-lg">
              <span className="font-semibold text-xl">Ans. </span> MongoDB is
              aggregate is a powerful framework for performing advanced data
              processing and analysis operations on MongoDB collections. It
              allows for the aggregation of data using a pipeline of stages,
              such as filtering, grouping, sorting, and performing calculations.
              The aggregate pipeline processes documents sequentially, passing
              the output of one stage as the input to the next. It supports a
              wide range of operators and functions for data transformation,
              aggregation, and manipulation. The aggregate framework is
              particularly useful for complex queries, data analytics, and
              generating aggregated results based on specific criteria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

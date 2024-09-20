import React from "react";
import styles from "./style.module.css";
const Experience = () => {
  return (
    <div className={styles.container_ex}>
      <h4>My Experience</h4>
      <div className={styles.content}>
        <div className={styles.box}>
          <h5>PHP</h5>
          <p>Sept. 2017 - Present</p>
          <ul>
            <li>
              Developed and maintained dynamic websites and web applications
              using PHP, Laravel Framework, MySQL, and JavaScript.
            </li>
            <li>
              Built RESTful APIs to enable communication between the front end
              and back end.
            </li>
            <li>
              Integrated third-party services and APIs for payment processing,
              social media, and other functionalities.
            </li>
            <li>
              Implemented object-oriented programming principles and design
              patterns to create scalable and maintainable code.
            </li>
            <li>
              Optimized application performance by refactoring code, optimizing
              queries, and implementing caching mechanisms.
            </li>
          </ul>
        </div>
        <div className={styles.box}>
          <h5>ASP.NET (C#)</h5>
          <p>Jan. 2021 - Present</p>
          <ul>
            <li>
              Developed and maintained web applications using ASP.NET MVC and
              C#, adhering to MVC design principles.
            </li>
            <li>
              Created custom user controls and components to meet specific
              client requirements, improving usability and functionality.
            </li>
            <li>
              Integrated third-party services and APIs, such as payment gateways
              and social media platforms, into existing applications.
            </li>
            <li>
              Optimized application performance by refactoring C# code and
              optimizing SQL queries, resulting in faster load times.
            </li>
            <li>
              Collaborated with front-end developers to integrate ASP.NET
              back-end services with user interfaces, ensuring seamless
              functionality.
            </li>
          </ul>
        </div>
        <div className={styles.box}>
          <h5>NEXTJS</h5>
          <p>July 2022 - Present</p>
          <ul>
            <li>
              Built and maintained dynamic, SEO-friendly websites using Next.js,
              integrating with headless CMSs like Strapi and Contentful.
            </li>
            <li>
              Developed reusable components and design systems using React and
              styled-components, ensuring consistency across applications.
            </li>
            <li>
              Implemented advanced features such as client-side caching and
              progressive web app (PWA) capabilities to enhance user experience.
            </li>
            <li>
              Integrated with RESTful APIs and GraphQL to fetch and manage data,
              ensuring seamless content delivery and application functionality.
            </li>
            <li>
              Collaborated with back-end developers to implement serverless
              functions and improve API performance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

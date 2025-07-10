import React from "react";
import "./../styles/main.css";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn the basics of React, including components, state, and props.",
    image: "https://img.freepik.com/free-vector/react-native-programming-language-abstract-concept_335657-3712.jpg",
  },
  {
    id: 2,
    title: "Node.js Essentials",
    description: "Master backend development with Node.js and Express.",
    image: "https://img.freepik.com/free-vector/node-js-programming-language-abstract-concept_335657-3713.jpg",
  },
  {
    id: 3,
    title: "MongoDB Fundamentals",
    description: "Understand NoSQL databases and how to use MongoDB in your projects.",
    image: "https://img.freepik.com/free-vector/database-storage-concept-illustration_114360-2580.jpg",
  },
];

const Courses = () => (
  <div className="main-content">
    <h1 style={{ color: "#35424a", marginBottom: "24px" }}>Available Courses</h1>
    <div className="course-list">
      {courses.map((course) => (
        <div className="course-item" key={course.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src={course.image}
            alt={course.title}
            style={{ width: "100%", maxWidth: "180px", borderRadius: "8px", marginBottom: "14px", objectFit: "cover", height: "110px" }}
          />
          <h3 style={{ color: "#35424a", marginBottom: "8px" }}>{course.title}</h3>
          <p style={{ color: "#666", fontSize: "0.98rem", textAlign: "center" }}>{course.description}</p>
          <button
            style={{
              marginTop: "12px",
              background: "#e8491d",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "8px 18px",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: "1rem",
              transition: "background 0.2s"
            }}
            onMouseOver={e => e.currentTarget.style.background = "#35424a"}
            onMouseOut={e => e.currentTarget.style.background = "#e8491d"}
          >
            View Course
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Courses;
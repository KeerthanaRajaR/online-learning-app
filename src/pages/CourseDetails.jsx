import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./../styles/main.css";

// ...courses array...

const CourseDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="main-content">
        <h2>Course Not Found</h2>
        <button onClick={() => history.push("/courses")}>Back to Courses</button>
      </div>
    );
  }

  return (
    <div className="main-content">
      <button
        style={{
          marginBottom: "18px",
          background: "#35424a",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "7px 16px",
          cursor: "pointer",
          fontWeight: 500,
        }}
        onClick={() => history.push("/courses")}
      >
        &larr; Back to Courses
      </button>
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 16px rgba(44,62,80,0.08)",
          padding: "32px 24px",
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <img
          src={course.image}
          alt={course.title}
          style={{ width: "100%", maxWidth: "220px", borderRadius: "8px", marginBottom: "18px", objectFit: "cover", height: "120px" }}
        />
        <h2 style={{ color: "#35424a", marginBottom: "10px" }}>{course.title}</h2>
        <p style={{ color: "#666", fontSize: "1.05rem", marginBottom: "16px" }}>{course.description}</p>
        <div style={{ color: "#444", fontSize: "1rem", textAlign: "left" }}>
          <strong>Course Content:</strong>
          <p>{course.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
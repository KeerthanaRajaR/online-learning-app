import React from "react";
import "./../styles/main.css";

const Home = () => (
  <div className="main-content">
    <section style={{
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 16px rgba(44,62,80,0.08)",
      padding: "36px 28px",
      marginBottom: "32px",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#35424a", marginBottom: "12px" }}>Welcome to Learnify</h1>
      <p style={{ color: "#666", fontSize: "1.1rem", marginBottom: "20px" }}>
        Your all-in-one platform for online learning. Browse courses, track your progress, and boost your skills!
      </p>
      <img
        src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-5325.jpg"
        alt="Online Learning"
        style={{ maxWidth: "320px", width: "100%", borderRadius: "8px", margin: "0 auto" }}
      />
    </section>
    <section>
      <h2 style={{ color: "#35424a" }}>Platform Features</h2>
      <ul style={{ color: "#444", fontSize: "1rem", lineHeight: "2", listStyle: "disc inside" }}>
        <li>Wide range of curated courses</li>
        <li>Personalized dashboard</li>
        <li>Progress tracking</li>
        <li>Interactive lessons and quizzes</li>
        <li>Responsive and easy-to-use interface</li>
      </ul>
    </section>
  </div>
);

export default Home;
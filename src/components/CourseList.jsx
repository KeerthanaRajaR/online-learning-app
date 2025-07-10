import React from 'react';

const CourseList = () => {
    const courses = [
        { id: 1, title: 'Introduction to Programming', description: 'Learn the basics of programming using Python.' },
        { id: 2, title: 'Web Development Bootcamp', description: 'Become a full-stack web developer with this comprehensive course.' },
        { id: 3, title: 'Data Science and Machine Learning', description: 'Dive into data analysis and machine learning techniques.' },
        { id: 4, title: 'Digital Marketing Essentials', description: 'Understand the fundamentals of digital marketing strategies.' },
    ];

    return (
        <div className="course-list">
            <h2>Available Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
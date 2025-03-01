import React, { Component } from "react";

class CoursesPage extends Component {
    state = {
        course: {
            title: ""
        }
    };

    handleCourseChange = event => {
        event.preventDefault();
        const course = {...this.state.course, title: event.target.value};
        this.setState({ course });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.course);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" name="course" value={this.state.course.title} onChange={this.handleCourseChange} />
                <input type="submit" value="Save"/>
            </form>

        );
    }
}

export default CoursesPage;
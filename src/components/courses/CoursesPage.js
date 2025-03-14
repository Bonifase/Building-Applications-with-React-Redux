import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

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
        this.props.actions.createCourse(this.state.course);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" name="course" value={this.state.course.title} onChange={this.handleCourseChange} />
                <input type="submit" value="Save"/>
                { this.props.courses.map(course => (
                    <div className=""key={course.title}>{course.title}</div>
                )) }
            </form>

        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
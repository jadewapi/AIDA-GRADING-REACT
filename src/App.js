import React, { useState } from "react";

const data = [
  {
    teacherName: "Jade Pineda",
    userName: "jp",
    userPin: 1111,
    assignments: [
      {
        assignmentName: "Dichotomous Key",
        assignmentDescription:
          "Create a dichotomous key to classify different types of leaves.",
        assignmentAverage: 89,
      },
      {
        assignmentName: "Solar System Model",
        assignmentDescription:
          "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
        assignmentAverage: 59,
      },
      {
        assignmentName: "Chemical Reactions",
        assignmentDescription:
          "Investigate and document three chemical reactions that produce noticeable changes.",
        assignmentAverage: 78,
      },
      {
        assignmentName: "Ecosystem Research",
        assignmentDescription:
          "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
        assignmentAverage: 98,
      },
    ],
    allStudents: [
      {
        firstName: "Emma",
        lastName: "Thompson",
        average: 78,
        studentAssignment: [
          {
            assignmentName: "Dichotomous Key",
            assignmentDescription:
              "Create a dichotomous key to classify different types of leaves.",
            score: 76,
          },
          {
            assignmentName: "Solar System Model",
            assignmentDescription:
              "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
            score: 98,
          },
          {
            assignmentName: "Chemical Reactions",
            assignmentDescription:
              "Investigate and document three chemical reactions that produce noticeable changes.",
            score: 53,
          },
          {
            assignmentName: "Ecosystem Research",
            assignmentDescription:
              "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
            score: 87,
          },
        ],
      },
      {
        firstName: "Noah",
        lastName: "Johnson",
        average: 82,
        studentAssignment: [
          {
            assignmentName: "Dichotomous Key",
            assignmentDescription:
              "Create a dichotomous key to classify different types of leaves.",
            score: 98,
          },
          {
            assignmentName: "Solar System Model",
            assignmentDescription:
              "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
            score: 95,
          },
          {
            assignmentName: "Chemical Reactions",
            assignmentDescription:
              "Investigate and document three chemical reactions that produce noticeable changes.",
            score: 53,
          },
          {
            assignmentName: "Ecosystem Research",
            assignmentDescription:
              "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
            score: 67,
          },
        ],
      },
      {
        firstName: "Olivia",
        lastName: "Smith",
        average: 62,
        studentAssignment: [
          {
            assignmentName: "Dichotomous Key",
            assignmentDescription:
              "Create a dichotomous key to classify different types of leaves.",
            score: 91,
          },
          {
            assignmentName: "Solar System Model",
            assignmentDescription:
              "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
            score: 78,
          },
          {
            assignmentName: "Chemical Reactions",
            assignmentDescription:
              "Investigate and document three chemical reactions that produce noticeable changes.",
            score: 10,
          },
          {
            assignmentName: "Ecosystem Research",
            assignmentDescription:
              "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
            score: 53,
          },
        ],
      },
      {
        firstName: "Liam",
        lastName: "Williams",
        average: 58,
        studentAssignment: [
          {
            assignmentName: "Dichotomous Key",
            assignmentDescription:
              "Create a dichotomous key to classify different types of leaves.",
            score: 75,
          },
          {
            assignmentName: "Solar System Model",
            assignmentDescription:
              "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
            score: 98,
          },
          {
            assignmentName: "Chemical Reactions",
            assignmentDescription:
              "Investigate and document three chemical reactions that produce noticeable changes.",
            score: 53,
          },
          {
            assignmentName: "Ecosystem Research",
            assignmentDescription:
              "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
            score: 27,
          },
        ],
      },
      {
        firstName: "Ava",
        lastName: "Johnson",
        average: 78,
        studentAssignment: [
          {
            assignmentName: "Dichotomous Key",
            assignmentDescription:
              "Create a dichotomous key to classify different types of leaves.",
            score: 66,
          },
          {
            assignmentName: "Solar System Model",
            assignmentDescription:
              "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
            score: 58,
          },
          {
            assignmentName: "Chemical Reactions",
            assignmentDescription:
              "Investigate and document three chemical reactions that produce noticeable changes.",
            score: 13,
          },
          {
            assignmentName: "Ecosystem Research",
            assignmentDescription:
              "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
            score: 97,
          },
        ],
      },
    ],
  },
];

export default function App() {
  return (
    <>
      <Nav />
      <Headers />
      <AllStudents />
      <DisplayInterface />
      <AssignmentInfo />
    </>
  );
}

function Headers() {
  return (
    <>
      <div className="students">
        <p>Students</p>
      </div>
      <div className="interface">
        <button className="interfaceButon">Interface</button>
      </div>
      <div className="manageAssignment">
        <button className="assignmentsButton">Assignments</button>
      </div>
      <div className="menu">
        <p>Menu</p>
      </div>
    </>
  );
}

function Nav() {
  const [currentTeacher, setCurrentTeacer] = useState([]);
  const [userName, setUserName] = useState("");
  const [pin, setPin] = useState(null);
  function handleUserName(value) {
    setUserName(value);
  }
  function handlePin(value) {
    setPin(Number(value));
  }
  function handleLogin(e) {
    e.preventDefault();
    setCurrentTeacer((prev) => {
      const newArr = data.find((obj) => obj.userName === userName);
      console.log(newArr);
      if (newArr) {
        if (newArr.userPin === pin) {
          return (prev = newArr);
        }
      } else {
        alert("Wrong credentials");
        setUserName((prev) => "");
        setPin((prev) => null);
        return prev;
      }
    });
  }
  return (
    <nav className="topMenu">
      <div className="logoContainer">
        <img src="aida.png" alt="logo" />
        <p>AIDA</p>
      </div>
      <form className="login" onSubmit={(e) => handleLogin(e)}>
        <input
          type="text"
          className="userName"
          placeholder="user name"
          onChange={(e) => {
            handleUserName(e.target.value);
          }}
        />
        <input
          type="text"
          className="userPin"
          placeholder="pin"
          onChange={(e) => handlePin(e.target.value)}
        />
        <button className="loginButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="3rem"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </form>
    </nav>
  );
}

function AllStudents() {
  return (
    <section className="allStudents">
      <div className="specificStudent">
        <div className="specificStudentContainer">
          <p className="specificStudentFirstName">Jadsfdsfde</p>
          <p className="specificStudentLastName">Pineda</p>
          <p className="specificStudentScore">98</p>
        </div>
      </div>
      <div className="specificStudent">
        <div className="specificStudentContainer">
          <p className="specificStudentFirstName">Jadsfdsfde</p>
          <p className="specificStudentLastName">Pineda</p>
          <p className="specificStudentScore">98</p>
        </div>
      </div>
      <div className="specificStudent">
        <div className="specificStudentContainer">
          <p className="specificStudentFirstName">Jadsfdsfde</p>
          <p className="specificStudentLastName">Pineda</p>
          <p className="specificStudentScore">98</p>
        </div>
      </div>
      <div className="specificStudent">
        <div className="specificStudentContainer">
          <p className="specificStudentFirstName">Jadsfdsfde</p>
          <p className="specificStudentLastName">Pineda</p>
          <p className="specificStudentScore">98</p>
        </div>
      </div>
      <div className="specificStudent">
        <div className="specificStudentContainer">
          <p className="specificStudentFirstName">Jadsfdsfde</p>
          <p className="specificStudentLastName">Pineda</p>
          <p className="specificStudentScore">98</p>
        </div>
      </div>
      <div className="specificStudent">
        <div className="specificStudentContainer">
          <p className="specificStudentFirstName">Jadsfdsfde</p>
          <p className="specificStudentLastName">Pineda</p>
          <p className="specificStudentScore">98</p>
        </div>
      </div>
      <div className="specificStudent">
        <div className="specificStudentContainer">
          <p className="specificStudentFirstName">Jadsfdsfde</p>
          <p className="specificStudentLastName">Pineda</p>
          <p className="specificStudentScore">98</p>
        </div>
      </div>
      <div className="specificStudent">
        <div className="specificStudentContainer">
          <p className="specificStudentFirstName">Jadsfdsfde</p>
          <p className="specificStudentLastName">Pineda</p>
          <p className="specificStudentScore">98</p>
        </div>
      </div>
      <div className="specificStudent">
        <div className="specificStudentContainer">
          <p className="specificStudentFirstName">Jadsfdsfde</p>
          <p className="specificStudentLastName">Pineda</p>
          <p className="specificStudentScore">98</p>
        </div>
      </div>
    </section>
  );
}

function DisplayInterface() {
  return (
    <section className="displayInterface">
      <div className="interfaceDisplay">
        <div className="studentID">
          <p>student id:</p>
          <p>239</p>
        </div>
        <div className="name">
          <p>Jade</p>
          <p>Pineda</p>
        </div>
        <div className="studentAverage">
          <p>student avg:</p>
          <p>87</p>
        </div>
        <div className="entry">
          <p>Entry</p>
        </div>
        <div className="assignment">
          <p>Assignment</p>
        </div>
        <div className="grade">
          <p>Grade</p>
        </div>
        <div className="assignmentContainer">
          <div className="specificAssignment">
            <div className="entryNumber">
              <p>100</p>
            </div>
            <div className="specificAssignmentInfo">
              <div>
                <p>Assignment Name</p>
              </div>
              <p>Assignment Description</p>
            </div>
            <div className="assignmentGrade">
              <p>100</p>
              <p>A+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AssignmentInfo() {
  return (
    <section className="assignmentInfo">
      <div className="specificAssignmentMenu">
        <p>Assignment Name</p>
        <div className="specificStats">
          <p>avg:</p>
          <p>87</p>
        </div>
      </div>
      <div className="listOfStudents">
        <div className="studentNameAssignment">
          <div className="studentName">
            <p>Jade</p>
            <p>Pineda</p>
          </div>
          <input type="text" />
        </div>
      </div>
    </section>
  );
}

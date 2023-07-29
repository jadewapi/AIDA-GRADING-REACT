import { useState } from "react";
function App() {
  const [data, setData] = useState([
    {
      teacherName: "Jade Pineda",
      userName: "jp",
      userPin: "1111",
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
          average: 82,
          studentId: "111",
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
              score: 78,
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
          studentId: "187",
          studentAssignment: [
            {
              assignmentName: "Dichotomous Key",
              assignmentDescription:
                "Create a dichotomous key to classify different types of leaves.",
              score: 18,
            },
            {
              assignmentName: "Solar System Model",
              assignmentDescription:
                "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
              score: 75,
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
              score: 67,
            },
          ],
        },
        {
          firstName: "Olivia",
          lastName: "Smith",
          average: 92,
          studentId: "002",
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
          studentId: "191",
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
          studentId: "771",
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
  ]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [currentAssignment, setCurrentAssignment] = useState("");
  function handleCurrentAssignment(assignmentName) {
    setCurrentAssignment(assignmentName);
  }
  function handleScoreChange(studentId, score) {
    setCurrentTeacher((prev) => {
      if (prev) {
        const updatedTeacher = { ...prev };
        const studentToUpdate = updatedTeacher.allStudents.find(
          (studentObj) => studentObj.studentId === studentId
        );
        if (studentToUpdate) {
          const assignmentToUpdate = studentToUpdate.studentAssignment.find(
            (assignmentObj) =>
              assignmentObj.assignmentName === currentAssignment
          );
          if (assignmentToUpdate) {
            assignmentToUpdate.score = Number(score);
          }
        }
        return updatedTeacher;
      }
      return prev;
    });
  }
  function currentAssignmentClicked(assignmentName) {
    if (currentAssignment.assignmentName === assignmentName) {
      return { backgroundColor: "black" };
    }
  }
  return (
    <>
      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
      <Navbar
        data={data}
        setCurrentTeacher={setCurrentTeacher}
        setLoggedIn={setLoggedIn}
      />
      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
      <AllStudents
        currentTeacher={currentTeacher}
        setCurrentStudent={setCurrentStudent}
      />
      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
      <DisplayInterface
        currentStudent={currentStudent}
        loggedIn={loggedIn}
        handleCurrentAssignment={handleCurrentAssignment}
        currentAssignmentClicked={currentAssignmentClicked}
      />
      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
      <AssignmentInfo
        currentAssignment={currentAssignment}
        currentTeacher={currentTeacher}
        handleScoreChange={handleScoreChange}
      />
      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
      <Buttons />
    </>
  );
}
export default App;

function AssignmentInfo({
  currentTeacher,
  currentAssignment,
  handleScoreChange,
}) {
  return (
    <section class="assignmentInfo">
      <div class="specificAssignmentMenu">
        <p>{currentAssignment}</p>
      </div>
      <div class="listOfStudents">
        {currentTeacher?.allStudents.map((studentObj) => {
          const selectedAssignment = studentObj.studentAssignment.find(
            (assignmentObj) =>
              assignmentObj.assignmentName === currentAssignment
          );
          return (
            selectedAssignment && (
              <div class="studentNameAssignment" key={studentObj.studentId}>
                <div class="studentName">
                  <p>{studentObj.firstName}</p>
                  <p>{studentObj.lastName}</p>
                </div>
                <input
                  key={`${studentObj.studentId}-${currentAssignment}`}
                  type="text"
                  placeholder={selectedAssignment.score}
                  onChange={(e) =>
                    handleScoreChange(studentObj.studentId, e.target.value)
                  }
                  className="scoreInput"
                />
              </div>
            )
          );
        })}
      </div>
    </section>
  );
}

function DisplayInterface({
  loggedIn,
  currentStudent,
  handleCurrentAssignment,
  currentAssignmentClicked,
}) {
  function determineGradeLetter(assignmentScore) {
    const gradeLetter =
      assignmentScore >= 95
        ? "A+"
        : assignmentScore >= 90
        ? "A-"
        : assignmentScore >= 85
        ? "B+"
        : assignmentScore >= 80
        ? "B-"
        : assignmentScore >= 75
        ? "C+"
        : assignmentScore >= 70
        ? "C-"
        : "Fail";
    return gradeLetter;
  }
  function determineGradeColor(assignmentScore) {
    let style = { backgroundColor: "black" };

    if (assignmentScore >= 90 && assignmentScore <= 100) {
      style = { backgroundColor: "green" };
    }

    if (assignmentScore >= 75 && assignmentScore <= 89) {
      style = { backgroundColor: "#ddbb00" };
    }

    if (assignmentScore >= 60 && assignmentScore <= 74) {
      style = { backgroundColor: "#7b0000" };
    }

    return style;
  }
  return (
    <section class="displayInterface">
      {loggedIn && currentStudent && (
        <div class="interfaceDisplay">
          <div class="studentID">
            <p>student id:</p>
            <p>{currentStudent.studentId}</p>
          </div>
          <div class="name">
            <p>{currentStudent.firstName}</p>
            <p>{currentStudent.lastName}</p>
          </div>
          <div class="studentAverage">
            <p>student avg:</p>
            <p>{currentStudent.average}</p>
          </div>
          <div class="entry">
            <p>Entry</p>
          </div>
          <div class="assignment">
            <p>Assignment</p>
          </div>
          <div class="grade">
            <p>Grade</p>
          </div>
          <div class="assignmentContainer">
            {currentStudent.studentAssignment.map((assignmentObj, index) => (
              <div
                style={currentAssignmentClicked(assignmentObj.assignmentName)}
                class="specificAssignment"
                key={assignmentObj.assignmentName}
                onClick={() =>
                  handleCurrentAssignment(assignmentObj.assignmentName)
                }
              >
                <div class="entryNumber">
                  <p>{index + 1}</p>
                </div>
                <div class="specificAssignmentInfo">
                  <div>
                    <p>{assignmentObj.assignmentName}</p>
                  </div>
                  <p>{assignmentObj.assignmentDescription}</p>
                </div>
                <div class="assignmentGrade">
                  <p style={determineGradeColor(assignmentObj.score)}>
                    {assignmentObj.score}
                  </p>
                  <p>{determineGradeLetter(assignmentObj.score)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function AllStudents({ currentTeacher, setCurrentStudent }) {
  function handleCurrentStudent(studentId) {
    setCurrentStudent((prev) =>
      currentTeacher.allStudents.find(
        (studentObj) => studentObj.studentId === studentId
      )
    );
  }
  return (
    <section class="allStudents">
      {currentTeacher &&
        currentTeacher.allStudents.map((studentObj) => (
          <div
            class="specificStudent"
            onClick={() => handleCurrentStudent(studentObj.studentId)}
            key={studentObj.studentId}
          >
            <div class="specificStudentContainer">
              <p class="specificStudentFirstName">{studentObj.firstName}</p>
              <p class="specificStudentLastName">{studentObj.lastName}</p>
              <p class="specificStudentScore">{studentObj.average}</p>
            </div>
          </div>
        ))}
    </section>
  );
}

function Navbar({ data, setCurrentTeacher, setLoggedIn }) {
  const [userPin, setUserPin] = useState("");
  const [userName, setUserName] = useState("");
  function handleSubmitTeacherLogin(e) {
    e.preventDefault();
    const teacher = data.find(
      (teacherObj) =>
        teacherObj.userName === userName && teacherObj.userPin === userPin
    );
    if (teacher) {
      setCurrentTeacher(teacher);
      setLoggedIn(true);
    }
  }

  return (
    <nav class="topMenu">
      <div class="logoContainer">
        <img src="aida.png" alt="logo" />
        <p>AIDA</p>
      </div>
      <form class="login" onSubmit={(e) => handleSubmitTeacherLogin(e)}>
        <input
          type="text"
          class="userName"
          placeholder="user name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <input
          type="text"
          class="userPin"
          placeholder="pin"
          onChange={(e) => setUserPin(e.target.value)}
          value={userPin}
        />
        <button class="loginButton">
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

function Buttons() {
  return (
    <>
      <div class="students">
        <p>Students</p>
      </div>
      <div class="interface">
        <button class="interfaceButon">Interface</button>
      </div>
      <div class="manageAssignment">
        <button class="assignmentsButton">Assignments</button>
      </div>
      <div class="menu">
        <p>Menu</p>
      </div>
    </>
  );
}

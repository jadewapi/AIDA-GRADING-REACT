import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([
    {
      teacherName: "Jade Pineda",
      userName: "jp",
      userPin: "1111",
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
            if (isNaN(score)) {
              assignmentToUpdate.score = 0;
            }
            if (!isNaN(score)) {
              assignmentToUpdate.score = Math.min(Math.abs(Number(score)), 100);
            }
          }
          const sumAssignment = studentToUpdate.studentAssignment.reduce(
            (acc, curr) => {
              return acc + curr.score;
            },
            0
          );
          studentToUpdate.average = Math.round(
            sumAssignment / studentToUpdate.studentAssignment.length
          );
        }
        return updatedTeacher;
      }
      return prev;
    });
  }
  function determineGradeColor(assignmentScore) {
    let style = { backgroundColor: "black" };

    if (assignmentScore >= 90 && assignmentScore <= 100) {
      style = { backgroundColor: "green" };
    }

    if (assignmentScore >= 75 && assignmentScore <= 89) {
      style = { backgroundColor: "#ddbb00" };
    }

    if (assignmentScore >= 1 && assignmentScore <= 74) {
      style = { backgroundColor: "#d10000" };
    }

    return style;
  }
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
  const [showedContent, setShowedContent] = useState("interfaceButton");
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
        currentStudent={currentStudent}
        determineGradeColor={determineGradeColor}
      />
      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
      <DisplayInterface>
        {!loggedIn && (
          <p className="pleaseLogin">Please login. Username: jp, Pin: 1111</p>
        )}
        {loggedIn && currentStudent && showedContent === "interfaceButton" && (
          <StudentViewMenu
            currentStudent={currentStudent}
            handleCurrentAssignment={handleCurrentAssignment}
            currentAssignment={currentAssignment}
            determineGradeColor={determineGradeColor}
            determineGradeLetter={determineGradeLetter}
          />
        )}
        {loggedIn &&
          currentStudent &&
          showedContent === "assignmentsButton" && (
            <AssignmentMenu
              setCurrentTeacher={setCurrentTeacher}
              currentTeacher={currentTeacher}
              setData={setData}
              setShowedContent={setShowedContent}
            />
          )}
      </DisplayInterface>
      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
      <AssignmentInfo
        currentAssignment={currentAssignment}
        currentTeacher={currentTeacher}
        handleScoreChange={handleScoreChange}
        currentStudent={currentStudent}
      />
      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
      <Buttons
        setShowedContent={setShowedContent}
        showedContent={showedContent}
      />
    </>
  );
}
export default App;
function AssignmentMenu({ currentTeacher, setData, setShowedContent }) {
  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDescription, setAssignmentDescription] = useState("");
  function handleReset() {
    setAssignmentName("");
    setAssignmentDescription("");
  }
  function handleAddAssignment() {
    setData((prev) => {
      const updatedPrev = [...prev];
      const teacherToUpdate = updatedPrev.find(
        (teacherObj) => teacherObj.userPin === currentTeacher.userPin
      );
      teacherToUpdate.allStudents.forEach((studentObj) => {
        const newAssignment = {
          assignmentName: assignmentName,
          assignmentDescription: assignmentDescription,
          score: 0,
        };
        studentObj.studentAssignment = [
          newAssignment,
          ...studentObj.studentAssignment,
        ];
      });
      return updatedPrev;
    });
  }
  return (
    <div class="assignmentDisplay">
      <div class="navigation">
        <button>Add assignment</button>
        <button>Delete assignment</button>
      </div>
      <div class="addAssignments">
        <textarea
          placeholder="enter assignment name..."
          onChange={(e) => setAssignmentName(e.target.value)}
        ></textarea>
        <textarea
          placeholder="enter assignment description..."
          onChange={(e) => setAssignmentDescription(e.target.value)}
        ></textarea>
        <div class="buttonContainer">
          <button onClick={() => handleReset()}>Reset</button>
          <button
            onClick={() => {
              handleAddAssignment();
              console.log(currentTeacher);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

function DisplayInterface({ children }) {
  return <section class="displayInterface">{children}</section>;
}

function StudentViewMenu({
  currentStudent,
  handleCurrentAssignment,
  currentAssignment,
  determineGradeColor,
  determineGradeLetter,
}) {
  return (
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
            class="specificAssignment"
            key={assignmentObj.assignmentName}
            onClick={() =>
              handleCurrentAssignment(assignmentObj.assignmentName)
            }
            style={
              assignmentObj.assignmentName === currentAssignment
                ? { backgroundColor: "#a33600" }
                : {}
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
  );
}

function AssignmentInfo({
  currentTeacher,
  currentAssignment,
  handleScoreChange,
  currentStudent,
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
              <div
                class="studentNameAssignment"
                key={studentObj.studentId}
                style={
                  currentStudent.studentId === studentObj.studentId
                    ? {
                        backgroundColor: "#a33600",
                        color: "white",
                        borderLeft: "4px solid white",
                      }
                    : {}
                }
              >
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

function AllStudents({
  currentTeacher,
  setCurrentStudent,
  currentStudent,
  determineGradeColor,
}) {
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
            style={{
              ...determineGradeColor(studentObj.average),
              ...(currentStudent
                ? currentStudent.studentId === studentObj.studentId
                  ? { border: "2px solid white", filter: "saturate(2)" }
                  : {}
                : {}),
            }}
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

function Buttons({ setShowedContent, showedContent }) {
  return (
    <>
      <div class="students">
        <p>Students</p>
      </div>
      <div class="interface">
        <button
          class="interfaceButton"
          onClick={(e) => {
            setShowedContent(e.target.className);
          }}
          style={
            showedContent === "interfaceButton"
              ? { backgroundColor: "black", color: "white" }
              : {}
          }
        >
          Interface
        </button>
      </div>
      <div class="manageAssignment">
        <button
          class="assignmentsButton"
          onClick={(e) => {
            setShowedContent(e.target.className);
          }}
          style={
            showedContent === "assignmentsButton"
              ? { backgroundColor: "black", color: "white" }
              : {}
          }
        >
          Assignments
        </button>
      </div>
      <div class="menu">
        <p>Menu</p>
      </div>
    </>
  );
}

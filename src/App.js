import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const initialData = [
    {
      teacherName: "Jade Pineda",
      userName: "jp",
      userPin: "1111",
      allStudents: [
        {
          firstName: "Emma",
          lastName: "Thompson",
          average: 90,
          studentId: "111",
          studentAssignment: [
            {
              assignmentName: "Dichotomous Key",
              assignmentDescription:
                "Create a dichotomous key to classify different types of leaves.",
              score: 76,
              id: "hlsd1212jkhfiuq",
            },
            {
              assignmentName: "Solar System Model",
              assignmentDescription:
                "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
              score: 78,
              id: "uh991283hds",
            },
            {
              assignmentName: "Chemical Reactions",
              assignmentDescription:
                "Investigate and document three chemical reactions that produce noticeable changes.",
              score: 98,
              id: "82963hfsdhj92",
            },
            {
              assignmentName: "Ecosystem Research",
              assignmentDescription:
                "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
              score: 87,
              id: "82389712398jhsbdjsf",
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
              score: 88,
              id: "hlsd1212jkhfiuq",
            },
            {
              assignmentName: "Solar System Model",
              assignmentDescription:
                "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
              score: 75,
              id: "uh991283hds",
            },
            {
              assignmentName: "Chemical Reactions",
              assignmentDescription:
                "Investigate and document three chemical reactions that produce noticeable changes.",
              score: 78,
              id: "82963hfsdhj92",
            },
            {
              assignmentName: "Ecosystem Research",
              assignmentDescription:
                "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
              score: 80,
              id: "82389712398jhsbdjsf",
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
              id: "hlsd1212jkhfiuq",
            },
            {
              assignmentName: "Solar System Model",
              assignmentDescription:
                "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
              score: 78,
              id: "uh991283hds",
            },
            {
              assignmentName: "Chemical Reactions",
              assignmentDescription:
                "Investigate and document three chemical reactions that produce noticeable changes.",
              score: 90,
              id: "82963hfsdhj92",
            },
            {
              assignmentName: "Ecosystem Research",
              assignmentDescription:
                "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
              score: 63,
              id: "82389712398jhsbdjsf",
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
              id: "hlsd1212jkhfiuq",
            },
            {
              assignmentName: "Solar System Model",
              assignmentDescription:
                "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
              score: 98,
              id: "uh991283hds",
            },
            {
              assignmentName: "Chemical Reactions",
              assignmentDescription:
                "Investigate and document three chemical reactions that produce noticeable changes.",
              score: 80,
              id: "82963hfsdhj92",
            },
            {
              assignmentName: "Ecosystem Research",
              assignmentDescription:
                "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
              score: 77,
              id: "82389712398jhsbdjsf",
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
              score: 89,
              id: "hlsd1212jkhfiuq",
            },
            {
              assignmentName: "Solar System Model",
              assignmentDescription:
                "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
              score: 76,
              id: "uh991283hds",
            },
            {
              assignmentName: "Chemical Reactions",
              assignmentDescription:
                "Investigate and document three chemical reactions that produce noticeable changes.",
              score: 91,
              id: "82963hfsdhj92",
            },
            {
              assignmentName: "Ecosystem Research",
              assignmentDescription:
                "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
              score: 97,
              id: "82389712398jhsbdjsf",
            },
          ],
        },
      ],
    },
  ];
  const processedData = initialData.map((teacher) => {
    teacher.allStudents = teacher.allStudents.map((student) => {
      const totalScore = student.studentAssignment.reduce(
        (sum, assignment) => sum + assignment.score,
        0
      );
      const average = Math.round(totalScore / student.studentAssignment.length);
      return { ...student, average };
    });
    return teacher;
  });
  const [data, setData] = useState(processedData);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [currentAssignment, setCurrentAssignment] = useState("");
  function handleCurrentAssignment(assignmentId) {
    setCurrentAssignment(
      currentStudent.studentAssignment.find((obj) => obj.id === assignmentId)
    );
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
            (assignmentObj) => assignmentObj.id === currentAssignment?.id
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

    if (assignmentScore >= 70 && assignmentScore <= 89) {
      style = { backgroundColor: "#ddbb00" };
    }

    if (assignmentScore >= 1 && assignmentScore <= 69) {
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
        setCurrentTeacher={setCurrentTeacher}
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
              currentTeacher={currentTeacher}
              setCurrentTeacher={setCurrentTeacher}
              setData={setData}
              setShowedContent={setShowedContent}
              handleCurrentAssignment={handleCurrentAssignment}
              currentStudent={currentStudent}
              setCurrentAssignment={setCurrentAssignment}
              currentAssignment={currentAssignment}
            />
          )}
      </DisplayInterface>
      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
      <AssignmentInfo
        currentAssignment={currentAssignment}
        currentTeacher={currentTeacher}
        handleScoreChange={handleScoreChange}
        currentStudent={currentStudent}
        handleCurrentAssignment={handleCurrentAssignment}
        setCurrentAssignment={setCurrentAssignment}
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
function AssignmentMenu({
  setCurrentTeacher,
  currentTeacher,
  setData,
  setShowedContent,
  handleCurrentAssignment,
  currentStudent,
  setCurrentAssignment,
  currentAssignment,
}) {
  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDescription, setAssignmentDescription] = useState("");
  const [addOrDelete, setAddOrDelete] = useState("add");
  function handleReset() {
    setAssignmentName("");
    setAssignmentDescription("");
  }
  function handleAddAssignment() {
    // setData((prev) => {
    //   const updatedPrev = [...prev];
    //   const teacherToUpdate = updatedPrev.find(
    //     (teacherObj) =>
    //       teacherObj.userPin === currentTeacher.userPin &&
    //       teacherObj.userName === currentTeacher.userName
    //   );
    //   const id = nanoid();
    //   teacherToUpdate.allStudents.forEach((studentObj) => {
    //     const newAssignment = {
    //       assignmentName: assignmentName,
    //       assignmentDescription: assignmentDescription,
    //       score: "?",
    //       id: id,
    //     };
    //     studentObj.studentAssignment = [
    //       newAssignment,
    //       ...studentObj.studentAssignment,
    //     ];
    //   });
    //   setShowedContent("interfaceButton");
    //   return updatedPrev;
    // });
    setCurrentTeacher((prev) => {
      const modifiedTeacherState = { ...prev };
      const id = nanoid();
      let currentAssignmentId;
      modifiedTeacherState.allStudents.forEach((studentObj) => {
        const newAssignment = {
          assignmentName: assignmentName,
          assignmentDescription: assignmentDescription,
          score: 0,
          id: id,
        };
        currentAssignmentId = id;
        studentObj.studentAssignment = [
          newAssignment,
          ...studentObj.studentAssignment,
        ];
      });
      modifiedTeacherState.allStudents.forEach((studentObj) => {
        const sum = studentObj.studentAssignment.reduce((acc, curr) => {
          return acc + curr.score;
        }, 0);
        studentObj.average = Math.round(
          sum / studentObj.studentAssignment.length
        );
      });
      const newAssignment = modifiedTeacherState.allStudents
        .flatMap((student) => student.studentAssignment)
        .find((assignment) => assignment.id === currentAssignmentId);
      setCurrentAssignment(newAssignment);
      setShowedContent("interfaceButton");
      return modifiedTeacherState;
    });
  }
  function handleDeleteAssignment(assignmentId) {
    setCurrentTeacher((prev) => {
      const newTeacherState = { ...prev };
      newTeacherState.allStudents.forEach((studentObj) => {
        const removedAssignment = studentObj.studentAssignment.filter(
          (assignmentObj) => {
            return assignmentObj.id !== assignmentId;
          }
        );
        studentObj.studentAssignment = removedAssignment;
      });
      newTeacherState.allStudents.forEach((studentObj) => {
        const sum = studentObj.studentAssignment.reduce((acc, curr) => {
          return acc + curr.score;
        }, 0);
        studentObj.average = Math.round(
          sum / studentObj.studentAssignment.length
        );
      });
      if (assignmentId === currentAssignment?.id) {
        setCurrentAssignment(null);
      }
      return newTeacherState;
    });
  }
  return (
    <div
      className="assignmentDisplay"
      style={
        addOrDelete === "add"
          ? { backgroundColor: "green" }
          : { backgroundColor: "red" }
      }
    >
      <div className="navigation">
        <button
          onClick={() => setAddOrDelete("add")}
          style={
            addOrDelete === "add"
              ? { backgroundColor: "black", color: "white" }
              : {}
          }
        >
          Add assignment
        </button>
        <button
          onClick={() => setAddOrDelete("delete")}
          style={
            addOrDelete === "delete"
              ? { backgroundColor: "black", color: "white" }
              : {}
          }
        >
          Delete assignment
        </button>
      </div>
      {addOrDelete === "add" ? (
        <div className="addAssignments">
          <textarea
            placeholder="enter assignment name..."
            onChange={(e) => setAssignmentName(e.target.value)}
            value={assignmentName}
          ></textarea>
          <textarea
            placeholder="enter assignment description..."
            onChange={(e) => setAssignmentDescription(e.target.value)}
            value={assignmentDescription}
          ></textarea>
          <div className="buttonContainer">
            <button onClick={() => handleReset()}>Reset</button>
            <button
              onClick={() => {
                handleAddAssignment();
              }}
            >
              Update
            </button>
          </div>
        </div>
      ) : addOrDelete === "delete" ? (
        <div className="deleteAssignmentMenu">
          {currentStudent.studentAssignment.map((assignmentObj) => (
            <div className="assignmentDelete">
              <p key={assignmentObj.id}>{assignmentObj.assignmentName}</p>
              <button onClick={() => handleDeleteAssignment(assignmentObj.id)}>
                X
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>jade</p>
      )}
    </div>
  );
}

function DisplayInterface({ children }) {
  return <section className="displayInterface">{children}</section>;
}

function StudentViewMenu({
  currentStudent,
  handleCurrentAssignment,
  currentAssignment,
  determineGradeColor,
  determineGradeLetter,
}) {
  return (
    <div className="interfaceDisplay">
      <div className="studentID">
        <p>student id:</p>
        <p>{currentStudent.studentId}</p>
      </div>
      <div className="name">
        <p>{currentStudent.firstName}</p>
        <p>{currentStudent.lastName}</p>
      </div>
      <div className="studentAverage">
        <p>student avg:</p>
        <p>{currentStudent.average}</p>
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
        {currentStudent.studentAssignment.map((assignmentObj, index) => (
          <div
            className="specificAssignment"
            key={assignmentObj.assignmentName}
            onClick={() => handleCurrentAssignment(assignmentObj.id)}
            style={
              assignmentObj.id === currentAssignment?.id
                ? { backgroundColor: "#a33600" }
                : {}
            }
          >
            <div className="entryNumber">
              <p>{index + 1}</p>
            </div>
            <div className="specificAssignmentInfo">
              <div>
                <p>{assignmentObj.assignmentName}</p>
              </div>
              <p>{assignmentObj.assignmentDescription}</p>
            </div>
            <div className="assignmentGrade">
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
    <section className="assignmentInfo">
      <div className="specificAssignmentMenu">
        {!currentTeacher && <p>Login: jp, 1111</p>}
        {currentTeacher && !currentStudent && <p>Select student</p>}
        {currentTeacher && currentStudent && !currentAssignment && (
          <p>Select assignment</p>
        )}
        {currentStudent && currentStudent && (
          <p>{currentAssignment?.assignmentName}</p>
        )}
      </div>
      <div className="listOfStudents">
        {currentTeacher?.allStudents.map((studentObj) => {
          const selectedAssignment = studentObj.studentAssignment.find(
            (assignmentObj) => assignmentObj.id === currentAssignment?.id
          );
          return (
            selectedAssignment && (
              <div
                className="studentNameAssignment"
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
                <div className="studentName">
                  <p>{studentObj.firstName}</p>
                  <p>{studentObj.lastName}</p>
                </div>
                <input
                  key={`${studentObj.studentId}-${currentAssignment?.id}`}
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
  setCurrentTeacher,
}) {
  function handleCurrentStudent(studentId) {
    setCurrentStudent((prev) =>
      currentTeacher.allStudents.find(
        (studentObj) => studentObj.studentId === studentId
      )
    );
  }
  return (
    <section className="allStudents">
      {currentTeacher &&
        currentTeacher.allStudents.map((studentObj) => (
          <div
            className="specificStudent"
            onClick={() => handleCurrentStudent(studentObj.studentId)}
            key={studentObj.studentId}
            style={{
              ...determineGradeColor(studentObj.average),
              ...(currentStudent
                ? currentStudent.studentId === studentObj.studentId
                  ? { border: "2px solid white", filter: "saturate(2)" }
                  : {}
                : {}),
              ...(isNaN(studentObj.average)
                ? { backgroundColor: "rgb(0, 58, 134)" }
                : {}),
            }}
          >
            <div className="specificStudentContainer">
              <p className="specificStudentFirstName">{studentObj.firstName}</p>
              <p className="specificStudentLastName">{studentObj.lastName}</p>
              <p
                className="specificStudentScore"
                style={isNaN(studentObj.average) ? { color: "#c0c0c078" } : {}}
              >
                {isNaN(studentObj.average) ? "???" : studentObj.average}
              </p>
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
    <nav className="topMenu">
      <div className="logoContainer">
        <img src="aida.png" alt="logo" />
        <p>AIDA</p>
      </div>
      <form className="login" onSubmit={(e) => handleSubmitTeacherLogin(e)}>
        <input
          type="text"
          className="userName"
          placeholder="user name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <input
          type="text"
          className="userPin"
          placeholder="pin"
          onChange={(e) => setUserPin(e.target.value)}
          value={userPin}
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

function Buttons({ setShowedContent, showedContent }) {
  return (
    <>
      <div className="students">
        <p>Students</p>
      </div>
      <div className="interface">
        <button
          className="interfaceButton"
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
      <div className="manageAssignment">
        <button
          className="assignmentsButton"
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
      <div className="menu">
        <p>Menu</p>
      </div>
    </>
  );
}

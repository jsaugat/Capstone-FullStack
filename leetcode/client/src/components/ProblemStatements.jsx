import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProblemStatements = () => {
  const [problems, setProblems] = useState([]);
  const problems1 = [
    {
      title: "Title1",
      difficulty: "Easy",
      acceptance: "34%",
    },
    {
      title: "Title2",
      difficulty: "Medium",
      acceptance: "65%",
    },
    {
      title: "Title3",
      difficulty: "Easy",
      acceptance: "65%",
    },
  ];
  const problems2 = [
    {
      title: "Title3",
      difficulty: "Hard",
      acceptance: "2%",
    },
    {
      title: "Title4",
      difficulty: "Hard",
      acceptance: "6%",
    },
  ];

  return (
    <div id="problem-statements">
      <div className="space-x-3">
          <button
            className="px-3 py-2 border-gray-500 border rounded-md hover:bg-white hover:text-black"
            onClick={() => setProblems(problems1)}
          >
            1
          </button>

        <button
          className="px-3 py-2 border-gray-500 border rounded-md hover:bg-white hover:text-black"
          onClick={() => setProblems(problems2)}
        >
          2
        </button>
      </div>
      <table className="border border-[#4f4f4f] mt-6">
        <thead className="">
          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <ProblemStatement
              title={problem.title}
              difficulty={problem.difficulty}
              acceptance={problem.acceptance}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProblemStatement = ({ title, difficulty, acceptance }) => {
  return (
    <>
      <tr>
        <Link to={`/problems/${title}`} className="block underline">
          {<td>{title}</td>}
        </Link>
        <td
          style={{
            color:
              difficulty === "Medium"
                ? "orange"
                : difficulty === "Hard"
                ? "red"
                : "skyblue",
          }}
        >
          {difficulty}
        </td>
        <td>{acceptance}</td>
      </tr>
    </>
  );
};

export default ProblemStatements;

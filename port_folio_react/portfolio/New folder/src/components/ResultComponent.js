import { RESULTS } from "../util/ResultsData";

function ResultComponent() {
  console.log("My Results", RESULTS);

  return (
    <>
      <h2>YEAR ONE SEMESTER ONE RESULTS</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Score</th>
            <th>Credit Units</th>
          </tr>
        </thead>
        <tbody>
          {RESULTS.map((result) => (
            <tr key={result.id}>
              <td>{result.course_code}</td>
              <td>{result.course_title}</td>
              <td>{result.score}</td>
              <td>{result.credit_units}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ResultComponent;

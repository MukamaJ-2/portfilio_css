import { useState } from 'react';
import { resultData, RESULTS } from '../util/ResultsData';

function Results() {
  const [results, setResults] = useState(RESULTS);
  const [newResult, setNewResult] = useState({
    courseCode: '',
    courseTitle: '',
    grade: '',
    creditUnits: '',
    year: 'year1',
    semester: 'sem1'
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { year, semester, ...resultData } = newResult;
    setResults({
      ...results,
      [year]: {
        ...results[year],
        [semester]: [...results[year][semester], { ...resultData, creditUnits: parseInt(resultData.creditUnits) }]
      }
    });
    setNewResult({
      courseCode: '',
      courseTitle: '',
      grade: '',
      creditUnits: '',
      year: 'year1',
      semester: 'sem1'
    });
    setIsAdding(false);
  };

  const handleDelete = (year, semester, index) => {
    setResults({
      ...results,
      [year]: {
        ...results[year],
        [semester]: results[year][semester].filter((_, i) => i !== index)
      }
    });
  };

  const calculateGPA = (courses) => {
    if (!courses.length) return 0;
    const gradePoints = {
      'A': 5.0, 'A-': 4.7, 'B+': 4.3, 'B': 4.0, 'B-': 3.7,
      'C+': 3.3, 'C': 3.0, 'C-': 2.7, 'D+': 2.3, 'D': 2.0, 'F': 0
    };
    
    const totalPoints = courses.reduce((sum, course) => 
      sum + (gradePoints[course.grade] * course.creditUnits), 0);
    const totalUnits = courses.reduce((sum, course) => sum + course.creditUnits, 0);
    
    return (totalPoints / totalUnits).toFixed(2);
  };

  const ResultsTable = ({ courses, year, semester, title }) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        {title}
        <span className="ml-2 text-sm font-normal text-gray-600 dark:text-gray-400">
          (GPA: {calculateGPA(courses)})
        </span>
      </h3>
      <div className="overflow-x-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-4">Course Code</th>
              <th className="px-6 py-4">Course Title</th>
              <th className="px-6 py-4">Grade</th>
              <th className="px-6 py-4">Credit Units</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((result, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">{result.courseCode}</td>
                <td className="px-6 py-4">{result.courseTitle}</td>
                <td className="px-6 py-4">{result.grade}</td>
                <td className="px-6 py-4">{result.creditUnits}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(year, semester, index)}
                    className="text-red-600 hover:text-red-800 transition-colors focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="results-section">
      <h2>ACADEMIC RESULTS</h2>
      
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:-translate-y-1"
        >
          {isAdding ? 'Cancel' : 'Add New Result'}
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="mb-6 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year
              </label>
              <select
                value={newResult.year}
                onChange={(e) => setNewResult({ ...newResult, year: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              >
                <option value="year1">Year 1</option>
                <option value="year2">Year 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Semester
              </label>
              <select
                value={newResult.semester}
                onChange={(e) => setNewResult({ ...newResult, semester: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              >
                <option value="sem1">Semester 1</option>
                <option value="sem2">Semester 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Code
              </label>
              <input
                type="text"
                value={newResult.courseCode}
                onChange={(e) => setNewResult({ ...newResult, courseCode: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter course code"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Title
              </label>
              <input
                type="text"
                value={newResult.courseTitle}
                onChange={(e) => setNewResult({ ...newResult, courseTitle: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter course title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Grade
              </label>
              <select
                value={newResult.grade}
                onChange={(e) => setNewResult({ ...newResult, grade: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              >
                <option value="">Select Grade</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="C-">C-</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Credit Units
              </label>
              <input
                type="number"
                min="1"
                max="6"
                value={newResult.creditUnits}
                onChange={(e) => setNewResult({ ...newResult, creditUnits: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter credit units"
                required
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:-translate-y-1"
            >
              Save Result
            </button>
          </div>
        </form>
      )}

      <div className="space-y-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Year 1</h2>
          <ResultsTable 
            courses={results.year1.sem1} 
            year="year1" 
            semester="sem1" 
            title="Semester 1" 
          />
          <ResultsTable 
            courses={results.year1.sem2} 
            year="year1" 
            semester="sem2" 
            title="Semester 2" 
          />
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Year 2</h2>
          <ResultsTable 
            courses={results.year2.sem1} 
            year="year2" 
            semester="sem1" 
            title="Semester 1" 
          />
          <ResultsTable 
            courses={results.year2.sem2} 
            year="year2" 
            semester="sem2" 
            title="Semester 2" 
          />
        </div>
      </div>
    </div>
  );
}

export default Results;
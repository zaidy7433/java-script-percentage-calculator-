var mathMarks = prompt("Enter math marks:");
var scienceMarks = prompt("Enter science marks:");
var englishMarks = prompt("Enter english marks:");
var pstMarks = prompt("Enter pst marks:");
var urduMarks = prompt("Enter urdu marks:");
var totalMarks = 500;
var obtainedMarks = parseInt(mathMarks) + parseInt(scienceMarks) + parseInt(englishMarks) + parseInt(pstMarks) + parseInt(urduMarks);
var percentage = (obtainedMarks / totalMarks) * 100;

alert("Math Marks: " + mathMarks + "\nScience Marks: " + scienceMarks + "\nEnglish Marks: " + englishMarks + "\nPST Marks: " + pstMarks + "\nUrdu Marks: " + urduMarks + "\nTotal Marks: " + obtainedMarks + "\nPercentage: " + percentage + "%");

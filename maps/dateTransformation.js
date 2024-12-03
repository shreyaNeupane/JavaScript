const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);


function formatDates(element) {
    const months= ["jan", "Feb" ,"Mar" ,"Apr", "Jun" , "July" ,"Aug" ,"Sep" ,"Oct" , "Nov" ,"Dec"];
    const parts = element.split("-");
    return `${months[months- 1]} ${parts[2]}, ${parts[0]}`;
}
// ["Jan 10, 2024", "Feb 20, 2025", "Mar 30, 2026"]
console.log(formattedDates);


const notes = [
    {
        id: 1,
        subject: "NSS Origins",
        date: "May 17th",
        feeling: "impressed",
        timeSpent: 120
    },
    {
        id: 2,
        subject: "Flexbox",
        date: "May 19th",
        feeling: "determined",
        timeSpent: 240
    }
]

const labDayNote = {
    id: 3,
    subject: "Lab Day",
    date: "May 27th",
    feeling: "Jammin",
    timeSpent: 300
}

notes.push(labDayNote);

// for (let note of notes) {
//     console.log(`
//     Note ${note.id}
//     ${note.date}
//     I learned ${note.subject}.
//     I spent ${note.timeSpent} minutes working on it.
//     I felt ${note.feeling}.`);
// }

const searchTerm = "Jammin";

for (const note of notes) {
    if (note.feeling === searchTerm) {
        console.log(note);
    }
}
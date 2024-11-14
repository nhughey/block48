function reconstructQueue(people) {
    // Sort by height desc, then by k asc
    people.sort((a, b) => b[0] === a[0] ? a[1] - b[1] : b[0] - a[0]);
    
    const queue = [];
    
    // Insert each person at their k index
    for (const person of people) {
        queue.splice(person[1], 0, person);
    }
    
    return queue;
 }

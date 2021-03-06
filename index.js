  require ('console.table');  
  // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    
    // Some and Every Checks
    // 1. Array.prototype.some() // is at least one person 19 or older?
      // will check if at least one
        // const isAdult = people.some(person => {
        //   const currentYear = (new Date()).getFullYear()
        //   if(currentYear - person.year >= 19 ){
        //     return true;
        //   }
        // });

        // one lined code
        const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

        // print on console
        console.log({isAdult});
     


    // 2. Array.prototype.every() // is everyone 19 or older?
      // will check if EVERY single one in the array is 
        const areAll = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
        console.log({areAll});

     

    // 3. Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
      const findComment = comments.find(comment => comment.id === 823423);

      console.log({findComment});

    // 4. Array.prototype.findIndex()
      // A. Find the comment with this ID
      const index = comments.findIndex(comment => comment.id === 823423);
      console.log({index});
      // B. delete the comment with the ID of 823423
      const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
      ];

      console.table(newComments);

    


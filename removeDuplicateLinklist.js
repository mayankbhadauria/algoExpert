
function removeDuplicatesFromLinkedList(linkedList) {

    let previousValue = null;
    let head = linkedList;
    
    while(head) {

        previousValue = head.value;

        if(previousValue === head.next?.value) {
            head.next = head.next?.next;
        }
        else head = head.next;
    }

    return linkedList;
}

// const linkedList = {
//   value: 1,
//   next: {
//     value: 1,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: {
//             value: 4,
//             next: {
//                 value: 5,
//                 next: {
//                     value: 6, 
//                     next: null
//                 }
//             }
//         }
//       },
//     },
//   },
// };

const linkedList = {
    value: 1,
    next: {
        value:1,
        next: {
            value: 1,
            next: {
                value: 1,
                next: {
                    value: 1,
                    next: {
                        value: 1,
                        next: null
                    }
                }
            }
        }
    }
  };

console.log("%j", removeDuplicatesFromLinkedList(linkedList));




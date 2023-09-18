
function middleNode(linkedList) {

    let sp = null;
    let dp = null;
    let head = linkedList;

    if(head.next === null) {
        return head
    }
    else {

        dp = head.next;
        sp = head;

        while(dp) {
            if(dp.next && dp.next.next) {
                dp = dp.next.next;
                sp = sp.next;
            }
            else{
                return sp.next;
            }
        }

    }
}

const linkedList = {
    value: 1,
    next: null
  };

console.log("%j", middleNode(linkedList));

//Mistake
// instead of assign sp = sp.next I was assigning sp = head.next
// which actually not increasing sp counter to next but always next of head.
  
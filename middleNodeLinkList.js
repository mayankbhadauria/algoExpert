
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
            if(!dp.next) {
                middle = sp.next; break
            }
            if(!dp.next.next) {
                middle = sp.next; break
            }
        }

    }

    return middle;
}

const linkedList = {
    value: 1,
    next: null
  };

console.log("%j", middleNode(linkedList));
  
if(head==null) return null
if(head.next==null) return head

let newHead=head.next
let curr=head
let prev=null
while(curr!=null && curr.next!=null){
    let temp=curr.next.next
    curr.next.next=curr
    if(prev==null){
        prev=curr
    }
    else{
        prev.next=curr.next
        prev=curr
    }    
    
    curr.next=temp
    curr=curr.next
}

return newHead

https://leetcode.com/problems/swap-nodes-in-pairs/solutions/3112682/javascript-two-pointer-ll-solution/
var sortList = function(head) {
    if(head==null){
        return null;
    }
    let ptr=head;
    let arr=[];
    while(ptr){
        arr.push(ptr.val);
        ptr=ptr.next;
    }
    arr.sort((a,b)=>a-b);
    let n = new ListNode(arr[0]);
    head=n;
    let temp=head;
    for(let i=1;i<arr.length;i++){
        let n1 = new ListNode(arr[i]);
        temp.next=n1;
        temp=temp.next;       
    }
    return head;
};
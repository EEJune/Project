function AllClick(AllClick){
    const checkboxes=document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach((checkbox)=>{
        checkbox.checked=AllClick.checked;
    })
}
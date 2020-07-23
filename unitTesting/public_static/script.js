$(function (){
        let minBox = $('#min')
        let kmBox = $("#km")
        let calcfareBtn  = $('#calcfare')
        let fareDiv = $('#fare')
        calcfareBtn.click(() =>{
                $.post('/calcfare' ,{
                    km : kmBox.val(),
                    min : minBox.val()
                }, (data)=>{
                    fareDiv.text(data.fare)
                })
        })
})
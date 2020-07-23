$(function (){
        let minBox = $('#min')
        let kmBox = $("#km")
        let calcfareBtn  = $('#calcfare')
        let fareDiv = $('#fare')
        let getRatesBtn = $('#getRatesBtn')

        getRatesBtn.click( ()=>{
            $.get('/rates' , (data)=>{
                $('#rates').text(JSON.stringify(data))
            })
        })
        calcfareBtn.click(() =>{
                $.post('/calcfare' ,{
                    km : kmBox.val(),
                    min : minBox.val()
                }, (data)=>{
                    fareDiv.text(data.fare)
                })
        })
})
$(function (){
        let minBox = $('#min')
        let kmBox = $("#km")
        let calcfareBtn  = $('#calcfare')
        let fareDiv = $('#fare')
        let getRatesBtn = $('#getRatesBtn')

        getRatesBtn.click( ()=>{
            $.get('/rates' , (data)=>{
                let prettyRates =`
                Fixed Fare = Rs. ${data.fixed} for ${data.freeKm} 
                <br>
                Fare (Distance) = Rs. ${data.perKm} per Km
                <br>
                Fare (Waiting)  = Rs.${data.perMin} /Min  ( after first ${data.freeMin} Min)
                <br>
                `
                
                $('#rates').html(prettyRates)
            })
        })
        calcfareBtn.click(() =>{
                $.post('/calcfare' ,{
                    km : kmBox.val(),
                    min : minBox.val()
                }, (data)=>{
                    fareDiv.text('Fare : ' +data.fare)
                })
        })
})
const imgObj = [
    {index:0, name: "A10_F.png"},
    {index:1, name: "A8_F.png"},
    {index:2, name: "A7_F.png"},
    {index:3, name: "A6_F.png"},
    {index:4, name: "A11_F.png"},
    {index:5, name: "A13_F.png"},
    {index:6, name: "A14_F.png"},
    {index:7, name: "A15_F.png"},
    {index:8, name: "A16_F.png"},
    {index:9, name: "A21_F.png"},
    {index:10, name: "A26_F-2.png"},
    {index:11, name: "A27_F.png"},
    {index:12, name: "A32_F.png"},
    {index:13, name: "A34_F.png"},
    {index:14, name: "A39_F.png"},
    {index:15, name: "A40_F.png"},
    {index:16, name: "A41_F.png"},
    {index:17, name: "A42_F.png"},
    {index:18, name: "A43_F.jpg"},
    {index:19, name: "A44_F.jpg"},
    {index:20, name: "A45_F.jpg"},
    {index:21, name: "A49_F.png"},
    {index:22, name: "A86_F-2.jpg"},
    {index:23, name: "A95_F.jpg"}, 
]
$(function(){
          
    // $('body').on('click','.lang-btn',function(){
    //     var lang = $(this).attr('id')
    //     $('.lang-btn').removeClass('selected')
    //     if(lang=='TH'){
    //         $('.lang-btn[id=TH]').addClass('selected')
    //         $('.text-TH').show()
    //         $('.text-EN').hide()
    //     }else if(lang=='EN'){
    //         $('.lang-btn[id=EN]').addClass('selected')
    //         $('.text-TH').hide()
    //         $('.text-EN').show()
    //     }
        
    // })

    
})

function showDivs(i) {
    var n = parseInt($('#imgSlide').attr("alt"))
    var totalImg = imgObj.length;
    var newImgIndex, newImg;
    if(i==1){
        if(n+1>=totalImg){
            newImgIndex = 0
            
        }else{
            newImgIndex = n+i
        }
    }else{
        if(n==0){
            newImgIndex = 23
        }else{
            newImgIndex = n+i
        }
    }
    
    newImg = imgObj[newImgIndex].name
    
    $("#imgSlide").attr("src",`./image/product-slide/${newImg}`);
    $("#imgSlide").attr("alt",newImgIndex);
    
  }
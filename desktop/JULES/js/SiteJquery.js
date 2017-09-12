$('.bxslider').bxSlider({
        mode: 'fade',
        captions: 'true'
})




$('p').css({
        color: "#EDD8C7",
        fontSize: "18px",
        fontFamily: "'Britannic Bold', serif",
})

$('#OpacityControl').css({
        zIndex: "999"})

$('#mail, #num').css({
        padding: "20px",
        fontSize: "25px"
})

$('.Appui').css({
        paddingTop: "50px"
})

$('#CadreHomeVideo').css({
        width: "680px",
        height: "315px",
        marginTop:"200px",
        backgroundColor: "aliceblue",
        marginBottom: "20px"
})
$('#homeVideoName').css({
        fontSize: "22px",
        width: "502px",
        zIndex: "999999",
        height: "33px",
        fontFamily: "'Britannic Bold', serif",
        fontStyle: "italic",
        color: "#EDD8C7",
        paddingTop: "13px",
        background: "linear-gradient(red, black 10%, darkred 50%, black 90%, red)",
        background: "linear-gradient(to right, black, darkred 50%, black)",
        position: "absolute",
        marginLeft: "-590px"
})
$('#decoRight').css({
        width: "90px",
        height: "45px",
        position: "absolute",
        marginTop: "-320px",
        marginLeft: "250px",
        background: "linear-gradient(#EDD8C7, black 10%, black 20%, darkred 50%, black 80%, black 90%, #EDD8C7)",
        background: "linear-gradient(to right, black, RED 90%, orangered)"
})
$('#decoLeft').css({
        width: "90px",
        height: "45px",
        position: "absolute",
        background: "linear-gradient(#EDD8C7, black 10%, black 20%, darkred 50%, black 80%, black 90%, #EDD8C7)",
        background: "linear-gradient(to right, orangered, RED 10%, black)",
        marginTop: "-319px",
        marginLeft: "-340px"
})
$('#CadreVid1').css({
        opacity: "0.8",
        background: "linear-gradient(#373737, black 50%, #373737)",
        width: "680px",
        height: "445px",
        marginBottom: "100px",
        marginTop:"0px",
        borderRadius: "5px",
        display:"block"
})
$('#CadreVid2').css({
        opacity: "0.8",
        background: "linear-gradient(#373737, black 50%, #373737)",
        width: "680px",
        height: "445px",
        marginBottom: "100px",
        marginTop:"100px",
        borderRadius: "5px",
        display: "none"
})

$('#Cadre1').css({
        backgroundColor: "Black",
        opacity: "0.6",
        borderRadius: "5px",
        width: "670px",
        height: "1290px"
})

$('#Cadre2').css({
        backgroundColor: "Black",
        opacity: "0.6",
        borderRadius: "5px",
        width: "670px",
        height: "1290px"
})

$('#cadreContact').css({
        backgroundColor: "black",
        opacity: "0.6",
        borderRadius: "5px",
        padding: "15px",
        width: "450px",
        height: "200px",
        marginBottom: "200px",
        marginTop: "200px"
})

$('#TabSuivant1').on("click", function () {
        $('#CadreVid2').css("display", "block");        
        $('#CadreVid1').css("display", "none");
})
$('#TabSuivant1')
        .mouseover(function (){
                $(this).css({
                        cursor: "pointer",
                        color: "orangered"
                })
        .mouseout(function () {
                $(this).css("color", "#EDD8C7")
                })
})

$('#TabPrecedent1').on("click", function () {
        $("#CadreVid2").css("display", "none");
        $('#CadreVid1').css("display", "block");
})
$('#TabPrecedent1')
.mouseover(function (){
        $(this).css({
                cursor: "pointer",
                color: "orangered"
        })
.mouseout(function () {
        $(this).css("color", "#EDD8C7")
        })
})

$('.TabSuivant').css({
        fontFamily: "'Britannic Bold', serif",
        fontSize: "15px",
        float: "right",
        padding: "3px",
        color: "#EDD8C7",
        marginTop: "10px",
        background: "transparent",
        border: "none"
})
$('.TabPrecedent').css({
        fontFamily: "'Britannic Bold', serif",
        fontSize: "15px",
        float: "left",
        color: "#EDD8C7",
        marginTop: "10px",
        padding: "3px",
        background: "transparent",
        border: "none"
})
$('.nameCase').css({
        backgroundColor: "darkred",
        width: "220px",
        height: "23px",
        fontFamily:"'Britannic Bold', serif",
        color: "#EDD8C7",
        fontSize: "16px",
        paddingTop: "7px",
        zIndex: "9999",
        position: "absolute",
        float: "left",
        marginLeft: "-220px"
})
$('.nameCaseDuo').css({
        backgroundColor: "darkred",
        width: "220px",
        height: "38px",
        fontFamily:"'Britannic Bold', serif",
        color: "#EDD8C7",
        fontSize: "16px",
        zIndex: "9999",
        position: "absolute",
        float: "left",
        marginLeft: "-220px"
})


$('.surligned').css({
    color: "black",
    opacity: "0.6",
    backgroundColor: "#EDD8C7",
    width: "350px",
    borderRadius: "2px"
})

$('video#bigvid').css({
        position: "fixed",
        width: "auto",
        height: "auto",
        minWidth: "100%",
        minHeight: "100%",
        left: "0",
        top: "0",
        background: "url(JULES.jpg) no-repeat",
        zIndex: "-100"
})

$('#homeLogo').css({
        position: "center"
})

$('.LogoLien').css({
        marginTop: "50px",
        marginLeft: "40px",
        marginRight: "40px"
})

$('.LogoLien1').css({
        marginTop: "50px",
        marginLeft: "42px",
        marginRight: "38px"
})

$('#LogoRUB').css({
        position: "absolute",
        marginTop: "120px",
        marginLeft: "-125px"
})
$('#LogoRU').css({
        position: "absolute",
        marginTop: "120px",
        marginLeft: "-125px"
})

$('li').css({
        display: "inline-block",
        fontFamily: "'Britannic Bold', serif",
        fontSize: "19px", 
        marginRight: "20px",
        marginLeft: "20px"
})

$('.Menued').css({
        color: "#EDD8C7",
        textDecoration: "none",
        
})
$('.Menued')
        .mouseover(function () {
                $(this).css({
                        cursor: "pointer",
                        color: "orangered",
                        fontSize: "19.5px"
                })
        .mouseout(function () {
                $(this).css({
                        color: "#EDD8C7",
                        fontSize: "19px"
                })
        })
})

$('nav').css({
        position: "fixed",
        bottom: "0",
        zIndex: "99999999",
        width: "100%",
        padding: "10px",
        backgroundColor: "#3d342e",
        textAlign: "center"
})

$('#NoeudPapMenu').css({
        float: "left", 
        marginTop: "5px",
        paddingLeft: "5px"
})
$('.WPYP').css({
        float: "left",
        paddingLeft: "10px",
        fontSize: "16px", position: "absolute",
        marginLeft: "20px"
})
$('.WPYP')
        .mouseover(function () {
                $(this).css({
                        color: "orangered",
                        fontSize: "16.5px",
                        cursor: "pointer"
                })
        .mouseout(function () {
                $('.WPYP').css({
                        color: "#EDD8C7",
                        fontSize: "16px"
                })
        })
})
$('.WPYP').click(function () {
        $("html, body").animate({
		scrollTop:$('#Home').offset().top
        }, 'slow')
});
$('#HOME').click(function () {
        $('html, body').animate({
                scrollTop:$('#Home').offset().top
        }, 'slow')
})
$('#MUSIC').click(function () {
        $('html, body').animate({
                scrollTop:$('#Music').offset().top
        }, 'slow')
})
$('#CONCEPT').click(function() {
        $('html, body').animate({
                scrollTop:$('#Concept').offset().top
        }, 'slow')
})
$('#CONTACT').click(function () {
        $('html, body').animate({
                scrollTop:$('#Contact').offset().top
        }, 'slow')
})

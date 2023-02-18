function fun1()
{
   var hc=document.getElementById("hc").value
   var size=document.getElementById("hr").value
   document.getElementById("heading").style.fontSize=size+"px"
   document.getElementById("heading").style.color=hc
   return hc;
 }
 function fun2()
 {
    var a=fun1()
    document.getElementById("bc").style.color=a;
    var bcol=document.getElementById("bcol").value
 document.getElementById("b1").style.backgroundColor=bcol
 }
 function fun3()
{
   var tc=document.getElementById("tc").value
   document.getElementById("text").style.color=tc
 }
 function left()
 {
      document.getElementById("bc").style.textAlign="left"
      localStorage.setItem("Align","left")
 }
 function right()
 {
      document.getElementById("bc").style.textAlign="right"
      localStorage.setItem("Align","right")

 }
 function center()
 {
      document.getElementById("bc").style.textAlign="center"
      localStorage.setItem("Align","center")

 }
 function justify()
 {
      document.getElementById("bc").style.textAlign="justify"
      localStorage.setItem("Align","justify")

 }
 function store()
 {
     var range=document.getElementById("hr").value
     localStorage.setItem("Range",range)
     var colour=document.getElementById("hc").value
     localStorage.setItem("Color",colour)
     var BackCOL=document.getElementById("bcol").value
     localStorage.setItem("backColor",BackCOL)
     var texcol=document.getElementById("tc").value
     localStorage.setItem("Textcolor",texcol)
     var FromName=document.getElementById("a").value
     localStorage.setItem("a",FromName)
     var FromAdd=document.getElementById("b").value
     localStorage.setItem("b",FromAdd)
     var Todate=document.getElementById("c").value
     localStorage.setItem("c",Todate)
     var toName=document.getElementById("d").value
     localStorage.setItem("d",toName)
     var toAdd=document.getElementById("e").value
     localStorage.setItem("e",toAdd)
     var gender=document.getElementById("f").value
     localStorage.setItem("f",gender)
     var sub=document.getElementById("g").value
     localStorage.setItem("g",sub)
     var reason=document.getElementById("h").value
     localStorage.setItem("h",reason)
     var Fromdate=document.getElementById("i").value
     localStorage.setItem("i",Fromdate)
     var todate=document.getElementById("j").value
     localStorage.setItem("j",todate)
     var Numberofdays=document.getElementById("k").value
     localStorage.setItem("k",Numberofdays)
 }
 function pri()
 {
     var Range=localStorage.getItem("Range")
     document.getElementById("lheading").style.fontSize=Range+"px"
     var colour=localStorage.getItem("Color")
     document.getElementById("obd").style.color=colour
     document.getElementById("fc").style.color=colour
     document.getElementById("tc").style.color=colour
     document.getElementById("sub").style.color=colour
     document.getElementById("lheading").style.color=colour
     document.getElementById("lheading").style.color=colour
     var backcol=localStorage.getItem("backColor")
     document.getElementById("bo").style.backgroundColor=backcol
     var textcol=localStorage.getItem("Textcolor")
     document.getElementById("Fname").style.color=textcol;
     document.getElementById("Fadd").style.color=textcol;
     document.getElementById("Toname").style.color=textcol;
     document.getElementById("Toadd").style.color=textcol;
     document.getElementById("gender").style.color=textcol;
     document.getElementById("sub1").style.color=textcol;
     document.getElementById("bodyofle").style.color=textcol;
     var align=localStorage.getItem("Align")
     document.getElementById("lheading").style.textAlign=align
     var fn=localStorage.getItem("a")
     document.getElementById("Fname").innerHTML=fn
     document.getElementById("Fname1").innerHTML=fn
     var fa=localStorage.getItem("b")
     document.getElementById("Fadd").innerHTML=fa
     var todate=localStorage.getItem("c")
     document.getElementById("TodaysDate").innerHTML=todate
     var tn=localStorage.getItem("d")
     document.getElementById("Toname").innerHTML=tn
     var ta=localStorage.getItem("e")
     document.getElementById("Toadd").innerHTML=ta
     var g=localStorage.getItem("f")
     document.getElementById("gender").innerHTML=g
     document.getElementById("gender1").innerHTML=g
     var sub=localStorage.getItem("g")
     document.getElementById("sub1").innerHTML=sub
     var reason=localStorage.getItem("h")
     document.getElementById("res").innerHTML=reason
     var fromdate=localStorage.getItem("i")
     document.getElementById("Fromdate").innerHTML=fromdate
     var todate=localStorage.getItem("j")
     document.getElementById("Todate").innerHTML=todate
     var nodays=localStorage.getItem("k")
     document.getElementById("numberofdays").innerHTML=nodays
 }
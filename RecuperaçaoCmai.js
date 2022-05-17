function Recuperação() {
   var ProduçaoCmai = document.getElementById("Prod_tbs").value; 
   var AlimentaçaoCmai =
 document.getElementById("AliCM").value;      
  var PD = ProduçaoCmai
  var ALC = AlimentaçaoCmai
  var CRM = (PD/ALC)*100
  var RM = (CRM.toFixed(2)+" %"); 
 var elemento = document.getElementById("resultado"); document.getElementById("RM").innerHTML = "Recuperação Massica: " + RM;
   
 var PFE = document.getElementById("Fe%").value;
 var AliFE = document.getElementById("ALFE%").value;
 var PFE_Porcentagem = PFE/100;
 var AliFE_Porcentagem = AliFE/100;
 var PFE_Por_PD = PFE_Porcentagem * PD;
 var AliFE_Por_ALC = AliFE_Porcentagem * ALC;
 var Rmt = (PFE_Por_PD / AliFE_Por_ALC)*100; 
 var RMT = Rmt.toFixed(2);   
 document.getElementById("RMT").innerHTML ="Recuperação Metalurgica: "+ RMT+" %"; 
 console.log(RMT +" %");  
 }
   

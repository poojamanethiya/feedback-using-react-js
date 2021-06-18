
import React,{useState} from 'react';
import './App.css';
 

function Feed() {
  
  const [great, i] = useState(0);
  const [good, j] = useState(0);

  const [bad, k] = useState(0);
      
  
   return (
    <html id="bd">
  
    <body >
          <header><h1>&nbsp;FEEDBACK</h1> 
                <i> <h2>YOUR THOUGHTS MATTER</h2></i>
             </header>
             <main>
          <section id="o">
              <form id="frm"  action="form.html" onsubmit="return false"><br></br>
                      <label for="name">FIRST  NAME :  &nbsp; &nbsp;&nbsp;</label>
                     <input type="text" id ='name' name="name "  maxLength="40"  /><br></br>
                      <label for="midname">MIDDLE  NAME : &nbsp;</label>
                      <input type="text" id ='midname' name="midname" maxLength="40"/><br></br>
                      <label for="lname">LAST  NAME : &nbsp; &nbsp; &nbsp;</label>
                      <input type="text" id ='lname' name="lname"  maxLength="40"   /><br></br>
                      <label for="sug">SUGGESTIONS : &nbsp;</label>
                      <input type="text " id="sug" name="sug" d maxLength="40" / ><br></br>
                      <label for="gender" >GENDER :</label>
                      <input type="radio" name="gender" value="Mr." id="male" />MALE 
                      <input type="radio" name="gender" value="Ms." id="female"/>FEMALE <br></br>
                     
                      &nbsp; <input type="button"   onClick ={myfunc} name="+" value="+"/ >
                      &nbsp; <input type="button" name="reset" value="-" onClick={resetf} /><br></br>

                      <input type ="button" name ="Great" value="Great"  onClick = {() => i(great + 1)} />
                      &nbsp; &nbsp;<input type ="button" name ="Good" value="Good"  onClick = {() => j(good + 1)}/>
                      &nbsp;&nbsp; <input type ="button" name ="bad" value="bad"  onClick = {() => k(bad + 1)}/><br></br>
                          <p><b>Great :</b> {great} ,<b> Good :</b> {good}  , <b>Bad :</b> {bad}</p>
                         </form>

                      
          </section>
       
          <section id="t">
             <div id="a"  > 
                   
             </div>
              
          </section>
         
    </main>
    </body>
    <footer> {'\u00A9'} DESIGNED BY POOJA MANETHIYA</footer>
    </html>
   
   
          );
          
    function myfunc()  {
           var nam = document.getElementById("name").value;
           var mname = document.getElementById("midname").value;
           var lname = document.getElementById("lname").value;
           var sug =document.getElementById("sug").value;
           
           if(mname.trim()==="")
           {
           var n = nam.trim()+' '+lname.trim();
           }
           else
           {
            n= nam.trim()+'    '+mname.trim()+'   '+lname.trim();
           }
           
           if(nam === "")
           {
               alert("ENTER YOUR FIRST NAME!!");
           }
           else if(lname === "")
           {
               alert("ENTER YOUR LAST NAME!!");
           }
           else if(sug === "")
           {
               alert("PLEASE ENTER YOUR SUGGESTION!!");
           }
           
           
           else{
               var result = document.getElementById("a").innerText ;
               
               var gender = document.querySelector('input[name=gender]:checked').value;
            
             result = result + gender;
               result = `${result}${n}${"Says : "} ${'\n'} ${sug }${'\n'} ${Date()}`;
               
               var x =document.createElement("p");
               x.innerText = result;
               document.getElementById("t").appendChild(x);
               
           
               
           }
           
           
      
      }
 
     function resetf()
      {
        document.getElementById("name").value = "";
        document.getElementById("midname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("sug").value = " ";
        document.querySelector('input[name = gender]:checked').checked = false ;
  
      }
     
    }

      


   



  
    
export default Feed;

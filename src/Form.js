import React, {useState,useEffect} from "react";


function Form(){

    const [user, setUser] = useState([]);
    useEffect(() => {
                async function fetchMyAPI() {
                    let response = await fetch('https://jsonplaceholder.typicode.com/users')
                    response = await response.json()
                    setUser(response)
                }
                fetchMyAPI()

    },[]);

    console.log(user[1]?.email)

    return(
    <div className="app-container" style={{padding: "20px", width: "75%"}}>
        <div id="divToPrint" >
            <table>
            <thead>
                <tr>
                    <td rowSpan={3} colspan={2} ><div className="top">PAYER’S name, street address, city or town, state or province, country, ZIP or foreign postal code, and telephone no.</div>
                        <div className="bottom" style={{height:"150px", marginTop:"1%"}}>This is a demo piece to test what is happening</div>
                    </td>
                    <td><div className="top">Payer’s RTN (optional)</div> <div className="bottom" style={{height:"60px", marginTop:"1%"}}></div></td>
                    <td colspan={2}><div className="top" style={{textAlign:"center"}}>OMB No. 1545-0112 <br/>Form <b style={{fontSize:"25px"}}>1099-INT</b><br/>
                                    (Rev. January 2022)</div></td>
                    <td rowSpan={2}><b style={{fontsize:"100px", alignContent:"center"}}>Interest Income </b></td>
                </tr>
                <tr>
                    <td><div className="top">1 Interest income</div> <div className="bottom"></div></td>
                    <td colspan={2}><div className="top" style={{textAlign:"center"}}>For calendar year<br/> </div> 
                    <div id="calender" className="bottom" style={{ width:"25%", marginLeft:"85px"}}></div></td>
                </tr>
                <tr>
                    
                <td colSpan={3} ><div className="top">2 Early withdrawal penalty </div><br/> <div className="bottom" style={{ height:"30px"}}>
                <div className="span"></div></div></td>

                <td rowSpan={7}><div >Copy 1
                                For State Tax Department </div></td>
                </tr>
                <tr>
                    <td rowSpan={2}><div className="top" >PAYER’S TIN </div> <div className="bottom" style={{ height:"100px", marginTop:"5px"}}>
                    <div className="lowerpart">{user[1]?.email}</div> </div></td>
                    <td rowSpan={2}><div className="top">RECIPIENT'S TIN</div> <div className="bottom" style={{ height:"100px", marginTop:"5px"}}><div className="lowerpart">{user[1]?.email}</div></div></td>
                    
                    <td colSpan={3}><div className="top">3 Interest on U.S. Savings Bonds and Treasury obligations </div><br/><div className="bottom"></div></td>

                    
                    
                </tr>
                <tr>
                    <td><div className="top">4 Federal income tax withheld </div><div className="bottom" style={{ height:"30px", marginTop:"9px"}}></div></td>
                    <td colspan={2}><div className="top">5 Investment expenses</div> <div className="bottom" style={{ height:"30px", marginTop:"9px"}} ></div></td>
                </tr>
                <tr>
                    <td colspan={2}><div className="top">RECIPIENT’S name</div><div className="bottom" style={{ height:"60px", marginTop:"1px"}}></div> </td>
                    <td><div className="top">6 Foreign tax paid </div><div className="bottom" style={{ height:"30px", marginTop:"29px"}}></div></td>
                    <td colspan={2}><div className="top">7 Foreign country or U.S. possession</div> <div className="bottom" style={{ height:"30px", marginTop:"8px"}}></div></td>
                    
                </tr>
                <tr>
                    <td colspan={2}><div className="top">Street address (including apt. no.)</div> <div className="bottom" style={{ height:"60px", marginTop:"1px"}}></div></td>
                    <td><div className="top">8 Tax-exempt interest</div>  <div className="bottom" style={{ height:"30px", marginTop:"29px"}}></div> </td>
                    <td colspan={2}><div className="top">9 Specified private activity bond interest </div><div className="bottom" style={{ height:"30px", marginTop:"8px"}}></div></td>
                </tr>
                <tr>
                    <td colspan={2}><div className="top">City or town, state or province, country, and ZIP or foreign postal code </div>
                    <div className="bottom" style={{ height:"60px", marginTop:"1px"}}></div></td>
                    <td><div className="top">10 Market discount </div><div className="bottom" style={{ height:"30px", marginTop:"29px"}}></div></td>
                    <td colspan={2}><div className="top">11 Bond premium </div> <br/><div className="bottom" style={{ height:"30px", marginTop:"8px"}}></div></td>
                </tr>
                <tr>
                    <td><div style={{width:"180%"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td>
                    <td><div className="top" style={{textAlign:"center"}}>FATCA filing<br/> requirement</div> <br/>
                    <div  style={{ margin:"0", position:"relative",top:"105.5%", left:"39%"}}>
                    <button type="checkbox" style={{height:"20px", width:"20px"}}/></div></td>

                    <td><div className="top" >12 Bond premium on Treasury obligations</div> <div className="bottom"></div></td>
                    <td colspan={2}><div className="top">13 Bond premium on tax-exempt bond </div><div className="bottom"></div></td>
                </tr>
                <tr>
                    <td colspan={2}><div className="top">Account number (see instructions)</div><div className="bottom" style={{ height:"60px", marginTop:"1px"}}></div> </td>
                    <td><div className="top">14 Tax-exempt and tax credit bond CUSIP no.</div> 
                    <div className="bottom" style={{border:"dotted 1px"}}></div>
                    <div className="bottom" style={{border:"dotted 1px"}}></div></td>
                    
                    <td><div className="top">15 State </div> 
                    <div className="bottom" style={{border:"dotted 1px"}}></div>
                    <div className="bottom" style={{border:"dotted 1px"}}></div>
                    </td>
                    <td> <div className="top"> 16 State identification no.</div> 
                    <div className="bottom" style={{border:"dotted 1px"}}></div>
                    <div className="bottom" style={{border:"dotted 1px"}}></div>                        
                    </td>

                    <td><div className="top">17 State tax withheld </div> 
                    <div className="bottom" style={{border:"dotted 1px" , marginTop:"21px"}}></div>
                    <div className="bottom" style={{border:"dotted 1px"}}></div>                        
                    </td>
                </tr>
            </thead>
            </table>
            <div>
                This is demo
            </div>



            
        </div>
    </div>
    );
}

export default Form;







import React,{useState, useEffect, useRef} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie  } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {UserOutlined, SettingOutlined, MobileOutlined } from '@ant-design/icons';
import { Tabs, Progress } from 'antd';
import { Card } from "@mui/material";
import { LeftOutlined, RightCircleFilled, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

ChartJS.register(ArcElement, Tooltip, Legend);
const { TabPane } = Tabs;

export default function Userform()
{
    const [activeTabKey, setActiveTabKey] = useState('1');
    const canvasRef = useRef(null);
  const [text, setText] = useState('');
const [ecaptcha,setEcaptcha] = useState('')
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Set canvas styles
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text on the canvas
    context.font = '24px bold';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    setText(captcha(8))
    console.log(ecaptcha)
  },[]);
  function captcha(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
    const chart_datas = {
        labels: ['Completed', 'Pending'],
        datasets: [
          {
            label: 'Basic Details',
            data: [50,50],
            backgroundColor: [
  // 'rgba(75, 192, 192, 0.2)',
  // 'rgba(255, 206, 86, 0.2)'
  'lightgreen','white'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    
    //   context.chart.data.labels[context.dataIndex] + ': ' + 
      const options = {
        plugins: {
            datalabels: {
                formatter: (value, context) => {
                    return value+"%";
                  },
                  color: 'Black',
                  display: true,
              },
        },
      };
      document.body.style.backgroundColor = "#00316A";
let p = 100;

      // [usercred,otp,]
    return <div className="p-5" style={{"background-color": "#00316A", maxHeight : "10px !important"}}>
       <div className="row">

        {/* <div className="card col-md-3 p-3" style={{backgroundColor : 'powderblue'}}>
        <Doughnut  data={chart_datas} options={options} plugins={[ChartDataLabels]} /><br/>
        <div className="text-center">
        <button className="btn btn-primary"><i class="fas fa-save"></i> Save</button>
        </div>
        </div> */}
        <div className="col-md-12">
        {/* <div className="card p-3">
  Test
        </div>
        <br/> */}
       <div className="card p-3">
<div ><span style={{position : "absolute", right : "100px"}}>
{/* Completed &nbsp; */}
<Progress type="circle" size={40} percent={p} /> 
    </span></div>
   <Tabs activeKey={activeTabKey} onChange={(key) => setActiveTabKey(key)} >
      <TabPane tab={<span ><i class="fa-solid fa-user"></i> User Details</span>} key="1">
        <div style={{padding : '5px'}}> 
        <div class='row p-1'>
        <div className="col-md-4 p-4">
            <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
        <i class="fa-solid fa-shop"></i>
      </span>
    </div>
          <select className="text-center form-control">
 <option value='all'> I am a </option>
 <option value="upending"> Fresher </option>
 <option value="apending"> Professional </option>
</select> 
<div className="input-group-prepend">
      <span className="input-group-text text-success" id="basic-addon1">
      <i class="fa-solid fa-circle-check"></i>
      </span>
    </div>
  </div>
            </div>
            <div className="col-md-4 p-4">
            <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
        <i className="fa-solid fa-envelope"></i>
      </span>
    </div>
    <input type="email"
    className="form-control" placeholder="Email ID" aria-label="Email" aria-describedby="basic-addon1"/>
  <div className="input-group-prepend">
      <span className="input-group-text text-success" id="basic-addon1">
      <i class="fa-solid fa-circle-check"></i>
      </span>
    </div>
  </div>
            </div>
            <div className="col-md-4 p-4">
            <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
        {/* <i className="fa-solid fa-mobile"></i> */}
        +91
      </span>
    </div>
    <input type="text"
    className="form-control" placeholder="Phone Number" aria-label="Phone" aria-describedby="basic-addon1"/>
  <div className="input-group-prepend">
      <span className="input-group-text text-success" id="basic-addon1">
      <i class="fa-solid fa-circle-check"></i>
      </span>
    </div>
  </div>
            </div>


            <div className="col-md-4 p-4">
            <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
        <i class="fa-solid fa-city"></i>
      </span>
    </div>
          <select className="text-center form-control">
 <option value='all'>Select State</option>
 <option value="upending"> Submission Pending </option>
 <option value="apending"> Approval Pending </option>
 <option value="approved"> Approved </option>
 <option value="rejected"> Rejected </option>
</select> 
<div className="input-group-prepend">
      <span className="input-group-text text-success" id="basic-addon1">
      <i class="fa-solid fa-circle-check"></i>
      </span>
    </div>
  </div>
            </div>
            <div className="col-md-4 p-4">
            <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
      <i class="fa-solid fa-building"></i>
      </span>
    </div>
          <select className="text-center form-control">
 <option value='all'>Select City</option>
 <option value="upending"> Submission Pending </option>
 <option value="apending"> Approval Pending </option>
 <option value="approved"> Approved </option>
 <option value="rejected"> Rejected </option>
</select> 
<div className="input-group-prepend">
      <span className="input-group-text text-success" id="basic-addon1">
      <i class="fa-solid fa-circle-check"></i>
      </span>
    </div>
  </div>
  {/* <div className="text-center"> <span className="text-success"><i class="fa-solid fa-circle-check"></i> Approved</span></div> */}

            </div>

            <div className="col-md-4 p-4">
            <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
      <i class="fa-solid fa-id-card"></i>
      </span>
    </div>
    <input type="text"
    className="form-control" placeholder="Aadhar Number" aria-label="aadhar" aria-describedby="basic-addon1"/>
  <div className="input-group-prepend">
      <span className="input-group-text text-warning" id="basic-addon1">
      <i class="fa-solid fa-clock"></i>
      </span>
    </div>
  </div>
            </div>

            <div className="col-md-4 p-4">
            <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
      <i class="fa-solid fa-id-card-clip"></i>
      </span>
    </div>
    <input type="text"
    className="form-control" placeholder="Pancard Number" aria-label="pan" aria-describedby="basic-addon1"/>
      <div className="input-group-prepend">
      <span className="input-group-text text-danger" id="basic-addon1">
      <i class="fa-solid fa-circle-xmark"></i>
      </span>
    </div>
  </div>
  
  {/* <div className="text-center"><span className="text-danger"><i class="fa-solid fa-circle-xmark"></i> Rejected.. <u style={{cursor : 'pointer'}}>View More</u></span> </div> */}
            </div>

            <div className="col-md-4 p-4 text-center">         
            <canvas ref={canvasRef} width={200} height={30} style={{ border: '1px solid black' }}/>
            </div>

            <div className="col-md-4 p-4">
            <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
      <i class="fa-solid fa-fingerprint"></i>
      </span>
    </div>
    <input type="text" onChange={(e)=>setEcaptcha(e.target.value)}
    className="form-control" placeholder="Enter Captcha Code" aria-label="ec" aria-describedby="basic-addon1"/>
{  ecaptcha!='' && <div className="input-group-prepend">
      <span className={`input-group-text text-${text == ecaptcha? 'success' : 'danger'}`} id="basic-addon1">
      <i class={`fa-solid fa-circle-${text == ecaptcha? 'check' : 'xmark'}`}></i>
      </span>
    </div>}
  </div>
            </div>

        </div>
        </div>
      </TabPane>
      <TabPane tab={<span ><i class="fa-solid fa-mobile"></i> OTP Verification</span>}  key="2">
      <div style={{padding : '5px'}} className="text-center">    

      <div className="input-group p-2">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
        <i className="fa-solid fa-mobile"></i>
      </span>
    </div>
    <input type="text"
    className="form-control" placeholder="Mobile OTP" aria-label="motp" aria-describedby="basic-addon1"/>
  </div>
  <div className="input-group p-2" style={{width : '20%'}}>
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
        <i className="fa-solid fa-envelope"></i>
      </span>
    </div>
    <input type="text"
    className="form-control" placeholder="Email OTP" aria-label="eotp" aria-describedby="basic-addon1"/>
  </div>

    </div>
      </TabPane>
      <TabPane tab={<span ><i class="fa-solid fa-business-time"></i> Business Details</span>} key="3">
      <div style={{padding : '5px'}}>     Content of Tab {activeTabKey}</div>
      </TabPane>
      <TabPane tab={<span ><i class="fa-solid fa-file"></i> Documents Details</span>} key="4">
      <div style={{padding : '5px'}}>     Content of Tab {activeTabKey}</div>
      </TabPane>
      <TabPane tab={<span ><i class="fa-solid fa-user-check"></i> User Verification</span>} key="5">
      <div style={{padding : '5px'}}>     Content of Tab {activeTabKey}</div>
      </TabPane>
      <TabPane tab={<span ><i class="fa-solid fa-envelope"></i> Submit</span>} key="6">
      <div style={{padding : '5px'}}>     Content of Tab {activeTabKey}</div>
      </TabPane>
    </Tabs>
    {/* <LeftOutlined />
    <RightCircleFilled/> */}
    <br/>
    <div className="text-center">
    <button className="btn btn-primary">Proceed</button>
    <br/><br/>
</div>
    </div>
            </div>
            
       </div>

    </div>
}
import React,{Component, Fragment} from 'react';
import Highcharts from 'highcharts'
// import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official'
import {Redirect} from 'react-router-dom';
import axios from 'axios';


class Grafica extends Component {

    url='https://gentle-shelf-08563.herokuapp.com/';

    constructor(props){
        super(props);

        this.state = {
            // To avoid unnecessary update keep all options in the state.
            chartOptions: {
                chart: {
                    type: 'spline',
                    height: 450
                  },
                  title: {
                    text: 'Grafica de Agentes'
                  },
                  xAxis:{
                    categories:[]
                  },
              series: [
                { 
                    name: 'Comisiones',
                    data: [] 
                }
              ],
              plotOptions: {
                series: {
                  point: {
                    events: {
                      mouseOver: this.setHoverData.bind(this)
                    }
                  }
                }
              }
            },
            hoverData: null,
            loading:false,
            auth:false
          };
    }

    postDataAgents= async ()=>{
        this.setState({loading:true});
        let token = localStorage.getItem('token');
        const postAgents=await axios.get(this.url+'agents',{
            headers:{'Content-Type': 'application/json','Authorization':token}
        });
        
        this.setState({loading:false});
        return postAgents;
    }

    getData=async ()=>{
        let token = localStorage.getItem('token');
        const dataAgents= await axios.get(this.url+'agentsinformation',{
            headers:{'Content-Type': 'application/json','Authorization':token}
        });
        return dataAgents;
    }

    getDataGraf=()=>{
        this.getData().then((res)=>{

            const data_agents=[];
            const name_agents=[];
            res.data.agents.forEach(element => {
                
                data_agents.push(element.agentCommission);
                name_agents.push(element.agentName);
    
            });
            this.setState({ 
                
                chartOptions: {
                    xAxis: {
                        categories: name_agents,
                      },
                  series: [
                    {
                       data: data_agents
                    }
                  ]
                }
              });
           }).catch((error)=>{  
               console.log({error:error});
               if(error.response.status === 401){
                 this.setState({
                   auth:true
                 })
               }
           })
    }

    componentDidMount(){
       this.getDataGraf();
      
       this.time=setInterval(()=>{this.getDataGraf()},3000);

    }

    componentWillUnmount(){
      clearInterval(this.time);
    }

    setHoverData = (e) => { 
        // The chart is not updated because `chartOptions` has not changed.
        this.setState({ hoverData: e.target.category })
      }
      updateSeries = () => {
        // The chart is updated only with new options.
       this.getDataGraf();
      }

      

     
    render() { 
        const { chartOptions, hoverData } = this.state;
        return (
            <Fragment>
              {this.state.auth ? <Redirect from="/dashboard" to="/"></Redirect> : null}
                 <div className="text-center">
                    <a onClick={this.postDataAgents} className="btn btn-danger btn-lg">Trasferir Data</a>
                    {this.state.loading && (
                        <div className="spinner-border text-danger" role="status">
                            <span className="sr-only"><small>Transfiriendo Datos...</small></span>
                        </div>
                    )}
                </div>
                <HighchartsReact
                    highcharts={Highcharts}
                    // constructorType={'stockChart'}
                    options={chartOptions}
                    
                />
            <h3>Agent {hoverData}</h3>
            <button onClick={this.updateSeries.bind(this)}>Update Data</button>
            </Fragment>
            
         );
    }
}
 
export default Grafica;
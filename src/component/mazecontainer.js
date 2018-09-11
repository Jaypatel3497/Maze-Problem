import React, { Component } from 'react';

class Mazecontainer extends Component {
  constructor(props)
  {
      super(props);
      this.state = {xStart: "",yStart: "",xEnd: "",yEnd: "",width: "",height: "",map: "",mazeWidth: "20",input: "**.*******************.****............***......*****.********.*********........*..*********.*********....******.***.********......*.***.*****....****.*.....*****.***.....*****...*********************",maze: []};
      //**.*******************.****............***......*****.********.*********........*..*********.*********....******.***.********......*.***.*****....****.*.....*****.***.....*****...*********************    
  }
  componentDidMount()
  {
      var flag=1;
      for(var i=0;i<this.state.input.length;i++)
      {
        if(this.state.input[i]=='*')
        {
            this.state.maze.push((<div key={i} className="blackgrid">
            </div>));
        }  
        else if(this.state.input[i]=='.'){
            if(flag)
            {
            this.state.maze.push((<div key={i} className="whitegrid active">
            </div>));
            flag=0;
            }
            else
            {
            this.state.maze.push((<div key={i} className="whitegrid">
            </div>));    
            } 
            
        } 
        
      }
      
      this.setState({maze: this.state.maze});
  }
  handlerWidth(e)
  {
    this.setState({width: e.target.value})
  }
  handlerHeight(e)
  {
    this.setState({height: e.target.value})
  }
  handlerMap(e)
  {
    this.setState({map: e.target.value})
  }
  handlerSubmit(e)
  {
    e.preventDefault();

    var flag=1;
    this.state.input=this.state.map;
    this.state.maze=[];
    for(var i=0;i<this.state.input.length;i++)
    {
      if(this.state.input[i]=='*')
      {
          this.state.maze.push((<div key={i} className="blackgrid">
          </div>));
      }  
      else if(this.state.input[i]=='.'){
          if(flag)
          {
          this.state.maze.push((<div key={i} className="whitegrid active">
          </div>));
          flag=0;
          }
          else
          {
          this.state.maze.push((<div key={i} className="whitegrid">
          </div>));    
          } 
          
      } 
      
    }
    console.log(this.state.width);
    this.setState({mazeWidth: this.state.width,input: this.state.map,maze: this.state.maze})
  }
  handlerxStart(e)
  {
    this.setState({xStart: e.target.value})
  }
  handlerxEnd(e)
  {
    this.setState({xEnd: e.target.value})
  }
  handleryStart(e)
  {
    this.setState({yStart: e.target.value})
  }
  handleryEnd(e)
  {
    this.setState({yEnd: e.target.value})
  }
  handlerCustom(e)
  {
    console.log(e.target.value);
    if(e.target.value==="1")
    {
        var flag=1;
        this.state.input="***.**.****************....***************..****.........****..****..*******.****.****..********...**.****.***********.**.****........***..**.**************..***................***********************"
        this.state.maze=[];
        for(var i=0;i<this.state.input.length;i++)
        {
          if(this.state.input[i]=='*')
          {
              this.state.maze.push((<div key={i} className="blackgrid">
              </div>));
          }  
          else if(this.state.input[i]=='.'){
        
              if(flag)
              {
              this.state.maze.push((<div key={i} className="whitegrid active">
              </div>));
              flag=0;
              }
              else
              {
              this.state.maze.push((<div key={i} className="whitegrid">
              </div>));    
              } 
            }   
        }     
    this.setState({mazeWidth: "20",maze: this.state.maze})
    }
    if(e.target.value==="2")
    {
    
        var flag=1;
        this.state.input="**.*******************.****............***......*****.********.*********........*..*********.*********....******.***.********......*.***.*****....****.*.....*****.***.....*****...*********************"
        this.state.maze=[];
        for(var i=0;i<this.state.input.length;i++)
        {
          if(this.state.input[i]=='*')
          {
              this.state.maze.push((<div key={i} className="blackgrid">
              </div>));
          }  
          else if(this.state.input[i]=='.'){
        
              if(flag)
              {
              this.state.maze.push((<div key={i} className="whitegrid active">
              </div>));
              flag=0;
              }
              else
              {
              this.state.maze.push((<div key={i} className="whitegrid">
              </div>));    
              } 
            }   
        }     
    this.setState({mazeWidth: "20",maze: this.state.maze})       
    }
    if(e.target.value==="3")
    {
    
    
        var flag=1;
        this.state.input="***********************.*************************************************..*************************************************..*************************************************..*************************************************..............*************************************************..*************************...................*****..*********************....*****************...****..*****************....****............******..****..**************...****....**********....****....**..*************.******.*******....*****....****.***..************.******.....******.....****.****.****..***********...********.....******......****.*****.*************.....********.....**********...*****.*****************.....********.....***....*****...*********************....*********.....******...**************************.....*************....*****************************.**....*******....********************************.*****.........***********************************.***************************"
        this.state.maze=[];
        for(var i=0;i<this.state.input.length;i++)
        {
          if(this.state.input[i]=='*')
          {
              this.state.maze.push((<div key={i} className="blackgrid">
              </div>));
          }  
          else if(this.state.input[i]=='.'){
        
              if(flag)
              {
              this.state.maze.push((<div key={i} className="whitegrid active">
              </div>));
              flag=0;
              }
              else
              {
              this.state.maze.push((<div key={i} className="whitegrid">
              </div>));    
              } 
            }   
        }     
    this.setState({mazeWidth: "50",maze: this.state.maze})       
    
    }
    if(e.target.value==="4")
    {
    
    
        var flag=1;
        this.state.input="*************************************....********....***...*******..**.*******..**..*..********..*****..***..****...*********.**....*..**.*******.*********.**.**.**.**.*******.********..**.**.**.**.*******.********.***.**.**.**.*******...******.***.**.**.**.*******.*.******.***.**.**.**.*******.*.******.***.**.**.**...*****.*.******.***.**.**.**.*..****.*.******.***.**.**.**.**.****.*.******.***.**.**.**.**.****.*.******.***.**.**.**.**.****.*.******.***.**.**.**.**.****.*..*****.***.**.**.**.**.****.**.****..**..**.**.**.**.****.**.****.***.***.**.**.**.****.**.****.***.***.**.**.**.****.**.****.***.***.**....**.****.**.****.***.***.*****.**.****.**.****.***.***.**....**..***.*******.***.***.**.**.***.***.**.****.***.***.**.**.***.***.**.****.***.***.**.**.***.***.**.****.***.***.**.**.***.***.**.****.**..***.**.**.***.***.**.****.*..****.**.**.***.***.**.****...*****.**.**.***.***.**.****.*******.**.**.*******.**.****.*******.*..**.***.***.**.****.*******...***.**..***.**.****.**....*.***.*.**.****.**.***..**.**.*.***.*.**.****.**.***.***.**.*.***.*.**.****.**.***.***.**.*.***.*.**.****.**.***.***.**.*.***.*.*..****.**.***.***.**.*.***.*.*.*****.*..***.***.**.*.***.*.*.*****...****.***.**.*.***.*.*.*****.******.***.**.*..*..*.*.*****.*****..***.**.**...**.*.*****.*****.**...**.**.****.*.*****.*****....****.**.****...*****.*****.*******.**.****.*******.*****.*******..*.**.....*****.*****.********.***..***...***..****.********.*...******...**..***.......***********************.*****.....................***.*************************.**"
        this.state.maze=[];
        for(var i=0;i<this.state.input.length;i++)
        {
          if(this.state.input[i]=='*')
          {
              this.state.maze.push((<div key={i} className="blackgrid">
              </div>));
          }  
          else if(this.state.input[i]=='.'){
        
              if(flag)
              {
              this.state.maze.push((<div key={i} className="whitegrid active">
              </div>));
              flag=0;
              }
              else
              {
              this.state.maze.push((<div key={i} className="whitegrid">
              </div>));    
              } 
            }   
        }     
    this.setState({mazeWidth: "30",maze: this.state.maze})       
    
    }
    if(e.target.value==="5")
    {
    
    
        var flag=1;
        this.state.input="************.****************************..****************************.***************************.....***********************...****..*******************...*******...*****************.***.***.***.*****************.***********.*************.***..***...***..*************..***...*****...*******.*******.*****...**..****......*******..******.**.****..*************.****...**...**.**************.*....******....**************...************...************.****************.************..**************..*************...**********...****************....*.......*********************.********************"
        this.state.maze=[];
        for(var i=0;i<this.state.input.length;i++)
        {
          if(this.state.input[i]=='*')
          {
              this.state.maze.push((<div key={i} className="blackgrid">
              </div>));
          }  
          else if(this.state.input[i]=='.'){
        
              if(flag)
              {
              this.state.maze.push((<div key={i} className="whitegrid active">
              </div>));
              flag=0;
              }
              else
              {
              this.state.maze.push((<div key={i} className="whitegrid">
              </div>));    
              } 
            }   
        }     
    this.setState({mazeWidth: "30",maze: this.state.maze})       
    
    }
    if(e.target.value==="6")
    {
    
    
        var flag=1;
        this.state.input="************.****************************..****************************.***************************.....***********************...****..*******************...*******...*****************.***.***.***.*****************.***********.*************.***..***...***..*************..***...*****...*******.*******.*****...**..****......*******..******.**.****..*************.****...**...**.**************.*....******....**************...************...************.****************.************..**************..*************...**********...****************....*.......*********************.********************"
         this.state.maze=[];
        for(var i=0;i<this.state.input.length;i++)
        {
          if(this.state.input[i]=='*')
          {
              this.state.maze.push((<div key={i} className="blackgrid">
              </div>));
          }  
          else if(this.state.input[i]=='.'){
        
              if(flag)
              {
              this.state.maze.push((<div key={i} className="whitegrid active">
              </div>));
              flag=0;
              }
              else
              {
              this.state.maze.push((<div key={i} className="whitegrid">
              </div>));    
              } 
            }   
        }     
    this.setState({mazeWidth: "30",maze: this.state.maze})       
    
    }
    if(e.target.value==="7")
    {
    
    
        var flag=1;
        this.state.input="*******.********.....*.*.....**.***.*.*****.**.*.*.*.....*.**.*.*.*****.*.**.*.........*.****.*********.**.....*.......**.***.*.********.*.*.*.......**.*.*.*******.**...*...*...*.******.*.*.*.*.**...*.*.*.*.*.**.***.***.*.*.**.........*...**********.*****"
         this.state.maze=[];
        for(var i=0;i<this.state.input.length;i++)
        {
          if(this.state.input[i]=='*')
          {
              this.state.maze.push((<div key={i} className="blackgrid">
              </div>));
          }  
          else if(this.state.input[i]=='.'){
        
              if(flag)
              {
              this.state.maze.push((<div key={i} className="whitegrid active">
              </div>));
              flag=0;
              }
              else
              {
              this.state.maze.push((<div key={i} className="whitegrid">
              </div>));    
              } 
            }   
        }     
    this.setState({mazeWidth: "15",maze: this.state.maze})       
    
    }
    //="************.****************************..****************************.***************************.....***********************...****..*******************...*******...*****************.***.***.***.*****************.***********.*************.***..***...***..*************..***...*****...*******.*******.*****...**..****......*******..******.**.****..*************.****...**...**.**************.*....******....**************...************...************.****************.************..**************..*************...**********...****************....*.......*********************.********************">
}
  render() {
    return (
        <div >
        <div className="page page-forms-elements">
        <div className="page-wrap">
        <div style={{marginTop: "100px",background: "#efefef"}} className="panel panel-default panel-hovered panel-stacked mb30">
            <div className="panel-heading">Maze Problem</div>
            <div className="panel-body">
            </div> 
            <form className="form-inline" role="form" >
                <div className="container">
                <div className="row" >
                                      <div className="col-md-3 col-75" >
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" placeholder="Enter x of starting here..." required  onChange={this.handlerxStart.bind(this)}/>
                                        </div>
                                        </div>
                                        <div className="col-md-3 col-75">
                                        <div className="input-group">
                                            <span className="input-group-addon "><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control"  placeholder="Enter y of starting here..." required onChange={this.handleryStart.bind(this)} />
                                        </div>
                                        </div>
                                        <div className="col-md-3 col-75">
                                        <div className="input-group">
                                            <span className="input-group-addon "><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control"  placeholder="Enter x of ending here..." required onChange={this.handlerxEnd.bind(this)} />
                                        </div>
                                        </div>
                                        <div className="col-md-3 col-75">
                                        <div className="input-group">
                                            <span className="input-group-addon "><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control"  placeholder="Enter y of ending here..." required onChange={this.handleryEnd.bind(this)} />
                                        </div>
                                        </div>
                                        
                </div>
                <div className="row" >
                                      <div className="col-md-4 col-75" >
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" placeholder="Enter Width here..." required  onChange={this.handlerWidth.bind(this)}/>
                                        </div>
                                        </div>
                                        <div className="col-md-4 col-75">
                                        <div className="input-group">
                                            <span className="input-group-addon "><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control"  placeholder="Enter Height here..." required onChange={this.handlerWidth.bind(this)} />
                                        </div>
                                        </div>
                                        <div className="col-md-4 col-75">
                <div className="input-group">
                <span className="input-group-addon "><i className="fa fa-envelope" aria-hidden="true"></i></span>
                <textarea name="Text1" cols="52" rows="5" placeholder="map of maze..." required onChange={this.handlerMap.bind(this)} ></textarea> </div>
                                        </div>
                                    </div>
                <div className="container">
                <div className="row next-btn" style={{textAlign: "center"}}>

                  <div className="col-md-6 col-sm-6 col-xs-6" >
                    < button type="submit" className=" btn btn-primary waves-effect " style={{marginBottom: "5px", marginLeft: "250px",width: "100%"}} onClick={this.handlerSubmit.bind(this)}>Submit</button>
                  </div>
                </div>
              </div> 
                </div>
                </form>
            </div>
        </div>
      </div> 
      <div style={{marginLeft: "65%",marginBottom: "50px"}}>
              <strong style={{marginRight:"10px"}} >Custom Maze</strong>
              <select className="form-control"  onChange={this.handlerCustom.bind(this)}>
                <option value="1" selected={true} >'G' Maze</option>
                <option value="2">Little Maze</option>
                <option value="3">Vortex</option>
                <option value="4">Bird's Eye View</option>
                <option value="5">Alian</option>
                <option value="6">Classic Maze</option>
                <option value="7">Sam's Maze</option>
              </select>
            </div>
      <div style={{width: this.state.mazeWidth*20,marginBottom: "50px"}} className="container">
        <div className="row">
         {this.state.maze.map(it=>{
             return it
         })}
        </div>
        </div>
       </div> 
    );
  }
}

export default Mazecontainer;

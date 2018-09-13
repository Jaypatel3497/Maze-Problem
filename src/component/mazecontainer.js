import React, { Component } from "react";

var stk = [];
class Mazecontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xStart: "",
      yStart: "",
      xEnd: "",
      yEnd: "",
      width: "",
      height: "",
      map: "",
      mazeWidth: "",
      input: "",
      maze: [],
      Graph: [],
      tempGraph: []
    };
    //**.*******************.****............***......*****.********.*********........*..*********.*********....******.***.********......*.***.*****....****.*.....*****.***.....*****...*********************
  }

  deriveGraph(input, width, height, x, y, u, v) {
    var j = 0;
    this.state.Graph = [];
    ////console.log(input);
    for (var i = 0; i < height; i++) {
      var count = 0;
      var temp = "";
      while (count != width) {
        if (input[j] === "*" || input[j] === ".") {
          temp += input[j];
          count++;
        }
        j++;
      }
      this.state.Graph.push(temp);
    }
    var c = 0;
    this.state.maze = [];
    ////console.log(this.state.Graph);
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        if (i == x && j == y) {
          this.state.maze.push(<div key={c} className="whitegrid active" />);
        } else if (this.state.Graph[i][j] === "*") {
          this.state.maze.push(<div key={c} className="blackgrid" />);
        } else if (this.state.Graph[i][j] === ".") {
          this.state.maze.push(<div key={c} className="whitegrid" />);
        }
        c++;
      }
    }
    this.setState({
      xStart: x,
      yStart: y,
      height: height,
      mazeWidth: width,
      input: input,
      maze: this.state.maze,
      Graph: this.state.Graph,
      xEnd: u,
      yEnd: v
    });
  }
  handlerWidth(e) {
    this.setState({ width: parseInt(e.target.value) });
  }
  handlerHeight(e) {
    this.setState({ height: parseInt(e.target.value) });
  }
  handlerMap(e) {
    this.setState({ map: e.target.value });
  }
  handlerSubmit(e) {
    e.preventDefault();
    ////console.log(this.state.width + "*" + this.state.height + " ");

    var input = this.state.map;
    var width = this.state.width;
    var height = this.state.height;
    var j = 0;
    this.state.Graph = [];
    ////console.log(input);
    for (var i = 0; i < height; i++) {
      var count = 0;
      var temp = "";
      while (count != width) {
        if (input[j] === "*" || input[j] === ".") {
          temp += input[j];
          count++;
        }
        j++;
      }
      this.state.Graph.push(temp);
    }
    // //console.log(this.state.Graph);
    var c = 0;
    this.state.maze = [];
    //console.log(this.state.Graph);
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        if (i == this.state.xStart && j == this.state.yStart) {
          this.state.maze.push(<div key={c} className="whitegrid active" />);
        } else if (this.state.Graph[i][j] === "*") {
          this.state.maze.push(<div key={c} className="blackgrid" />);
        } else if (this.state.Graph[i][j] === ".") {
          this.state.maze.push(<div key={c} className="whitegrid" />);
        }
        c++;
      }
    }
    this.setState({
      mazeWidth: width,
      input: input,
      maze: this.state.maze,
      Graph: this.state.Graph
    });
    ////console.log(this.state.width);

    this.setState({
      mazeWidth: this.state.width,
      input: this.state.map,
      maze: this.state.maze
    });
  }
  handlerxStart(e) {
    this.setState({ xStart: parseInt(e.target.value) });
  }
  handlerxEnd(e) {
    this.setState({ xEnd: parseInt(e.target.value) });
  }
  handleryStart(e) {
    this.setState({ yStart: parseInt(e.target.value) });
  }
  handleryEnd(e) {
    this.setState({ yEnd: parseInt(e.target.value) });
  }
  handlerCustom(e) {
    ////console.log(e.target.value);
    if (e.target.value === "1") {
      this.state.input =
        "***.**.****************....***************..****.........****..****..*******.****.****..********...**.****.***********.**.****........***..**.**************..***................***********************";
      this.deriveGraph(this.state.input, 20, 10, 0, 3, 0, 6);
    }
    if (e.target.value === "2") {
      this.state.input =
        "**.*******************.****............***......*****.********.*********........*..*********.*********....******.***.********......*.***.*****....****.*.....*****.***.....*****...*********************";
      this.deriveGraph(this.state.input, 20, 10, 0, 2, 3, 19);
    }
    if (e.target.value === "3") {
      this.state.input =
        "***********************.*************************************************..*************************************************..*************************************************..*************************************************..............*************************************************..*************************...................*****..*********************....*****************...****..*****************....****............******..****..**************...****....**********....****....**..*************.******.*******....*****....****.***..************.******.....******.....****.****.****..***********...********.....******......****.*****.*************.....********.....**********...*****.*****************.....********.....***....*****...*********************....*********.....******...**************************.....*************....*****************************.**....*******....********************************.*****.........***********************************.***************************";

      this.deriveGraph(this.state.input, 50, 20, 0, 23, 19, 22);
    }
    if (e.target.value === "4") {
      this.state.input =
        "*************************************....********....***...*******..**.*******..**..*..********..*****..***..****...*********.**....*..**.*******.*********.**.**.**.**.*******.********..**.**.**.**.*******.********.***.**.**.**.*******...******.***.**.**.**.*******.*.******.***.**.**.**.*******.*.******.***.**.**.**...*****.*.******.***.**.**.**.*..****.*.******.***.**.**.**.**.****.*.******.***.**.**.**.**.****.*.******.***.**.**.**.**.****.*.******.***.**.**.**.**.****.*..*****.***.**.**.**.**.****.**.****..**..**.**.**.**.****.**.****.***.***.**.**.**.****.**.****.***.***.**.**.**.****.**.****.***.***.**....**.****.**.****.***.***.*****.**.****.**.****.***.***.**....**..***.*******.***.***.**.**.***.***.**.****.***.***.**.**.***.***.**.****.***.***.**.**.***.***.**.****.***.***.**.**.***.***.**.****.**..***.**.**.***.***.**.****.*..****.**.**.***.***.**.****...*****.**.**.***.***.**.****.*******.**.**.*******.**.****.*******.*..**.***.***.**.****.*******...***.**..***.**.****.**....*.***.*.**.****.**.***..**.**.*.***.*.**.****.**.***.***.**.*.***.*.**.****.**.***.***.**.*.***.*.**.****.**.***.***.**.*.***.*.*..****.**.***.***.**.*.***.*.*.*****.*..***.***.**.*.***.*.*.*****...****.***.**.*.***.*.*.*****.******.***.**.*..*..*.*.*****.*****..***.**.**...**.*.*****.*****.**...**.**.****.*.*****.*****....****.**.****...*****.*****.*******.**.****.*******.*****.*******..*.**.....*****.*****.********.***..***...***..****.********.*...******...**..***.......***********************.*****.....................***.*************************.**";

      this.deriveGraph(this.state.input, 30, 52, 51, 1, 51, 27);
    }
    if (e.target.value === "5") {
      this.state.input =
        "************.****************************..****************************.***************************.....***********************...****..*******************...*******...*****************.***.***.***.*****************.***********.*************.***..***...***..*************..***...*****...*******.*******.*****...**..****......*******..******.**.****..*************.****...**...**.**************.*....******....**************...************...************.****************.************..**************..*************...**********...****************....*.......*********************.********************";

      this.deriveGraph(this.state.input, 30, 20, 0, 12, 19, 9);
    }
    if (e.target.value === "6") {
      this.state.input =
        "************.****************************..****************************.***************************.....***********************...****..*******************...*******...*****************.***.***.***.*****************.***********.*************.***..***...***..*************..***...*****...*******.*******.*****...**..****......*******..******.**.****..*************.****...**...**.**************.*....******....**************...************...************.****************.************..**************..*************...**********...****************....*.......*********************.********************";

      this.deriveGraph(this.state.input, 30, 20, 0, 12, 19, 9);
    }
    if (e.target.value === "7") {
      this.state.input =
        "*******.********.....*.*.....**.***.*.*****.**.*.*.*.....*.**.*.*.*****.*.**.*.........*.****.*********.**.....*.......**.***.*.********.*.*.*.......**.*.*.*******.**...*...*...*.******.*.*.*.*.**...*.*.*.*.*.**.***.***.*.*.**.........*...**********.*****";

      this.deriveGraph(this.state.input, 15, 17, 0, 7, 16, 9);
    }
    if (e.target.value === "8") {
      this.state.input =
        "*************************************************************......*...*...*.......*.......*.........*.........*.....*...**.***.*.*.*.***.*****.*.*****.*.*****.*.***.*****.*****.***.**.*...*.*.*.........*...*...*.*.*.*...*.....*.........*...*.**.*****.*.***************.***.*.*.*.*********.***.***.***.*.*\
        *.......*.*.....*.......*.....*...*.*.....*...*...*.*...*...*\
        *********.*.***.*.*****.*.*******.*.*.*.***.*******.***.***.*\
        *...*...*.*.*...*.*.*...*.........*.*.*.*...*.......*...*...*\
        ***.*.*.*.*.*.***.*.*.***.*********.*.***.***.*****.*.*****.*\
        *...*.*.*.*.*.*.*.*.....*...*.......*...*.....*.*...*.......*\
        *.***.*.*.***.*.*.***.*****.*.***.*****.*******.*.*****.*****\
        *...*.*.*.......*.*.*.*.....*...*.........*...*...*...*.....*\
        ***.*.*.*****.*.*.*.*.*.*.*****.*********.*.*.*****.*******.*\
        *.*.*.*.......*...*.*...*.*.....*.........*.*.*...*.*.......*\
        *.*.*.*************.*****.*.*****.*********.*.***.*.*.***.*.*\
        *.*...*.....*.....*.*...*.*...*...*.........*...*.....*...*.*\
        *.*****.*.***.*****.*.***.*****.***.*.*********.***.*******.*\
        *...*...*...*.........*...*.....*...*...*.*...*.*.*...*.....*\
        *.*.*******.*******.***.*.*.***********.*.*.*.*.*.*****.*****\
        *.*...*...........*.....*.*.*.*.....*...*...*...*...*...*...*\
        *.***.*.*********.*********.*.*.***.*.*************.*.*****.*\
        *.*...*.*...*...*.......*...*.*.*.*.*.*.......*...*...*.*...*\
        *.*.***.*.*.*.*.*******.*.***.*.*.*.*.*.*****.*.*.***.*.*.***\
        *.*...*.*.*...*...*...*...*...*.*.*.*.......*.*.*.....*...*.*\
        *.***.*.*.*******.*.*.*****.*.*.*.*.*******.*.*.*******.***.*\
        *.*...*.*.......*.*.*.......*.*...*.*.....*.*.........*.....*\
        *.*.***.*********.*.***.*****.*****.*.***.*.***.*****.*.***.*\
        *.*...*.....*.......*.*...*.*...*.....*.*.....*.*.....*.*.*.*\
        *.***.*****.*.*******.***.*.***.*******.*****.*.*.*****.*.*.*\
        *.*...*...*.*...*...*.....*...*...*.*...*.*...*.*...*.*.*.*.*\
        *.*.***.*.*.***.***.*********.***.*.*.*.*.*.***.***.*.*.*.*.*\
        *.*.....*.*...*.....*.*.....*...*.*...*.*.*...*.*...*.*.*.*.*\
        *.***********.*.*****.*.***.***.*.***.*.*.***.*.*****.*.*.*.*\
        *.......*.....*.*...*.....*...*...*...*.*.*...*...*...*.*...*\
        *.*****.*.*****.*.*.*********.*********.*.*.*****.***.*.*****\
        *...*.....*...*.*.*.....*...*.............*.*...*...*...*...*\
        *.***.***.*.*.*.*.*****.*.*****.***********.*.*.*.*.*.*****.*\
        *...*...*.*.*...*...*...*...*.*.........*...*.*.*.*.........*\
        ***.***.***.*******.*.*****.*.*********.*.***.*.*.***.*******\
        *.*...*.*.......*...*.*...*.*...*...*.*...*.*.*...*...*.*...*\
        *.***.*.*.*******.***.*.*.*.***.*.*.*.*****.*.*****.***.*.*.*\
        *.*.*.*.*.*.....*.*...*.*.*...*...*...*...*.......*.*...*.*.*\
        *.*.*.*.*.*.***.*.*.***.*****.*.*****.***.***.***.*.*.*.***.*\
        *.....*...*...*.*.*.......*...*.*...*...*.*.*.*...*...*.....*\
        *****.*********.*.*******.*.***.*.*.*.*.*.*.*.*.*******.*****\
        *.....*.....*...*.*.......*...*...*.*.*...*...*.*...*...*...*\
        *.*******.*.*.***.*.*********.*****.***********.*.*.***.*.*.*\
        *...*.*...*...*.*.*.*.*...*...*...*.*.....*.......*...*...*.*\
        ***.*.*.***.***.*.*.*.*.*.*.***.*.*.*.***.*.*****.***.*****.*\
        *.....*.*...*...*.*.....*...*.*.*...*...*...*...*.*.....*.*.*\
        ***.*.*.*.***.*.*.*.*********.*.*******.***.*.*.***.***.*.*.*\
        *...*...*...*.*...*.*...*...*.*...*...*...*.*.*.....*...*...*\
        *.*********.*.*****.*.*.*.*.*.***.***.*.*.***.*******.*****.*\
        *.*.........*.*.....*.*...*.*.....*...*.*...*.*.........*...*\
        *.*********.*.*****.*.*****.***.***.*******.*.*******.*.*.***\
        *.........*.*.....*.*...*.*.*...*.*.........*.*.......*.*...*\
        ***.*******.*****.*.***.*.*.*.***.***********.*.*******.***.*\
        *.*.......*.*...*.*.*...*.*.*.*...*.......*...*.*.....*.*.*.*\
        *.*******.*.*.*.*.*.*.*.*.*.*.*.*.*.***.***.***.*.***.*.*.*.*\
        *.........*...*...*...*.*.......*.*...*.....*...*...*...*....\
        *************************************************************";

      this.deriveGraph(this.state.input, 61, 61, 1, 0, 59, 60);
    }
    //="************.****************************..****************************.***************************.....***********************...****..*******************...*******...*****************.***.***.***.*****************.***********.*************.***..***...***..*************..***...*****...*******.*******.*****...**..****......*******..******.**.****..*************.****...**...**.**************.*....******....**************...************...************.****************.************..**************..*************...**********...****************....*.......*********************.********************">
  }
  handlerGo() {
    var visit = new Array(this.state.height);
    //console.log(this.state.height + " " + this.state.mazeWidth);
    for (var i = 0; i < this.state.height; i++) {
      visit[i] = new Array(parseInt(this.state.mazeWidth));
    }

    //console.log(visit);
    //console.log(this.state.Graph);
    this.dfs(visit, this.state.xStart, this.state.yStart);
  }
  updateGraph(visit) {
    var width = this.state.mazeWidth;
    var height = this.state.height;
    var c = 0;
    this.state.maze = [];
    ////console.log(this.state.Graph);
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        if (visit[i][j] == 1) {
          this.state.maze.push(<div key={c} className="whitegrid active" />);
        } else if (this.state.Graph[i][j] === "*") {
          this.state.maze.push(<div key={c} className="blackgrid" />);
        } else if (this.state.Graph[i][j] === ".") {
          if (visit[i][j] == 2)
            this.state.maze.push(<div key={c} className="blackgrid" />);
          else this.state.maze.push(<div key={c} className="whitegrid" />);
        }

        c++;
      }
    }
    this.setState({ maze: this.state.maze });
  }
  dfs(visit, u, v) {
    stk = [];
    stk.push({ x: u, y: v });
    this.nextStep(visit);
  }
  nextStep(visit) {
    //console.log(this.state.Graph);
    if (stk.length) {
      var src = stk[stk.length - 1];
      var flag = 1;
      var i = src.x;
      var j = src.y;
      //console.log(i + " " + j);
      if (i === this.state.xEnd && j === this.state.yEnd) {
        visit[i][j] = 1;
        this.finalGraph(visit);
        return;
      }
      if (!visit[i][j]) visit[i][j] = 1;
      ////console.log(i + " " + j);
      //console.log(this.state.Graph[i + 1][j]);

      if (
        i + 1 < this.state.height &&
        this.state.Graph[i + 1][j] == "." &&
        !visit[i + 1][j]
      ) {
        stk.push({ x: i + 1, y: j });
        flag = 0;
      }

      if (
        j + 1 < this.state.mazeWidth &&
        this.state.Graph[i][j + 1] == "." &&
        !visit[i][j + 1]
      ) {
        stk.push({ x: i, y: j + 1 });
        flag = 0;
      }

      if (j - 1 >= 0 && this.state.Graph[i][j - 1] == "." && !visit[i][j - 1]) {
        stk.push({ x: i, y: j - 1 });
        flag = 0;
      }

      if (i - 1 >= 0 && this.state.Graph[i - 1][j] == "." && !visit[i - 1][j]) {
        stk.push({ x: i - 1, y: j });
        flag = 0;
      }
      if (flag) {
        stk.pop();
        visit[i][j] = 2;
      }
      this.updateGraph(visit);

      setTimeout(() => {
        this.nextStep(visit);
      }, 50);
    }

    //visit[i][j]=0;
    // this.updateGraph(visit,i,j);
  }
  finalGraph(visit) {
    this.state.maze = [];
    var c = 0;
    for (var i = 0; i < this.state.height; i++) {
      for (var j = 0; j < this.state.mazeWidth; j++) {
        if (visit[i][j] == 1) {
          this.state.maze.push(<div key={c} className="whitegrid active" />);
        } else if (this.state.Graph[i][j] === "*") {
          this.state.maze.push(<div key={c} className="blackgrid" />);
        } else if (this.state.Graph[i][j] === ".") {
          this.state.maze.push(<div key={c} className="whitegrid" />);
        }
        c++;
      }
    }
    this.setState({ maze: this.state.maze });
  }
  render() {
    return (
      <div>
        <div className="page page-forms-elements">
          <div className="page-wrap">
            <div
              style={{ marginTop: "100px", background: "#efefef" }}
              className="panel panel-default panel-hovered panel-stacked mb30"
            >
              <div className="panel-heading">Maze Input</div>
              <div className="panel-body" />
              <form className="form-inline" role="form">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 col-75">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-user" aria-hidden="true" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter x of starting here..."
                          required
                          onChange={this.handlerxStart.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-75">
                      <div className="input-group">
                        <span className="input-group-addon ">
                          <i className="fa fa-envelope" aria-hidden="true" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter y of starting here..."
                          required
                          onChange={this.handleryStart.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-75">
                      <div className="input-group">
                        <span className="input-group-addon ">
                          <i className="fa fa-envelope" aria-hidden="true" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter x of ending here..."
                          required
                          onChange={this.handlerxEnd.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-75">
                      <div className="input-group">
                        <span className="input-group-addon ">
                          <i className="fa fa-envelope" aria-hidden="true" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter y of ending here..."
                          required
                          onChange={this.handleryEnd.bind(this)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-75">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-user" aria-hidden="true" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Width here..."
                          required
                          onChange={this.handlerWidth.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-75">
                      <div className="input-group">
                        <span className="input-group-addon ">
                          <i className="fa fa-envelope" aria-hidden="true" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Height here..."
                          required
                          onChange={this.handlerHeight.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-75">
                      <div className="input-group">
                        <span className="input-group-addon ">
                          <i className="fa fa-envelope" aria-hidden="true" />
                        </span>
                        <textarea
                          name="Text1"
                          cols="33"
                          rows="5"
                          placeholder="map of maze..."
                          required
                          onChange={this.handlerMap.bind(this)}
                        />{" "}
                      </div>
                    </div>
                    <div className="col-md-3 col-75">
                      <button
                        type="submit"
                        className=" btn btn-primary waves-effect "
                        style={{
                          marginBottom: "5px",

                          width: "100%"
                        }}
                        onClick={this.handlerSubmit.bind(this)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "65%", marginBottom: "50px" }}>
          <strong style={{ marginRight: "10px" }}>Custom Maze</strong>
          <select
            className="form-control"
            onChange={this.handlerCustom.bind(this)}
          >
            <option value="0" selected={true}>
              Select
            </option>
            <option value="1">'G' Maze</option>
            <option value="2">Little Maze</option>
            <option value="3">Vortex</option>
            <option value="4">Bird's Eye View</option>
            <option value="5">Alian</option>
            <option value="6">Classic Maze</option>
            <option value="7">Sam's Maze</option>
            <option value="8">Jp's Maze</option>
          </select>
        </div>
        <div
          style={{ width: this.state.mazeWidth * 15, marginBottom: "50px" }}
          className="container"
        >
          <div className="row">
            {this.state.maze.map(it => {
              return it;
            })}
          </div>
          <div
            className="row"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            {this.state.input ? (
              <div className="col-md-12 col-sm-12 col-xs-12">
                <button
                  type="submit"
                  className=" btn btn-primary waves-effect "
                  style={{ marginBottom: "5px", width: "100%" }}
                  onClick={this.handlerGo.bind(this)}
                >
                  Go
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Mazecontainer;

import React from 'react';

export default class TaskSheet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataList: [],
            data: ''
        }
        this.update = this.update.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    update(event){
        this.setState({
            data: event.target.value
        })
    }

    add(){
        let { data, dataList } = this.state;
        if(data !== "") {
            this.setState({
                data: '',
                dataList: [...dataList, data]
            })
        } else {
            alert("Please enter some tasks");
        }
    }

    remove(index){
        let { dataList } = this.state;
        dataList.splice(index, 1);
        this.setState({
            dataList: dataList
        })
    }

    render(){
        let { data, dataList } = this.state;
        return <div className="main">
          <div className="header">
            <input className="text" value={data}
            placeholder="Enter some tasks here ..."
            onChange={this.update}/>
            <button className="btn" onClick={this.add}>Add Todo</button>
            </div>
            <div className="listing">
            {
                dataList.map((data, index)=>{
                    return <h4 className="list" onClick={this.remove.bind(undefined, index)} key={index}>{index+1}. {data}</h4>
                })
            }
            </div>
        </div>
    }
}
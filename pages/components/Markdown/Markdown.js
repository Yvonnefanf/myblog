import React,{Component} from 'react';
import MarkDown from 'react-markdown'; 
import CodeBlock from '../CodeBlock/CodeBlock' //代码块组件

class Editor extends Component{
  constructor(props){
      super(props);
      this.state={
          content:""
      }
  }
  onChange = (e) => {
      this.setState({
          content:e.currentTarget.value
      })
  };
  render() {
      return(
          <div className="result-pane">
              <textarea onChange={this.onChange}/>
              <MarkDown className="result" source={this.state.content} renderers={{code:CodeBlock}}/>
          </div>
      )
  }
}
export default Editor;

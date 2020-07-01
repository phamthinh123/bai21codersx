import React,{Component} from 'react';



class BookList extends Component {
  render(){
  	const {item}=this.props
    return (
    <div className="BookList">
      <li>{item.title}+{item.description}</li>
    </div>
  )
  }
  
}

export default BookList;

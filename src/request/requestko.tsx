import React from 'react';


class GetRequestAsyncAwait extends React.Component
    <
    { message: string }, 
    { count: number } 
    > 
{ 






  render() {
   
    return (
      <div onClick={() => this.increment(1)}>
        {this.props.message} {this.state.count}
      </div>
    );
  }


  increment = (amt: number) => {
    // like this
    this.setState((state) => ({
      count: state.count + amt,
    }));
  };
}

export default GetRequestAsyncAwait;
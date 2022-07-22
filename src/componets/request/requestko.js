import React from 'react';
import itirateko from '../_testko/arrayko'


class GetRequestAsyncAwait extends React.Component{
    constructor(props) {
        super(props);

        this.state={totalReactPackages: null} 
        this.data =[]
        console.log(this.data, '========>1')

    };

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://ktc-ph-api.herokuapp.com/?format=json');
        const data = await response.json();
        // console.log(data.location.name)
        this.data = data

        // console.log(this.data)
        this.setState({ totalReactPackages:  data.location.name})
    };
  
        run5(){
            return(
                itirateko(this.data)
                // <h1>nasdw d w</h1>
            )
        };

    render() {
        const { totalReactPackages } = this.state;
        const drend = this.data
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Weather</h5>
                <div className="card-body">
                    Location: {totalReactPackages}
                </div>
                <div>
                    {this.run5()}
                </div>
            </div>
        );
    }
}



export default GetRequestAsyncAwait;
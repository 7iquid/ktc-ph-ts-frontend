import React from 'react';


class GetRequestAsyncAwait extends React.Component{
    constructor(props) {
        super(props);
        this.state={totalReactPackages: null};
         
    };

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://ktc-ph-api.herokuapp.com/?format=json');
        const data = await response.json();
        // console.log(data.location.name)

        this.setState({ totalReactPackages:  data.location.name})
    };

    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Weather</h5>
                <div className="card-body">
                    Location: {totalReactPackages}
                </div>
            </div>
        );
    }
}



export default GetRequestAsyncAwait;
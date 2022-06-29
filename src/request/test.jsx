import React from 'react';


class GetRequestAsyncAwait extends React.Component 

    

{
    constructor(props: string) {super(props);this.state={totalReactPackages: null} };

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://ktc-ph-api.herokuapp.com/?format=json');
        const data = await response.json();
        console.log(data)
        this.setState({ totalReactPackages: data.total })
    };

    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Async/Await</h5>
                <div className="card-body">
                    Total react packages: {totalReactPackages}
                </div>
            </div>
        );
    }
}

export default GetRequestAsyncAwait; 
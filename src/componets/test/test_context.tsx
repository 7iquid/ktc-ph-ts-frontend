import {FC, ReactNode} from 'react';

export const Parent=()=>{
	const data:string = 'helo po';
	return(
		<div>
{/*			<h2>
				<Child data={data} dog={'buldog'}/>
			</h2>*/}
		{/*<Child2 data={data}/>*/}
		<Child2 data= {<Child/>}>
			buldog <Child/>
		</Child2>
		</div>
		)
};

export const Child=(props:any )=>{
	// console.log(props.data+ 'child component')
	// const data:string = 'helo po';
	return(
		<div>
			<h2>this is child1 </h2>
			{props.data} {props.dog}
		123213
	
		</div>
		)
}


export const Child2:FC<{ children: ReactNode, data:any}>=({children, data})=>{
	// console.log(data)

	return(
		<div>
			 {data} {children}{'23123weqawe'}
			 <h2>this is child2 </h2>
		</div>
		)
}
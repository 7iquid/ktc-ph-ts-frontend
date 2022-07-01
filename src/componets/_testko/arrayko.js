
// import someObject from ('./somefile.json')
const array1 = [1, 4, 9, 16];
// let jason2 = '1'

let json = {
	"SocialMedias": ["https://github.com/", "https://www.linkedin.com/", "https://www.facebook.com/"],
	'name': ' address',
	"Experiences": [{
		"companyName": "Demo1 Technologies",
		"logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
		"url": "https://www.google.com/",
		"roles": [
		  {
			"title": "Full Stack Developer",
			"description": "Built and updated various Chrome Extensions.",
			"startDate": "2017-01-01",
			"endDate": "2017-05-01",
			"location": "New York, USA"
		  }
		]
	}]
};
 
// let dictss = {'name':'pogi'};
// let listss = ['names','pogi'];
// let listdict =[{'names':'pogi'},{'names':'pogi'}];

// let json2 = json.SocialMedias
// let map1 = json2.map(x => '<li>'+ x +'</li>');

// function mapping(x){

// 	return x
// }


// console.log(json2[1])

// function itirate(){
// 	let index = 0
// 	for (const [key, value] of Object.entries(json)) {
// 		index += 1 ;
// 		console.log('Tittle  '+ key)
// 		verifyty(value, key);
// 		// console.log(typeof(value))
// 		// console.log(index);
// 	 //    console.log(key + ":" + value);
// 	 function typobject(value){
// 	 	for (const [key, value1] of Object.entries(value)) {
// 			console.log(key + ":" + value1);
// 			}	
// 	 }
// 	 function verifyty(value, key=null){
// 	 	if (typeof(value)=='object'){
// 	 		console.log(value.length , '==========>L',key)
// 	 		if (value.length == 1){

// 	 			// verifyty(value[0]);
// 	 			console.log(value[0])
// 	 		}else{
// 	 			typobject(value);
// 	 		}
// 	 		// console.log(value.length , '==========>L')
	 		

// 	 	}else{
// 	 		console.log( value);

// 	 	}
// 	 }
// }}
// itirate();

// menuItems.push(<MenuItem>User.firstname[i]</MenuItem>);
function itirateko(jsonfile){
	let menuItems = [];
	if (typeof(jsonfile) == 'object'){
		console.log( 'object nga');
		let menuItems = [];
		forloopko(jsonfile);
		console.log(menuItems)
		return(<div>{menuItems}</div>);
	}else{
		return'please input obj'
	};

	function forloopko(fjsonfile){
		for (const [key, value] of Object.entries(fjsonfile)) {
			verifytype(value, key);
		}
	};

		// console.log( 'forloop gumana' ,(fjsonfile));	
	
	function verifytype(vervalue, verkey){
		if (typeof(vervalue) == 'object'){
			// console.log('   ', verkey);
			menuItems.push(<li> {vervalue} </li>);
			forloopko(vervalue);
		}else{
			// console.log('tittle name  =', verkey);
			menuItems.push(<h1> {verkey} </h1>);
			// console.log(verkey + ":" + vervalue);
			menuItems.push(<ul> {vervalue} </ul>);
		}
	};
};

export default itirateko;
// dict.map(function(v,k) { '
//     if (v === "DATA_NOT") { 
//     mapDict.add(v,k); 
//     }
// });



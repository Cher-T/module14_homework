const jsonString = `
{
	"list": [
	 {
	  "name": "Petr",
	  "age": "20",
	  "prof": "mechanic"
	 },
	 {
	  "name": "Vova",
	  "age": "60",
	  "prof": "pilot"
	 }
	]
   }`;


   JSON.parse(jsonString).list.forEach(obj => console.log(obj));
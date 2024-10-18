const Floripa = require("../components/compiler");
require("../components/precompile");

let data

class bar extends Floripa {
  constructor() {
    super();
  }

  render = () => {    
		
	init();
    createUpperNavBar("Bar do Jeiz")
    this.initMaster()
    initDiv("feedUpperMargin")	
	let max = Math.floor(Math.random() * data.length);
	data = data.slice(max, max + 10);
	  
	for(let unico of data){		 
	this.createCard(
	  unico.ID,
	  unico.USER_PIC,
	  unico.USERNAME,
	  unico.POST_DATA,
	  unico.PIC_LOCAL,
	  unico.POST_DESC
	);    
	}
	  
	endDiv()
	this.endMaster()  
  };

  page = async() => {
	  
	 data = await fetch("https://bar-do-jeiz.onrender.com/data")
	.then(res => res.json())
	.then((reqres) => { 
		let data = reqres.data
		return data
	})
	
	return this.createPage("Bar do Jeiz", this.render());
	     
  };
}

module.exports = bar;

$(document).ready(async () => {
	const time = 3000

	async function generateCat() {
		const cat = await axios.get(`https://api.thecatapi.com/v1/images/search`, {headers: {'Accept': 'application/json'}})
		$('#app').html(`
<span class="remaining">Loading...</span>
<img src="${cat.data[0].url}" height=500>
`)	
	}
	
	let remaining = 3
	
	generateCat()
	
	const x = setInterval(async () => {
		$('.remaining').html(`${remaining} seconds left`)
		
		remaining--
		
		if(remaining < 0) {
			remaining = 3
			generateCat()
		}
	}, 1000)
})